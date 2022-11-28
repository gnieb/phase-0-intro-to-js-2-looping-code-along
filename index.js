

  const gifts = ["teddy bear", "drone", "doll"];
  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
}
return gifts    
  }

  wrapGifts(gifts);


  function writeCards(array, event) {
let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
}
    
    return newArray
  }

// example writeCards(["grace", "noah", "sam"], "surprise")

function countDown(number) {
    let count = number;
    while (count >= 0) {
        console.log(count);
        count--;
    }
    return count
}
countDown(10);

  