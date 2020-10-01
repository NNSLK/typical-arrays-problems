exports.min = function min(array) {
    if (Array.isArray(array) && array.length) {
        return Math.min.apply(Math, array);
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (Array.isArray(array) && array.length) {
        return Math.max.apply(Math, array);
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    if (Array.isArray(array) && array.length) {
        let sum = 0;
        let result = 0;
        for (let i = 0; i < array.length; i++) {
            if (array.length > 0) {
                sum += array[i];
                result = sum / array.length;
            }
        }

        return result;
    } else {
        return 0;
    }
};
