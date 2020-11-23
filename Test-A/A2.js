let array = [
    {
        name : "Asenal",
        points : 99,
        GD : 45
    },
    {
        name : 'Chelsea',
        points : 75,
        GD : 39,
    },
    {
        name : 'Manchester United',
        points :60,
        GD : 29,
    },
    {
        name : 'Liverpool',
        points : 88,
        GD : 39,
    }
]
function Rank(array) {
   let max = array[0]
   let index = 0;
   for( let i = 1; i < array.length; i++){
        if(max.points < array[i].points){
            max = array[i]
            index = i
        } else if ( max.points == array[i].points){
            if(max.GD > array[i].GD){
                max = array[i]
                index=i
            }
            else if( max.GD == array[i].GD){
                if(max.name > array[i].name){
                    max = array[i];
                    index = i
                }
            }
        }

   }
   return index 

}
function A2(array) {
    let n = array.length;
    let array_rank= []
   for( let i = 0; i< n; i++){
       let index = Rank(array)
       array[index].position = i+1
       array_rank.push(array[index])
       array.splice(index, 1)
   }
   return array_rank;
   
}
console.log(A2(array))