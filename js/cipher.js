function encryptTransposition(text, key){

    text = text
    .replace(/\s/g,'')
    .toUpperCase();

    let rows = Math.ceil(text.length / key);

    let matrix = [];

    let index = 0;

    for(let r=0;r<rows;r++){

        matrix[r] = [];

        for(let c=0;c<key;c++){

            matrix[r][c] =
            index < text.length
            ? text[index++]
            : 'X';
        }
    }

    let result = '';

    for(let c=0;c<key;c++){

        for(let r=0;r<rows;r++){

            result += matrix[r][c];
        }
    }

    return result;
}

function decryptTransposition(cipher,key){

    cipher = cipher.toUpperCase();

    let rows = Math.ceil(cipher.length / key);

    let matrix = [];

    let index = 0;

    for(let r=0;r<rows;r++){

        matrix[r] = [];
    }

    for(let c=0;c<key;c++){

        for(let r=0;r<rows;r++){

            if(index < cipher.length){

                matrix[r][c] = cipher[index++];
            }
        }
    }

    let result = '';

    for(let r=0;r<rows;r++){

        for(let c=0;c<key;c++){

            result += matrix[r][c];
        }
    }

    return result.replace(/X+$/,'');
}