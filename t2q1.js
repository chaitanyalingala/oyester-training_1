
function countFreq(arr, n)
{
    var mp = new Map();
 
    // Traverse through array elements and
    // count frequencies
    for (var i = 0; i < n; i++)
    {
        if(mp.has(arr[i]))
            mp.set(arr[i], mp.get(arr[i])+1)
        else
            mp.set(arr[i], 1)
    }

    //arranging ascending order
    mp[Symbol.iterator] = function* () {
        yield* [...this.entries()].sort((a, b) => a[1] - b[1]);
    }
    const initialValue = mp.values().next().value
    let finalValue = 0
    for (let [key, value] of mp) {     // get data sorted
        console.log(key + ' ' + value);
        finalValue = value
    }
    return getkeys(mp,finalValue)[0] + " " + getkeys(mp,initialValue)[0];
         
}
function getkeys(mp,value){
    let jhonKeys = [...mp.entries()]
        .filter(({ 1: v }) => v === value)
        .map(([k]) => k);
    return jhonKeys; 
}

function onClick() {
    var arr = document.getElementById("array").value.split(" ")
    console.log(arr.length)
    if (arr.length === 1 ){
        document.getElementById("error").style.display="block";
    }
    else{
        document.getElementById("error").style.display="none";
    }
    var n = arr.length;
    document.getElementById("hello").innerHTML = countFreq(arr, n);
    return false;
}