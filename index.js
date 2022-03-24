function writeCards (array, event) {
    let Thanks = [];
    for (let i = 0; i < array.length; i++) {
Thanks.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);


}

return Thanks;
}
function countDown(){
    let counter = 10;
    while (counter >= 0){
    console.log(counter)
    counter = counter - 1
    }
    return counter


}
countDown()