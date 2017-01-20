
function largestOfFour(arr) {
  // You can do this!
  var res = [];
  arr.forEach(function(sub){
    var tmp=sub.reduce(function(a, b){
      if(b>a) return b;
      else return a;
    },0);
    res.push(tmp);
  });
  
  return res;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
