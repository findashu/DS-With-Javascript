// Q.Implement an algorithm to determine if a string has all unique characters 
//   What if you can not use additional data structures?

function isUniqueChars(str){
    var char_set = [256];
    for(var i=0; i<str.length; i++){
      var val = str.charAt(i);
      if(char_set[val]){
        return false;
        
      }
      char_set[val] = true;
    }
    return true;
  }
  
  console.log(isUniqueChars('hello'));// false
  console.log(isUniqueChars('helo'));// true

  // Time complexity is O(n), where n is the length of the string, and space complexity is O(n) 