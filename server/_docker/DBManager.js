const { exec } = require('child_process');
const fs = require('fs')

class DBManager {
    backupDb(filename) {
        return new Promise((resolve, reject) => {
            const command = `docker exec mysqldb mysqldump -u root --password=root --all-databases > "./_docker/data/${filename}.sql" && docker exec mysqldb mysqldump -u root --password=root --all-databases > ./_docker/data/last.sql`
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    reject(error)
                    return
                }
                resolve(stdout)
            })
        })
    }
    loadBackup(filename) {
        if (!filename.endsWith('.sql')) filename += '.sql'
        return new Promise((resolve, reject) => {
            const command = `docker exec -i mysqldb mysql -u root --password=root < "./_docker/data/${filename}"`
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    reject(error)
                    return
                }
                resolve(stdout)
            })
        })
    }
    existingBackups( includeLast = true) {
        let files = fs.readdirSync('./_docker/data')
        if (!includeLast) {
            files = files.filter(file => file !== 'last.sql')
        }
        return files
    }
}

module.exports = DBManager
