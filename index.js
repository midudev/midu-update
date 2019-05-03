#!/usr/bin/env node
const ora = require('ora')

const spinner = ora('Iniciando @midudev 👨‍💻').start()

setTimeout(() => {
  spinner.succeed('@midudev a tope 🔝!')
	spinner.color = 'yellow';
  spinner.text = 'Recuperando actualizaciones 🔽';
  spinner.start()
}, 1500)

setTimeout(() => {
  spinner.succeed('Actualizado 👌!').start()
	spinner.color = 'red';
  spinner.text = 'Subiendo vídeo al canal 🆙 ';
}, 3000)

setTimeout(() => {
  spinner.succeed('Vídeo subido con éxito 📹!').start()
  spinner.color = 'blue'
  spinner.text = 'Reproduciendo! ⏯️'
}, 4500)