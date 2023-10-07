const arr = [1,4,6,2,5,3]; 
function arrSort(arr) { 
    arr.sort((a,b)=>a-b); 
    arr.reverse(); 
    return arr; 
} 
  console.log(arrSort(arr));