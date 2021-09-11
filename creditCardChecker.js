// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8
]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]
const test = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// New tests
const mystery6 = [4, 9, 1, 6, 3, 7, 5, 7, 2, 0, 2, 2, 7, 8, 2, 5]
const mystery7 = [6, 0, 1, 1, 5, 8, 5, 0, 2, 2, 9, 7, 2, 6, 4, 6]
const mystery8 = [2,2,2,1,2,0,5,9,8,1,6,4,2,0,6,7]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]
const batch2 = [mystery6, mystery7, mystery8]

// Add your functions below:
const validateCred = arr => {
    let arrReverse = arr.slice(0).reverse()
    let arrayTest = []
    arrReverse.map((number, index) => {
    //console.log('index', index, 'number:', number)
        if (index % 2 !== 0) {
            //console.log('impar, numero:', number)
            let result = number * 2
            //console.log('numero dobrado:', number * 2)
            if (result > 9) {
                result -= 9
                //console.log('impar, number:', result)
    
            } 

            arrayTest.push(result)


        } 
        else {
            arrayTest.push(number)
            //console.log('pos par', number)
        }
    })
    const sumNumbers = arrayTest.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    })
    //console.log(sumNumbers)
    if (sumNumbers % 10 === 0) {
        return true
    }
    else {
        return false
    }
    //console.log(arrayTest)
}

//console.log(validateCred(mystery2))

const findInvalidCards = arr => {
    let invalidCards = []
    arr.map(item => {
        let i = validateCred(item)
        if (i === false) {
            //console.log('false', item)
            invalidCards.push(item)
        }
        else {
            //console.log('true', item)
        }
    })
    //console.log(invalidCards)
    return invalidCards
}
// teste:
//findInvalidCards(batch)

const idInvalidCardCompanies = arr => {
    let invalidCardAndCompanies = []
    
    function indexOfPush(string) {
        if (invalidCardAndCompanies.indexOf(string) === -1) {
            invalidCardAndCompanies.push(string)
        }
    } 
    //console.log('array:', arr)
    
    arr.reverse().map((item, index) => {
        switch (item[0]) {
            case 3:
                indexOfPush('Amex')
                break
            case 4:
                indexOfPush('Visa')
                break
            case 5:
                indexOfPush('Mastercard')
                break
            case 6:
                indexOfPush('Discover')
                break
            default:
                console.log('Company not found')
        }
    })
    console.log(invalidCardAndCompanies)
}

//teste:
let x = findInvalidCards(batch2)
idInvalidCardCompanies(x)


