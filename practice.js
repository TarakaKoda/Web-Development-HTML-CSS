function isOval(sentence) {
    let newList = sentence.split(" ");
    newList.forEach(element => {
        if (!['a', 'e', 'i', 'o', 'u'].includes(element[0].toLowerCase())) {
            console.log(element);
        }
    });
}

const sentence = 'Albus Dumbledore founded the Order of the Phoenix';

isOval(sentence);