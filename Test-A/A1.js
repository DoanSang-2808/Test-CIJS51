let array = []
function BaiA1 (array1, array2){
    for(let  i = 0; i< array1.length; i++){
       array.push(array1[i])
    }
    for(let i = 0 ; i< array2.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array2[i] === array[j]){
                array.splice(j, 1)
                i++;
            }
        }
        array.push(array2[i])
    }
    console.log(array)
}
let array1 = [1,2,'a']
let array2 = [1,3,'b']
BaiA1(array1, array2)
