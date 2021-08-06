function palindrome(str) {
  
  str=str.replace(/\s/g, '');
  
  str=str.replace(/_/g, '');
  str=str.replace(/-/g, '');
  
  str=str.replace(/,/g, '');
  
  str=str.replace(/\./g,'');
  str=str.replace(/[{()}]/g, '');
  str=str.toLowerCase();
  var count=0

    for(var i=0; i<str.length;i++){
    
    if (str[i]===str[str.length-i-1]){
      count+=1
      
    }
  }
  if(count===str.length){
    console.log(true);
    return true;
    
  }
  else{console.log(false);return false;}
  }

palindrome("0_0 (: /-\ :) 0-0");
