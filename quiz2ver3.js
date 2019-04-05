// //หลักการคือคิดกรณี array ปกติ รวม กับกรณี reverse array
// //แยก function findResult สำหรับคิด result ออกมา

function containerSize(arr) {

    function forwardArr(arr) {
        peak = [] //ใช้เก็บค่าตำแหน่งขอบสูงสุด
        lastPeak = 0 //ใช้เก็บค่าขอบสูงสุดล่าสุด
        result = 0

        //หาตำแหน่ง peak
        for (var i = 0; i < arr.length; i++) {
            if (lastPeak <= arr[i] && arr[i] != 0) {
                lastPeak = arr[i]
                peak.push(i)
            }
        }
        findResult(arr, peak)
        return result
    }
    function backwardArr(arr) {
        peak = [] //ใช้เก็บค่าตำแหน่งขอบสูงสุด
        lastPeak = 0 //ใช้เก็บค่าขอบสูงสุดล่าสุด
        result = 0

        //หาตำแหน่ง peak
        for (var i = 0; i < arr.length; i++) {
            if (lastPeak < arr[i] && arr[i] != 0) {
                lastPeak = arr[i]
                peak.push(i)
            }
        }
        findResult(arr, peak)
        return result
    }

    //ใช้สำหรับคำนวณหา result ในทั้ง forward และ backward
    function findResult(arr, peak) {
        //หาผลรวมระดับน้ำระหว่าง peak 
        for (var i = 0; i < peak.length - 1; i++) {
            for (var j = peak[i] + 1; j < peak[i + 1]; j++) {
                result = result + arr[peak[i]] - arr[j]
            }
        }
        console.log('peak: ', peak)
        return result
    }

    //หาผลลัพธ์
    forwardResult = forwardArr(arr)
    backwardResult = backwardArr(arr.reverse())

    return forwardResult + backwardResult
}

//var ex = [1,0,2,0,5,0,1,0,3,0,1,0,4]
// var ex = [1, 0, 1, 0, 1]
//var ex = [3, 1, 0, 2, 4, 0, 2, 0, 4, 0, 1, 2]
//var ex = [0, 0, 0]
//var ex = [3,0,2,0,1]
// var ex = [1,0,2,0,3]
// var ex = [3,2,1,2,0,2,1,3,0,1,0,4]
// var ex = [2,0,3,0,2,0,3,0,2]
//var ex = [5, 0, 1, 0, 4, 2, 5, 4, 6, 2, 4, 1, 2, 1, 2, 0, 4, 1]
console.log('result: ', containerSize(ex))

