export function add(numbers:string):number{
    // Input: “”, Output: 0
    if (numbers === "") {
        return 0;
    }
    // split the input and convert into number
    const numArr = numbers.split(/[\n,]/,).map(Number);
    //check for negative numbers
    const negativeVal = numArr.filter((num)=>num<0);
    if(negativeVal.length>0){
        throw new Error("Neagtive numbers not allowed : " + negativeVal.join(","));    
    }
    return numArr.reduce((sum,current)=>sum + current,0);
}