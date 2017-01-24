/* You will be provided with an initial array (the first argument in the destroyer function), 
   followed by one or more arguments. 
   Remove all elements from the initial array that are of the same value as these arguments. */

function destroyer(arg) {
  // Remove all the values
  var tmp = Array.prototype.slice.call(arguments);//将arguments转换为数组
  var args = tmp.slice(1);
  tmp.splice(1);
  var arr = tmp[0];
  return arr.filter(function(val){
    if(!args.some(function(val1){return val==val1;})) {
      return val;
    }
  });
}

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);