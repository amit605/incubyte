export function add(numbers:string):number{
    // Input: “”, Output: 0
    if (numbers === "") {
        return 0;
    }
    // split the input and convert into number
    const numArr = numbers.split(",").map( newNum => parseInt(newNum));
    return numArr.reduce((sum,current)=>sum + current,0);
}