function containerSize(arr) {
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
    //หาตำแหน่งขอบสุดท้าย
    if (arr[peak[peak.length - 1]] > h && h != 0) lastIndex = hindex

    //หาผลรวมตั้งแต่ต้นจนถึงก่อนขอบสุดท้าย
    for (var i = 0; i < peak.length - 1; i++) {
        for (var j = peak[i] + 1; j < peak[i + 1]; j++) {
            result = result + arr[peak[i]] - arr[j]
        }
    }

    //รวมผลลัพธ์ทั้งหมด
    for (var k = peak[peak.length - 1] + 1; k < lastIndex; k++) {
        result += arr[lastIndex] - arr[k]
    }

    return result
}

var ex = [2, 0, 0, 5, 1, 1, 3]
//var ex = [3, 1, 0, 2, 4, 0, 2, 0, 4, 0, 1, 2]
//var ex = [0, 0, 0]
console.log('result: ', containerSize(ex))