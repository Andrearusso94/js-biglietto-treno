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
 const discountValueUnder = Math.round((price / 100)* 20) ;
 const discountValueOver = Math.round((price/100)*40) ;


 //prezzi scontati
if (age < 18) {

   console.log(priceDiscount = price - discountValueUnder);
} else if (age > 65) {
    console.log(priceDiscount = price - discountValueOver);
} else {
    console.log("Non si applica nessuno sconto");
}



let myMessage = `Ciao questo è il prezzo del tuo biglietto:€ ${priceDiscount}`
document.getElementById("correct_price").innerHTML = myMessage