let Args = process.argv.slice(2);

myArgs = Args.map((x) => Number(x));

for (const arg of myArgs) {
  if (arg < 0 || isNaN(arg) === true) {
    // console.log(typeof arg);
    continue;
  } else {
    setTimeout(() => {process.stdout.write(`* \n${arg} seconds \n`);}, arg * 1000);
  }
};