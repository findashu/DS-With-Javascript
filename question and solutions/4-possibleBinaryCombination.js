let a = []
function binaryCombination(i) {
    if (i === 0) {
        console.log(a.join(''));
    } else {
        a[i - 1] = 0;
        binaryCombination(i - 1);
        a[i - 1] = 1;
        binaryCombination(i - 1);
    }
}

binaryCombination(2)