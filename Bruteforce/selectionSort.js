/**
 * Created by Andrew Searles on 9/27/2016.
 */
function selectionSort (array){
    //Input checking
    var n = array.length;
    if (n > 1) {
        for (var i = 0; i < n - 1; i++){
            var min = i;
            for (var j = i+1; j < n; j++){
                if(array[j] < array[min]){
                    min = j;
                }
            }
            var temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
        return array;
    } else {
        return array;
    }
}

var a = [9,8,7,6,5,4,3,2,1];
var b = selectionSort(a);
console.log(b);
