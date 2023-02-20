let descendingOrder = (n: number): number => {
    let stringNumber: string[] = n.toString().split('').sort((a: string, b: string) => b.localeCompare(a));
    return parseInt(stringNumber.join(''))
}

//   Testing
// console.log(descendingOrder(0))//, 0);
// console.log(descendingOrder(1))//, 1);
// console.log(descendingOrder(123456789))//, 987654321);