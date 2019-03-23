function romanConverter(num) {

    //ประกาศเลขฐาน10 และ เลข roman
    var decNumber = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    var result = ''

    //หาผลลัพธ์โดยการไล่ลบไปเรื่อยๆ
    for (var i = 0; i < decNumber.length; i++) {
        while (num >= decNumber[i]) {
            result += roman[i]
            num -= decNumber[i]
        }
    }

    return result
}

//ใช้สำหรับรับค่าทาง terminal
const readline = require('readline-sync')

var number = readline.question("Please input number : ")
console.log('Roman : ', romanConverter(number))