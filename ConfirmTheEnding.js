
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if(str.substr(str.length-target.length, str.length-1) == target) return true;
  else return false;
  
}

confirmEnding("Bastian", "n");
