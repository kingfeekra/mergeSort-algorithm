let array1 = [5, 1, 3, 4, 2, 7, 9, 8, 11, 12, 66, 78]

function merge(left, right) {
    let arr = [];
    while(left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    return [ ...arr, ...left, ...right ];
}

function mergeSort(array) {
    let mid = Math.floor(array.length/2);

    if(array.length < 2) {
        return array
    }

    let l = array.splice(0, mid);
    return merge(mergeSort(l), mergeSort(array));
}



console.log(mergeSort(array1));