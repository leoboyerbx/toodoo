const inquirer = require('inquirer')
const ora = require('ora')
const DBManager = require('./DBManager')

const now = new Date()
const pad = nbr => nbr.toString().padStart(2, '0')
const date =
    `db_${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}h${pad(now.getMinutes())}m${pad(now.getSeconds())}s`

const db = new DBManager()

const dbSaveAssistant = () => {
    return new Promise(resolve => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'filename',
                    message: 'Nom de fichier de sauvegarde',
                    default: date,
                    validate: input => input.length > 0 && input !== 'last',
                }
            ])
            .then(answers => {
                const spinner = ora('Sauvegarde de la BDD...').start()
                db.backupDb(answers.filename)
                    .then(() => {
                        spinner.stop()
                        console.log('✓ Sauvegarde effectuée avec succès')
                        resolve()
                    })
                    .catch(error => {
                        console.error(`Une erreur s'est produite: ${error.message}`)
                        spinner.stop()
                        console.log("❌ Une erreur s'est produite durant la sauvegarde")
                    })
            })
            .catch(error => {
                if(error.isTtyError) {
                    // Prompt couldn't be rendered in the current environment
                } else {
                    // Something else went wrong
                }
            })
    })
}

module.exports = dbSaveAssistant

if (require.main === module) {
    dbSaveAssistant()
}
