function indexOf(arr,list,start=0) {
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === list) {
            return i;
        }
    }
    return -1
}

function lastIndexOf(arr,list,start=0) {
    let tempo = -1;
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === list) {
            tempo = i;
        }
    }
    return tempo;
}

function include(arr,list,start=0) {
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === list) {
            return true;
        }
    }
    return false;
}
const t = 45
console.log(lastIndexOf([t, 0, 0, t], t, 2))