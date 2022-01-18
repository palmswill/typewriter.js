const sentence = "hello there from lighthouse labs";
let char = 0;

typewriter = () => {
  process.stdout.write(sentence[char]);
  char++;
  if (char !== sentence.length) {
    setTimeout(typewriter, 50);
  }
  else{
    console.log("\n");
  }
};

typewriter();

