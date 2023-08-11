function cubeNumber(number){
    if(typeof number !== "number"){
        return "ERROR! This is invalid!"
    }
    else{
      var cube = Math.pow(number , 3);
          return cube;
   }
}

const result = cubeNumber(4)
console.log(result)


function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "ERROR! Provide two valid strings.";
    }
    else{ 
        if(string1.includes(string2)){
            return true;
        }
        else
           return false;
    }

}

let string1 = "John";
let string2 = "ohn";

let isMatch = matchFinder (string1, string2);
console.log(isMatch)


function sortMaker(arr) {
    for(let i = 0; i<2 ;i++){
        if(arr[i] < 0  || arr[i+1] < 0 ){
            return "Invalid Input";
        }

        else if(arr[i] == arr[i+1]){
            return "equal";

        }
        else{
            if(arr[i] < arr[i+1]){
                let swap = arr[0];
                arr[i] = arr[i+1];
                arr[i+1] = swap;
            }
            return arr;
        }
    }
}

const array = [2,3];
let sort = sortMaker(array);
console.log(sort);


