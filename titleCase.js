
/* Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". */
function titleCase(str) {
  var tmp = str.split(" ");
  
  var res = tmp.map(function(val){
    val = val.toLowerCase();
    return val.replace(val[0], val[0].toUpperCase());
  });
  
  return res.join(" ");
}

titleCase("I'm a little tea pot");
