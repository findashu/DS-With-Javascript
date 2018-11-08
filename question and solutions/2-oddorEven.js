const oddOrEven = a => a.reduce((s,n)=> s + n,0)%2 == 0 ? "even" : "odd";

console.log(oddOrEven([1,2,4]))