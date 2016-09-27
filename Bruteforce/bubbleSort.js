/**
 * Created by Andrew Searles on 9/27/2016.
 */
function bubbleSort(array){
    //input checking
    var n = array.length;
    if (n > 1) {
        for(var i = 0; i < n-1; i++){
            for(var j = 0; j < n-1-i; j++){
                if (array[j+1] < array[j]){
                    var temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }
        }
        return array;
    } else {
        return array;
    }
}
var a = [9,8,7,6,5,4,3,2,1];
var b = bubbleSort(a);
console.log(b);