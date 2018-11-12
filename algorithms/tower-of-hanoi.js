

// function move(n, src, aux, dest) {

        // move all disks but the last from source to auxiliary rod,
        // that's why aux and dest rods are swapped in a function call
        // so that aux rod becomes the destination
//  move(n - 1, src, dest, aux);
    
        // move the last disk from source to destination rod
//  dest.push(src.pop());
    
        // move the remaining disks from auxiliary to target rod,
        // that's why aux and src rods are swapped in a function call
        // so that auxiliary rod becomes the source
//   move(n - 1, aux, src, dest);
// }

function move(n, src, aux, dest) {
    if (n === 1) {
        dest.push(src.pop());
    } else {
        move(n - 1, src, dest, aux);
        dest.push(src.pop());
        move(n - 1, aux, src, dest);
    }
}