// By using recursion

function add(arr) {
    let sum = 0;
    for(let i=0; i< arr.length; i++) {
        if(Array.isArray(arr[i])){
            sum += add(arr[i])
        }else{
            sum += arr[i]
        } 
    }
    return sum;
}
console.log(add([1,[11,42,[8, 1], 4, [22,21]]]));
