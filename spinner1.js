// let shap = ["|", "/", "-", "\\", "|"];
// for (let i = 0; i < shap.length; i++) {
//   setTimeout(() => {
//     process.stdout.write(`\r${shap[i]}`);
//   }, 100 * (i + 5));
// }

setTimeout(() => {
  process.stdout.write("\r|");
}, 100);

setTimeout(() => {
  process.stdout.write("\r/");
}, 200);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 300);

setTimeout(() => {
  process.stdout.write("\r\\   ");
}, 400);
setTimeout(() => {
  process.stdout.write("\r|   ");
}, 500);
