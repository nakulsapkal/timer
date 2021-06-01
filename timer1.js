for (let i = 2; i < process.argv.length; i++) {
  if ((process.argv.sort())[i] > 0) {
    setTimeout(() => {
      console.log(`Beep.. Seconds:${(process.argv.sort())[i]} \x07`);
      //process.stdout.write('\x07');
    }, (((process.argv.sort())[i]) * 1000));
  }
}