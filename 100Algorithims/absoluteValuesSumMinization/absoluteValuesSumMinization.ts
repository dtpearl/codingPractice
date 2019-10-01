function absoluteValuesSumMinimization(a: number[]): number {
    const isEvenLength: boolean = a.length % 2 === 0;

    return isEvenLength ? a[a.length / 2 - 1 ] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));