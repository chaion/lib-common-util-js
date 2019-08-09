function appendHexStart(str){
    let str1 = str.startsWith('0x')? str.substring(2): str;
    let str2 = str1.length % 2 ? '0' + str1: str1;
    return '0x' + str2;
}

function hexStringToInt(str) {
    const strNo0x = str.startsWith('0x') ? str.substring(2) : str;
    return parseInt(strNo0x, 16);
}

export {
    appendHexStart,
    hexStringToInt,
};