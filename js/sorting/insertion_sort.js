function insertionSort(arr){ 
    for(j = 1; j < arr.length; j++){ 
        key = arr[j];
        i = j-1;
        while(i>-1 && arr[i] > key) { 
            arr[i+1] = arr[i];
            i = i-1;
        }
        arr[i+1] = key;
    }
    return arr
}
let Arr = [5,2,1]
console.log(Arr)
console.log(insertionSort(Arr))