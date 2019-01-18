function bubbleSort(array) {
    if (array.length === 0 || array.length === 1)
    { return array; }
    else {
        
        //debugger;
        
        for (let i = 0; i < array.length ; i++){
            for (let j = i + 1; j < array.length ; j++) {
                
                 if (array[i] > array[j]) {
                    swap(i,j,array);
                //     let temp = array[i];
                //     array[i] = array[j];
                //     array[j] = temp;
                 }
            }
            
        }
        
        return array;
    }
}  
function swap(i, j ,array) {
   
    let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    
    return array;
}                                                                                                                                                                                                                                                                                 