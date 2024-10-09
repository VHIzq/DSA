function recursion(n) {
  if (n <= 0) {
    return;
  }

  recursion(n - 1);
  let line = "";

  for (let i = 0; i < n; i++) {
    line += "#";
  }
  console.log(line);
}

recursion(7);
