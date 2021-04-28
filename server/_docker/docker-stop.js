const { exec } = require("child_process");
const inquirer = require("inquirer")
const ora = require('ora')
const dbSaveAssistant = require('./db-save')

inquirer
	.prompt([
		{
			type: 'confirm',
			name: 'backup',
			message: 'Sauvegarder la base de données avant de stopper les conteneurs ?',
			default: true,
		}
	])
	.then(async answers => {
		if (answers.backup) {
			await dbSaveAssistant()
		}
		const spinner = ora('Arrêt des conteneurs...').start()
		exec('docker-compose down', (error, stdout, stderr) => {
			if (error) {
				console.error(`error: ${error.message}`);
				return;
			}
			spinner.stop()
			console.log('✓ Les conteneurs ont été arrêtés.')
		})
	})
	.catch(error => {
		if(error.isTtyError) {
			// Prompt couldn't be rendered in the current environment
		} else {
			// Something else went wrong
		}
	})
