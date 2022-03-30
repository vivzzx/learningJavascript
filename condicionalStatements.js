/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const string = s.split('')
    let arrVowels = []
    let arrConsonants = []

    for (const str of string) {
       vowels.includes(str) ? arrVowels.push(str) : arrConsonants.push(str)
    }
    
    const print = (arr) => {
        for (const item of arr) {
            console.log(item)
        }
    }
    
    print(arrVowels)
    print(arrConsonants)
}

vowelsAndConsonants('javascriptloops')