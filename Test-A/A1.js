
let array1 = [1, 2, 3 ,4 ,5, 9];
let array2 = [1, 3, 5, 7, 9];
function A1 ( array1, array2){
    let array3 = [];
    for( let i = 0; i< array1.length; i++){
        if(array2.includes(array1[i]) == true){
            array3.push(array1[i]);
        }
    }
    console.log(array3)
    let array4 = [];
    for(let i = 0; i< array1.length; i++){
        if(array3.includes(array1[i]) ==false){
            array4.push(array1[i])
        }
    }
    console.log(array4)
    for(let i = 0; i< array2.length; i++){
        if(array3.includes(array2[i]) == false){
            array4.push(array2[i])
        }
    }
    return array4
}
console.log(A1(array1, array2))