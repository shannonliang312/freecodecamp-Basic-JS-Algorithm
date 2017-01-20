function palindrome(str) {

  var reg = /[^a-zA-Z0-9]/g;
  var res = str.replace(reg, "").toLowerCase();
  var pos = res.split("");
  var rev = pos.slice(0).reverse();//深拷贝
  
  var ret = true;
  
  for(var i=0;i<pos.length; i++) {
    if (pos[i] != rev[i]) {
      ret = false;
    }
  }
  
  return ret;  
  
}



palindrome("not a palindrome");