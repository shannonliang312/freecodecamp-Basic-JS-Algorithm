/* Return true if the string in the first element of the array 
   contains all of the letters of the string in the second element of the array. */

function mutation(arr) {
  var a0 = arr[0].toLowerCase();
  var a1 = arr[1].toLowerCase();
  var res = true;
  
  for(var i = 0;i<a1.length;i++) {
    if(a0.indexOf(a1[i])<0) {
      res = false;
      break;
    }
  }
  
  return res;
}

mutation(["hello", "hey"]);