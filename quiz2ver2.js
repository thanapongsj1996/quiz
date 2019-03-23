//หลักการคือคิดกรณี array ปกติ รวม กับกรณี reverse array
//แยก function findResult สำหรับคิด result ออกมา

function containerSize(arr) {

    function forwardArr(arr) {
        peak = [] //ใช้เก็บค่าตำแหน่งขอบสูงสุด
        h = 0 //ใช้เช็คความสูงตำแหน่งใดๆ
        hindex = 0 //ใช้เช็คตำแหน่งของความสูงใดๆ
        lastPeak = 0 //ใช้เก็บค่าขอบสูงสุดล่าสุด
        lastIndex = 0 //ใช้แทนน้ำแหน่งขอบสุดท้าย (peak สุดท้าย)
        result = 0

        //หาตำแหน่ง peak
        for (var i = 0; i < arr.length; i++) {
            if (lastPeak <= arr[i] && arr[i] != 0) {
                h = 0
                lastPeak = arr[i]
                peak.push(i)
            } else {
                h = arr[i]
                hindex = i
            }
        }
        findResult(arr, peak)
        return result
    }
    function backwardArr(arr) {
        peak = [] //ใช้เก็บค่าตำแหน่งขอบสูงสุด
        h = 0 //ใช้เช็คความสูงตำแหน่งใดๆ
        hindex = 0 //ใช้เช็คตำแหน่งของความสูงใดๆ
        lastPeak = 0 //ใช้เก็บค่าขอบสูงสุดล่าสุด
        lastIndex = 0 //ใช้แทนน้ำแหน่งขอบสุดท้าย (peak สุดท้าย)
        result = 0

        //หาตำแหน่ง peak
        for (var i = 0; i < arr.length; i++) {
            if (lastPeak < arr[i] && arr[i] != 0) {
                h = 0
                lastPeak = arr[i]
                peak.push(i)
            } else {
                h = arr[i]
                hindex = i
            }
        }
        findResult(arr, peak)
        return result
    }

    //ใช้สำหรับคำนวณหา result ในทั้ง forward และ backward
    function findResult(arr, peak) {
        //หาผลรวมตั้งแต่ต้นจนถึงก่อนขอบสุดท้าย
        for (var i = 0; i < peak.length - 1; i++) {
            for (var j = peak[i] + 1; j < peak[i + 1]; j++) {
                result = result + arr[peak[i]] - arr[j]
            }
        }
        console.log('peak: ', peak)
        return result
    }


    //สร้าง reverse array
    reverseArray = []
    for (var i = arr.length - 1; i >= 0; i--) {
        reverseArray.push(arr[i])
    }

    forwardResult = forwardArr(arr)
    backwardResult = backwardArr(reverseArray)
    return forwardResult + backwardResult
}

//var ex = [1,0,2,0,5,0,1,0,3,0,1,0,4]
//var ex = [1, 0, 1, 0, 1]
//var ex = [3, 1, 0, 2, 4, 0, 2, 0, 4, 0, 1, 2]
//var ex = [0, 0, 0]
//var ex = [3,0,2,0,1]
//var ex = [1,0,2,0,3]
//var ex = [3,2,1,2,0,2,1,3,0,1,0,4]
//var ex = [2,0,3,0,2,0,3,0,2]
//var ex = [5, 0, 1, 0, 4, 2, 5, 4, 6, 2, 4, 1, 2, 1, 2, 0, 4, 1]
console.log('result: ', containerSize(ex))