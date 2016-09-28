/**
 * Created by Andrew Searles on 9/28/2016.
 */
//returns the index of where the pattern start or -1
//if there is no pattern
function stringMatching(text, pattern){
    for(var i = 0; i <= text.length - pattern.length;i++){
        var j = 0;
        while ((j < pattern.length) && (pattern[j] === text[i+j])) {
            j++;
        }
        if (j === pattern.length) return i;
    }
    return -1;
}

//simple test case
var a = "I am a string yeah!";
var b = "string";
var c = stringMatching(a, b);
console.log(c);