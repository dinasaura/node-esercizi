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
  
  async function getResults() {
    try {
      const resultTina = await luckyDraw('Tina');
      console.log(resultTina);
  
      const resultJorge = await luckyDraw('Jorge');
      console.log(resultJorge);
  
      const resultJulien = await luckyDraw('Julien');
      console.log(resultJulien);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  getResults();
  