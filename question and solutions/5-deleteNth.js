function deleteNth(list, n) {
    let k = 0
    let newList = [];
    for (var i = 0; i < list.length; i++) {
        let counter = 0;
        let item = list[i]

        for (var j = 0; j <= newList.length; j++) {
            if (item == newList[j]) {
                counter++;
            }
        }
        if (counter < n) {
            newList[k] = item;
            k++;
        }
    }
    return newList
}