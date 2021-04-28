const inquirer = require('inquirer')
const ora = require('ora')
const DBManager = require('./DBManager')

const db = new DBManager()

const existingBackups = db.existingBackups(false)
const restoreOptions = existingBackups.map(filename => {
    return {
        name: filename.split('.').slice(0, -1).join('.'),
        value: filename
    }
})
restoreOptions.unshift(
    { name: 'La plus récente', value: 'last.sql' },
    new inquirer.Separator()
)

const dbLoadAssistant = () => {
    return new Promise(resolve => {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'filename',
                    message: 'Sauvegarde à restaurer',
                    choices: restoreOptions,
                }
            ])
            .then(answers => {
                const spinner = ora('Restauration de la sauvegarde ' + answers.filename + '...').start()
                db.loadBackup(answers.filename)
                    .then(() => {
                        spinner.stop()
                        console.log('✓ Sauvegarde restaurée avec succès')
                        resolve()
                    })
                    .catch(error => {
                        console.error(`Une erreur s'est produite: ${error.message}`)
                        spinner.stop()
                        console.log("❌ Une erreur s'est produite durant la restauration")
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

module.exports = dbLoadAssistant

if (require.main === module) {
    dbLoadAssistant()
}
