/* 
For each iteration, every element is compared with its neighbor and swapped if they are not in order.

This results in smaller elements bubbling to the beginning of the list.

At the end of the first iteration, the smallest element is in the right postion, at end of the second iteration the second smallest is in the right position and so on..

Interesting thing with bubble sort is that every iteration leaves the list in more n more sorted state till its completly sorted.

The complexity of bubble sort is O(N*N).
It is stable sort.
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

function bubbleSort(listToSort){
    for(let i=0; i< listToSort.length; i++){
        let swapped = false;
        for(let j=listToSort.length-1;j>i;j--){
            if(listToSort[j] < listToSort[j-1]){
                swap(listToSort,j,j-1);
                swapped = true;
            }
        }
        print(listToSort)
        if(!swapped){
            break;
        }
    }
}

var arr = [4,7,2,5,8,1,10];

bubbleSort(arr);