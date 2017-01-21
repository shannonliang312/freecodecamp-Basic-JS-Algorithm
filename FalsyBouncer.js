/* Remove all falsy values from an array. */
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  return arr.filter(function(val){
    if(val) {
      return val;
    }
  });
}

bouncer([7, "ate", "", false, 9]);