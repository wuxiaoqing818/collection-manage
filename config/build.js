const projectName = process.argv[2]
const fs = require('fs')
fs.writeFileSync('./config/projects.js', `exports.name = '${projectName}'`)
const exec = require('child_process').execSync
exec('npm run build', {
  stdio: 'inherit'
})