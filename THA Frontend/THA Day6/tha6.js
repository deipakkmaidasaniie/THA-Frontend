//1
/*function is_array(arg)
{
    return Array.isArray(arg);
}
console.log(is_array([1,2,3,4]));
console.log(is_array('w3resource'));

//2

let arr1=[1, 2, 4, 0];
arrayclone=[...arr1];
console.log(arrayclone);

//3

function first(arr,input=0){
if(input==0)
return arr[0];
else{
    if(arr.length==0 || input<0)
    return [];
    else if(input>0)
    {
        return arr.slice(0,input);
    }

}
}

console.log(first([7,9,0,-2],-1));
console.log(first([7,9,0,-2]));
console.log(first([7,9,0,-2],3));
console.log(first([7,9,0,-2],10));
console.log(first([],4));

*/

//4)

/*function joinAll(arr,seperator)
{
    return arr.join(",");
}

console.log(joinAll(["Java","PHP","NodeJs","C++"]));
*/

//5)
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;
