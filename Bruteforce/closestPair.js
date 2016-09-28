/**
 * Created by Andrew Searles on 9/28/2016.
 */
//Data structure for points not necessary but desirable
function point (x,y){
    this.x = x;
    this.y = y;
}

//takes an array of points and return distant of the
//closest pair
function closestPair(array) {
    if (array.length > 1){
        var d = Math.sqrt(Math.pow((array[0].x - array[1].x),2) +
                          Math.pow((array[0].y - array[1].y),2));
        for(var i = 1; i < array.length-1; i++){
            for(var j = i+1; j < array.length; j++){
                d = Math.min(d, Math.sqrt(Math.pow((array[i].x - array[j].x),2) +
                    Math.pow((array[i].y - array[j].y),2)));
            }
        }
        return d;
    } else {
        console.log("Sorry, but your array needs more points!");
        return -1;
    }
}

//test case
var a = [];
for (var i = 0; i < 10; i++){
    var temp = new point(Math.random()*1000,Math.random()*1000);
    a.push(temp);
}
var b = closestPair(a);
console.log(b);