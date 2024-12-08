import { add } from "../src/calculator"

describe("Calculation", () => {
    // for empty string
    test("Return 0 when empty",()=>{
        expect(add("")).toBe(0);
    })

    // return 1 when input is 1
    test("Return 1 when input is 1",()=>{
        expect(add("1")).toBe(1);
    })

    // return 6 when input is 1,5
    test("Return 6 when input is '1,5'",()=>{
        expect(add("1,5")).toBe(6);
    })

})