function binarySearch(sortedArray, element){
    let min = 0;
    let max = sortedArray.length - 1;

    while(min <= max){
        let mid = parseInt(min + (max - min) / 2);
        if(sortedArray[mid] == element){
            return mid;
        }
        if(sortedArray[mid] > element){
            max = mid-1;
        }else{
            min = mid+1;    
        }
    }
    return -1;
}

var arr = [11,22,33,44,55,66,77,88,99,110];

var b = binarySearch(arr,99);
console.log(b);