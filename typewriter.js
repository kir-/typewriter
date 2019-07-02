const sentence = "hello there from lighthouse labs";
let x = 0;

let sentenceModifier = sentence + '\n';
for (const char of sentenceModifier) {
  setTimeout(()=>{
    process.stdout.write(char);
  },x);
  x += 500;
}
