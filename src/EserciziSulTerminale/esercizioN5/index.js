import figlet from 'figlet';

const textToArt = 'Hello, Figlet!';

figlet(textToArt, function (err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});
