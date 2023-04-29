


let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;
    // Your code here
    if (guests<=50){
    console.log(4000)
        return cost = 4000
 } else if (guests<=100){
    console.log(10000)
    return cost = 10000
 }  else if (guests<=200){
    console.log(15000)
    return cost = 15000
 }
 else {
    console.log(20000)
 }

    return cost=20000;
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');
