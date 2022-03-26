const arr1 = [ 
    [11, 2, 4], 
    [4, 5, 6], 
    [10, 8, -12]]
diagonalDifference(arr1)

//console.log(arr1.reverse())

function diagonalDifference(arr) {
    console.log(arr)
    const matrixLength = arr.length // number
    const arrFlat = arr.flat()
    const reversed = arr.reverse()
    const arrFlatReverse = reversed.flat()
    console.log('reverse: ',arrFlatReverse)
    console.log('normal: ', arrFlat)
    let diag1 = []
    let diag2 = []
    //console.log(arrFlat.length)
    //console.log(matrixLength)
    let count = 0
    
    let increment = ((c, matrixLength) => c += (matrixLength + 1))
    let indexRight = [0]
    
        for (let i = 1;  i < matrixLength; i++) {
        count = increment(count, matrixLength)
        console.log(count,i)
        indexRight.push(count)
    }
    console.log('fora', count) 
    console.log(indexRight)

    indexRight.map( (item) => {
        diag1.push(arrFlat[item])
        diag2.push(arrFlatReverse[item])
    }  )
    //console.log('diag1: ',diag1)
    //console.log('diag2: ',diag2)
    
    let sumA = diag1.reduce((a, b) =>  a + b)
    let sumB = diag2.reduce((a, b) =>  a + b)
    let dif = Math.abs(sumA - sumB)
    //console.log(sumA, sumB)
    //console.log(dif)
    return dif

}
