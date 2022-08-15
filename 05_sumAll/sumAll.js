const sumAll = function(int1, int2) {

    let result = 0;

    if (int1 > int2) [int1, int2] = [int2, int1];

    if ((int1 || int2) < 0) return "ERROR";

    if ((!Number.isInteger(int1) || !Number.isInteger(int2))) return "ERROR";

    for (let i = int1; i <= int2; i++) result += i;

    return result;
};

// Do not edit below this line
module.exports = sumAll;
