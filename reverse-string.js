function reverseString(str) {
  var tmp = str.split("");
  str = tmp.reverse().join("");
  
  return str;
}

reverseString("hello");

​