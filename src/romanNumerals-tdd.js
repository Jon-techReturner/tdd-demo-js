export {convertRomanNumerals};

function convertRomanNumerals(romanNumber){
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    
    let result = 0;
    for(let i = 0; i < romanNumber.length; i++){
        const currNum = romanMap[romanNumber[i]];
        const nextNum = romanMap[romanNumber[i + 1]];
        const prevNum = romanMap[romanNumber[i - 1]];

        if(currNum >= (nextNum || 0)) {
            result += currNum;
        }
        if(prevNum && currNum > prevNum){
            result -= prevNum;
        }
    }
    return result;
}