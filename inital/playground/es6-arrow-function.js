const multiplier = {
    multiplyBy: 2,
    bases: [1, 2, 3],
    multiply() {
        return this.bases.map(base => base * this.multiplyBy );
    }
};

console.log(multiplier.multiply());