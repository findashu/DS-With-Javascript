// Solution One
function likes(names) {
    if (!Array.isArray(names) || names.length == 0) {
        return 'no one likes this'
    }
    switch (names.length) {
        case 1:
            return `${names[0]} likes this`
        case 2:
            return `${names[0]} and ${names[1]} like this`
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`
        default :
        return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }   
}

// Solution 2
function likes(names) {
    return {
        0: `no one likes this`,
        1: `${names[0]} likes this`,
        2: `${names[0]} and ${names[1]} like this`,
        3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
        4: `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }[Math.min(4,names.length)]
}


// Test cases
console.log(likes([]));
console.log(likes(['Max','Ashu','Raja']));
console.log(likes(['Max','Ashu','Raja','Hello']));
console.log(likes(['Max','Ashu']));
console.log(likes(['Max']));

console.log(likes(['Max','Ashu','Raja','Hello','Der','Der','Der','Der','Der','Der','Der','Der','Der','Der','Der','Der','Der']));