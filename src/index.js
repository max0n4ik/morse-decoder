const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '12345': '12345',
};

function decode(expr) {
    let code = expr.split(' ')
    for (let i = 0; i < code.length; i++) {
        code[i] = code[i].replaceAll('11', '-').replaceAll('10', '.').replaceAll('**********', '12345')
        code[i] = code[i].replaceAll('00', ' ')
    }
    var words = ''
    let answ = code.join('').match(/.{1,5}/g)
    for (let j = 0; j < answ.length; j++) {
        var word = answ[j].toString()
        for (const k in MORSE_TABLE) {
            if (k === word.trim()) {
                char = MORSE_TABLE[k];
                words = words + char
            }
        }
    }
    return words.replaceAll('12345', ' ')
}
console.log(decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'))
module.exports = {
    decode
}