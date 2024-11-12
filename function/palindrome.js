function  palindrome(str){
    let   check = str.toLowerCase();
    let chak = str.split('').reverse().join('');
    return check === chak 
    
    }
  
  

  
  let inputstr = "maayaam"
  
  result = palindrome(inputstr)
  console.log("is this word palindrome ? " + result);
  