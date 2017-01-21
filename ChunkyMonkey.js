/* Write a function that splits an array (first argument) 
    into groups the length of size (second argument) 
    and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var res=[];
  var sub = [];
  var i = 0;
  
  for(i=0;i<(arr.length)/size;i++) {
    sub = arr.slice(i*size, (i*size)+size);
    res.push(sub);
  }
  
  if(arr[i*size]) {
    res.push(arr.slice(i*size));
  }
  
  return res;
}

chunkArrayInGroups(["a", "b", "c", "d","p","e"], 3);
