function findLongestWord(str) {
  var tmp = str.split(" ");
  var max = tmp.reduce(function(a, b){
    if(b.length > a) {
      return b.length;
    }
    else {
      return a;
    }
  },0);
  
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");