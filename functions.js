const isTheWordSplit = (pWordArr) => {
    let firstElement = pWordArr[0]
    let secondElement = pWordArr[1].split(",")
    for (let index = 0; index < secondElement.length; index++) {
        for (let j = 0; j < secondElement.length; j++) {
            if(secondElement[index] + secondElement[j] === firstElement){
                return `${secondElement[index]},${secondElement[j]}`
            }
        }
    }
    return "not possible"
};

export { isTheWordSplit };
