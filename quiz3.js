//ใช้สำหรับรับค่าทาง terminal
const readline = require('readline-sync')

var number = readline.question("Please input number (seat): ")

//ประกาศจำนวนที่นั่งเริ่มต้น และราคารวม
var L = 0
var M = 0
var S = 0
var total = 0

//วน loop เก็บค่าไปตามเงื่อนไขที่คิดได้
while (true) {
    if (number > 20) {
        L += 1
        number -= 15
    } else if (number > 15) {
        M += 2
        break
    } else if (number > 10) {
        L += 1
        break
    } else if (number > 5) {
        M += 1
        break
    } else {
        S += 1
        break
    }
}
//รวมราคา
total = L * 12 + M * 8 + S * 5
//เงื่อนไขสำหรับแสดงผลลัพธ์
if (S != 0) console.log('S x ' + S)
if (M != 0) console.log('M x ' + M)
if (L != 0) console.log('L x ' + L)
console.log('Total = ' + total + ' $')