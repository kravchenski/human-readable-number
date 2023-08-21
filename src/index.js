module.exports = function toReadable(number) {
    let numbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: "four",
        5: 'five',
        6: 'six',
        7: "seven",
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }
    let numbersWithoutZero = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: "four",
        5: 'five',
        6: 'six',
        7: "seven",
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }
    let dozens = {
        10: 'ten',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }
    let hundreds = {
        100: 'one hundred',
        200: 'two hundred',
        300: 'three hundred',
        400: 'four hundred',
        500: 'five hundred',
        600: 'six hundred',
        700: 'seven hundred',
        800: 'eight hundred',
        900: 'nine hundred',
    }


    const numberToString = String(number)
    if (numberToString.length == 2) {
        if (number >= 20 && number % 10 == 0) {
            return dozens[numberToString]
        }
        else {
            if (numberToString[0] == 2) {
                return dozens['20'] + " " + numbers[numberToString[1]]
            }
            if (numberToString[0] == 3) {
                return dozens['30'] + " " + numbers[numberToString[1]]
            }
            if (numberToString[0] == 4) {
                return dozens['40'] + " " + numbers[numberToString[1]]
            }
            if (numberToString[0] == 5) {
                return dozens['50'] + " " + numbers[numberToString[1]]
            }
            if (numberToString[0] == 6) {
                return dozens['60'] + " " + numbers[numberToString[1]]
            }
            if (numberToString[0] == 7) {
                return dozens['70'] + " " + numbers[numberToString[1]]
            }
            if (numberToString[0] == 8) {
                return dozens['80'] + " " + numbers[numberToString[1]]
            }
            if (numberToString[0] == 9) {
                return dozens['90'] + " " + numbers[numberToString[1]]
            }
        }
    }
    if (numberToString.length == 3) {
        if (number >= 100 && number % 100 == 0) {
            return hundreds[numberToString]
        }
        else if (numberToString[1] == 2 && numberToString[2] != 0) {
            return numbers[parseInt(numberToString[0])] + " " + 'hundred' + " " + dozens['20'] + " "+ numbers[numberToString[2]]
        }
        else if (numberToString[1] == 3 && numberToString[2] != 0) {
            return numbers[parseInt(numberToString[0])] + " " + 'hundred' + " " + dozens['30'] +" "+ numbers[numberToString[2]]
        }
        else if (numberToString[1] == 4 && numberToString[2] != 0) {
            return numbers[parseInt(numberToString[0])] + " " + 'hundred' + " " + dozens['40'] +" "+ numbers[numberToString[2]]
        }
        else if (numberToString[1] == 5 && numberToString[2] != 0) {
            return numbers[parseInt(numberToString[0])] + " " + 'hundred' + " " + dozens['50'] +" "+ numbers[numberToString[2]]
        }
        else if (numberToString[1] == 6 && numberToString[2] != 0) {
            return numbers[parseInt(numberToString[0])] + " " + 'hundred' + " " + dozens['60'] +" "+ numbers[numberToString[2]]
        }
        else if (numberToString[1] == 7 && numberToString[2] != 0) {
            return numbers[parseInt(numberToString[0])] + " " + 'hundred' + " " + dozens['70'] +" "+ numbers[numberToString[2]]
        }
        else if (numberToString[1] == 8 && numberToString[2] != 0) {
            return numbers[parseInt(numberToString[0])] + " " + 'hundred' + " " + dozens['80'] +" "+ numbers[numberToString[2]]
        }
        else if (numberToString[1] == 9 && numberToString[2] != 0) {
            return numbers[parseInt(numberToString[0])] + " " + 'hundred' + " " + dozens['90'] +" "+ numbers[numberToString[2]]
        }
        else if (numberToString[1] == 0) {
            return numbers[parseInt(numberToString[0])] + " " + 'hundred' + " " + numbers[numberToString[2]]
        }

        else if (numberToString[1] == 0) {
            return numbers[parseInt(numberToString[0])] + " " + 'hundred' + " " + numbers[numberToString[2]]
        }
        else if (numberToString[1] == 1) {
            return numbers[parseInt(numberToString[0])] + " " + 'hundred' + " " + numbers[numberToString.slice(1, numberToString.length)]
        }



        else {

            if (numberToString[1] == 2) {
                return numbers[parseInt(numberToString[0])] + " " + 'hundred' + " " + dozens['20']
            }
            if (numberToString[1] == 3) {
                return numbers[parseInt(numberToString[0])] + " " + 'hundred' + " " + dozens['30']
            }
            if (numberToString[1] == 4) {
                return numbers[parseInt(numberToString[0])] + " " + 'hundred' + " " + dozens['40']
            }
            if (numberToString[1] == 5) {
                return numbers[parseInt(numberToString[0])] + " " + 'hundred' + " " + dozens['50']
            }
            if (numberToString[1] == 6) {
                return numbers[parseInt(numberToString[0])] + " " + 'hundred' + " " + dozens['60']
            }
            if (numberToString[1] == 7) {
                return numbers[parseInt(numberToString[0])] + " " + 'hundred' + " " + dozens['70']
            }
            if (numberToString[1] == 8) {
                return numbers[parseInt(numberToString[0])] + " " + 'hundred' + " " + dozens['80']
            }
            if (numberToString[1] == 9) {
                return numbers[parseInt(numberToString[0])] + " " + 'hundred' + " " + dozens['90']
            }


        }
    }
    else {
        return numbers[number]
    }

}