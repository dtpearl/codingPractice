const example: number[] = [1, 2, 3, 4];
const example2: (number | boolean)[] = [1, 2, 3, true];
const example3: any[] = [1, 2, "three", false];

function add(num1: number, num2: number): number { // require returned value of function to have type: number
    const example: number[] = [0, 1, 2]; // expects number data type
    const example2: any[] = ["a string", 1, true]; // can be any data type

    return num1 + num2; // return value is type: number
}