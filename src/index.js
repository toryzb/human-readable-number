const UNITS_TABLE = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
};

const TEENS_TABLE = {
    '0': 'ten',
    '1': 'eleven',
    '2': 'twelve',
    '3': 'thirteen',
    '4': 'fourteen',
    '5': 'fifteen',
    '6': 'sixteen',
    '7': 'seventeen',
    '8': 'eighteen',
    '9': 'nineteen',
};

const DOZENS_TABLE = {
    '2': 'twenty',
    '3': 'thirty',
    '4': 'forty',
    '5': 'fifty',
    '6': 'sixty',
    '7': 'seventy',
    '8': 'eighty',
    '9': 'ninety',
};

module.exports = function toReadable(number) {
    let unitsMap = new Map(Object.entries(UNITS_TABLE));
    let teensMap = new Map(Object.entries(TEENS_TABLE));
    let dozensMap = new Map(Object.entries(DOZENS_TABLE));
    let num = String(number);
    let str = '';

    if (num.length === 1) {
        str = unitsMap.get(num);
    }
    else if (num.length === 2) {
        if (num[0] === '1') {
            str = teensMap.get(num[1]);
        }
        else {
            if (num[1] !== '0') { 
                str = dozensMap.get(num[0]) + ' ' + unitsMap.get(num[1]); 
            }
            else {
                str = dozensMap.get(num[0]);
            }
        }
    }
    else if (num.length === 3) {
        if (num[1] === '1') {
            str = unitsMap.get(num[0]) + ' hundred ' + teensMap.get(num[2]);
        }
        else {
            if (num[1] !== '0' && num[2] !== '0') { 
                str = unitsMap.get(num[0]) + ' hundred ' + dozensMap.get(num[1]) + ' ' + unitsMap.get(num[2]); 
            }
            else if (num[1] !== '0' && num[2] === '0') {
                str = unitsMap.get(num[0]) + ' hundred ' + dozensMap.get(num[1]);
            }
            else if (num[1] === '0' && num[2] !== '0') { 
                str = unitsMap.get(num[0]) + ' hundred ' + unitsMap.get(num[2]); 
            }
            else if (num[1] === '0' && num[2] === '0') {
                str = unitsMap.get(num[0]) + ' hundred';
            }
        }
    }
    return str;

}