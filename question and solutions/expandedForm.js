// Solution 1

function expandedForm1(num) {
    if (num == 0 || typeof num != 'number') {
        return '0'
    }
    let str = '';
    let n = num;
    while (n >= 1) {
        var last = n / 10;
        n = n % 10;
        if (last != 0) {
            str += last * Math.pow(10, n.length);
        }
    }
    return str
}

// Solution 2

const expandedForm2 = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");