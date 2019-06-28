export function findMax(numbers) {
    let max = -Infinity;
    for (const n of numbers) {
        if (n > max) max = n;
    }
    return max;
}
