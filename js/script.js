// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

var f = "Fizz";
var b = "Buzz";
var fb = f + b;

for (var i = 1; i <= 100; i++) {
    if ((i % 3 == 0) & (i % 5 == 0)) {
        console.log(fb);
        document.getElementById("display").innerHTML = fb;
        continue;
    } 
    if (i % 3 == 0) {
        console.log(f);
        document.getElementById("display").innerHTML = f;
        continue;
    }
    if (i % 5 == 0) {
        console.log(b);
        document.getElementById("display").innerHTML = b;
        continue;
    }
    console.log(i);
    document.getElementById("display").innerHTML = i;
}

