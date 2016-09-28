/**
 * Created by Andrew Searles on 9/28/2016.
 */
//The trade off here is that i have two comparisons per loop
//execution however unlike the book i do not modify the array
//such could also be solved with a temporary variable
//this case should be used if
//running time is not the issue and space is
function sequentialSearch(array, k){
    for(var i = 0; i < array.length; i++){
        if(array[i] == k){
            return i;
        }
    }
    return -1;
}
//simple test case
var a = [9,8,7,6,5,4,3,2,1];
var b = sequentialSearch(a, 7);
console.log(b);