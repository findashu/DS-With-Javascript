/**
 * Start with a sorted sub-list of size 1.
 * Insert the next element into the sorted sub-list at the right position. Now sorted sub-list has 2 elements.
 * This continues till the entire list is sorted.
*/

//Helper method for printing 
function print(arr){
    for (var i = 0; i<arr.length; i++){
        console.log(arr[i]);
    }
    console.log('\n');
}

// helper method for swapping
function swap(listToSort, iIndex,jIndex){
    var temp = listToSort[iIndex];
    listToSort[iIndex] = listToSort[jIndex];
    listToSort[jIndex] = temp;
}

function insertionSort(listToSort){
    for(let i = 0; i < listToSort.length-1; i++){
        for(j = i+1; j > 0; j--){
            if(listToSort[j] < listToSort[j -1]) {
                swap(listToSort,j,j-1);
            }else{
                break;
            }
            print(listToSort);
        }
    }
}

var arr = [4,7,2,5,8,1,10];

insertionSort(arr);