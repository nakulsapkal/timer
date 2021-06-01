for (let i = 2; i < process.argv.length; i++) {
  if ((process.argv.sort())[i] >= 1) {
    setTimeout(() => {
      console.log((process.argv.sort())[i]);
      process.stdout.write('\x07');
    }, (((process.argv.sort())[i]) * 1000));
  }
}