//età viaggiatore
const age = Number(prompt('Quanti anni hai?'));
console.log(age);

//km da percorrere
const nKm = Number(prompt('Quanti Km devi percorrere?'));
console.log(nKm);

// prezzo * Km
const price = nKm * 0.21;
console.log(price);

// sconti  
 let finalPrice;
 const discountValueUnder = (price / 100)* 20;
 const discountValueOver = (price/100)* 40;
 
 

 //prezzi scontati
if (age < 18) {
 finalPrice = price - discountValueUnder;
} else if (age > 65) {
   finalPrice = price - discountValueOver;
} else  {
    finalPrice = price
    console.log("Non si applica nessuno sconto", finalPrice);
}



let myMessage = `Ciao questo è il prezzo del tuo biglietto:€ ${finalPrice.toFixed(2)}`
document.getElementById("correct_price").innerHTML = myMessage;

