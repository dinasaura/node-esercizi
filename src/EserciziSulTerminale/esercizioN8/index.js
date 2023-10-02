function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} ha vinto un premio`);
        } else {
          reject(new Error(`${player} ha perso`));
        }
      });
    });
  }
  
  luckyDraw('Joe')
    .then((risultato) => {
      console.log(risultato);
    })
    .catch((errore) => {
      console.error(errore.message);
    })
    .then(() => {
      return luckyDraw('Caroline');
    })
    .then((risultato) => {
      console.log(risultato);
    })
    .catch((errore) => {
      console.error(errore.message);
    })
    .then(() => {
      return luckyDraw('Sabrina');
    })
    .then((risultato) => {
      console.log(risultato);
    })
    .catch((errore) => {
      console.error(errore.message);
    });
  