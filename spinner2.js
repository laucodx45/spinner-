let cursor = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let delay = 100;
for (let i = 0; i < cursor.length; i ++) {
  setTimeout(() => {
    process.stdout.write(cursor[i]);
  }, delay);
  delay += 200;
}