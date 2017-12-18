console.log('utils.js is running');

const pi = 3.14;

const square = (x) => {
    // console.log("square: " + (pi * pi));
    if(x) {
        return x * x;
    }
    return pi * pi;
};

// export default square ;

export default (x) => {
    // console.log("square: " + (pi * pi));
    if(x) {
        return x * x;
    }
    return pi * pi;
};