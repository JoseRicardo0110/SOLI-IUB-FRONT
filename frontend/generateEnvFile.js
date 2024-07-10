const fs = require('fs');
const path = require('path');
const glob = require('glob');

function globPromise(pattern) {
  return new Promise((resolve, reject) => {
    glob(pattern, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}

// Usar glob para buscar archivos .js y .jsx en el directorio src
globPromise('src/**/*.{js,jsx}')
  .then((files) => {
    const envVariables = new Set();

    files.forEach((file) => {
      const content = fs.readFileSync(file, 'utf-8');
      const regex = /process\.env\.REACT_APP_[a-zA-Z0-9_]+/g;
      const matches = content.match(regex);

      if (matches) {
        matches.forEach((match) => envVariables.add(match.split('.')[2]));
      }
    });

    const envContent = Array.from(envVariables)
      .map((variable) => `${variable}=`)
      .join('\n');

    fs.writeFileSync(path.join(__dirname, '.env'), envContent);

    console.log('Archivo .env generado con éxito');
  })
  .catch((err) => {
    console.error('Error al buscar archivos:', err);
  });