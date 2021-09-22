let shap = ["|", "/", "-", "\\", "|"];
for (let i = 0; i < shap.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${shap[i]}`);
  }, 100 * (i + 5));
}
