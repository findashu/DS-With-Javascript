const s1 = "ACBZC";
const s2 = "BAXBRC";

function longestSubs(s1,s2,s1StartIndx =0,s2StartIndx =0) {
 let results = [];
  
  for(let s1Indx = s1StartIndx; s1Indx < s1.length; s1Indx++ ){
    var s1char = s1[s1Indx];
    var s2Indx = s2.indexOf(s1char, s2StartIndx);
    
    let result = [];
    
    if(s2Indx != -1) {
      result.push(s1char, ...longestSubs(s1,s2,s1Indx+1,s2Indx+1))
    }
    results.push(result);
    
  }
  
  const longest = findLongest(results);
  return longest.join('');
}

function findLongest(arr){
  let longest = [];
  for(let candidate of arr) {
    if(candidate.length > longest.length){
      longest = candidate;
    }
  }
  return longest;
}


console.log('result', longestSubs(s1,s2))