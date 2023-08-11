function findAddress(obj) {
    const ValueOfStreet = "__";
    const ValueOfHouse = "__";
    const ValueOfSociety = "__";

    const street = obj.street || ValueOfStreet;
    const society = obj.society || ValueOfSociety;
    const house = obj.house || ValueOfHouse;


    return street + "," + house + "," + society;
}

const object = {
    street: 10,
    house: "",
    society: "Earth Perfect"
}
let result = findAddress(object);
console.log(result)


function canPay(changeArray, totalDue) {
    if(changeArray.length == 0){

        return "Empty Array!"
    }

    else{
        let sum = 0;
        for(let i = 0;i<changeArray.length;i++){
           let element = changeArray[i];
           sum = sum + element;
       }
     if(sum >= totalDue){
        return true;
     }

     else{
        return false;
     }
    }
}
const array = [1,2,5];
const chipsPrice = 10;
let isEnough = canPay(array, chipsPrice);
console.log(isEnough);