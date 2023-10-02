import fs from 'fs';

const contenuto = 'Ciao, Node.js!';

fs.writeFile('output.txt', contenuto, 'utf8', (err) => {
  if (err) {
    console.error('Errore durante la scrittura del file:', err);
  } else {
    console.log('File scritto con successo!');
  }
});
