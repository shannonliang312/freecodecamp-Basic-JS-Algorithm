
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr = arr.sort(function(a,b){return a-b;});
  
  if(num <= arr[0]){
    console.log(arr[0]);
    return 0;
  }
  
  for(var i = 0;i<arr.length-1;i++) {
    if(num>arr[i] && num<=arr[i+1]) {
      return i+1;
    }  
  }
  
  if(num > arr[i]) {
    return arr.length;
  }
  
}

getIndexToIns([5, 3, 20, 3], 5);