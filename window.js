// jodi function er bahir a hoi seta globally r function er moddhe hole not globally oita sudhu vitor er ta k kaj korbe

var name = 'kuddus';
function add (num1, num2){
    // jodi result er agee var na thake than eta global hoe jabe
    // result = num1 + num2;
    var result = num1 + num2;
    console.log ('result inside', result);
    console.log ('name inside', name);
    function double (num){
        return num * 2;
    }
    var total = double(result);
    return total;
    // return result;
}

console.log ('name outside', name);
var sum = add(13,21);
console.log(sum);
// console.log('outside', result);