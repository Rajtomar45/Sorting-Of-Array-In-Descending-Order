# Sorting-Of-Array-In-Descending-Order
Here's how the code works:
const arr = [1, 4, 6, 2, 5, 3]; - You define an array arr containing the numbers [1, 4, 6, 2, 5, 3].
function arrSort(arr) { - You define a function arrSort that takes an array as its argument.
arr.sort((a, b) => a - b); - You use the sort method to sort the array arr in ascending order. The sort method takes a comparison function as an argument, which specifies how to compare elements. (a, b) => a - b is a comparison function that sorts the elements in ascending numerical order.
arr.reverse(); - After sorting the array in ascending order, you use the reverse method to reverse the order of the elements, effectively sorting the array in descending order.
return arr; - You return the sorted and reversed array.
console.log(arrSort(arr)); - You call the arrSort function with the arr array as an argument and log the result to the console.
