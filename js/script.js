const ContenitoreCarte = document.querySelector('.card-container');

for (let i = 0; i < 100; i++) {

    const NewCard = document.createElement('div');
    let NumeroCarta = (i + 1);
    NewCard.className = "my-card text-center bg-card m-3 p-3";
    NewCard.append (NumeroCarta);
    
    ContenitoreCarte.append(NewCard);

    if ((NumeroCarta % 3) == 0) {
        NewCard.innerHTML = "Fizz";
        NewCard.classList.remove("bg-card");
        NewCard.classList.add("bg-fizz");
        
    }

    if ((NumeroCarta % 5) == 0) {
        NewCard.innerHTML = "Buzz";
        NewCard.classList.remove("bg-card");
        NewCard.classList.add("bg-fizz");
    }

    if (((NumeroCarta % 3) == 0) && ((NumeroCarta % 5) == 0)) {
        NewCard.innerHTML = "FizzBuzz";
        NewCard.classList.remove("bg-card");
        NewCard.classList.add("bg-fizzbuzz");
    }
}





