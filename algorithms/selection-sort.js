//Helper method to printing 
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

function selectionSort(listToSort){
    for(var i = 0; i < listToSort.length; i++){
        for(var j = i+1; j < listToSort.length; j++ ){
            if(listToSort[i] > listToSort[j]){
                swap(listToSort,i,j);
                print(listToSort);
            }
        }
    }
}

var unsorted = [2,4,5,1,9];

selectionSort(unsorted);