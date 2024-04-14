function mapLetters(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = [i];
    } else {
      obj[str[i]].push(i);
    }
  }
  return obj;
}

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(mapLetters(str)));