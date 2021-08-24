const items = ['\r|   ','\r/   ','\r-   ', '\r\\   ','\r|   ','\r/   ','\r-   ', '\r\\   ', '\n'];

const spinner = (array) =>  {
  let time = 100;
  array.forEach(item =>
    setTimeout(() => {
      process.stdout.write(item);
    }, time += 200));
};

spinner(items);