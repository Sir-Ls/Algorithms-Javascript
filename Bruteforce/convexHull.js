/**
 * Created by Andrew Searles on 9/28/2016.
 */
function point (x,y){
    this.x = x;
    this.y = y;
}

//takes an array and returns an array of the convex hull
function convexHull(array) {
    if (array.length > 2) {
        var hullArray = [];
        hullArray.push(array[0]);
        hullArray.push(array[1]);
        hullArray.push(array[2]);
        for (var i = 2; i < array.length; i++){
            if(!pointInPlane(array[i],hullArray)){
                hullArray.push(array[i]);
            }
        }
        return hullArray;
    } else {
        return array;
    }
}

function pointInPlane(point, plane){
    var pIPFlag;
    //how to know which lines
    //determined by the closest points
    // determine what side a point is on a line
    // two possibilities inside or outside
    //if inside mark inside flag
    // then compare every other point in array with line
    // if outside and inside flag marked, pIP = false (xor)

    return pIPFlag;
}