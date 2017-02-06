function rot13(str) { // LBH QVQ VG!
  var arr = str.split("");

  var res = arr.map(function (val) {
    if (val == " ") {
      return " ";
    } else if (val.charCodeAt() <= 77 && val.charCodeAt() >= 65) {
      return String.fromCharCode(val.charCodeAt() + 13);
    } else if (val.charCodeAt() <= 90 && val.charCodeAt() >= 78) {
      return String.fromCharCode(val.charCodeAt() - 13);
    } else return val;
  });

  return res.join("");
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));