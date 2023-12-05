const ContenitoreCarte = document.querySelector('.card-container');


for (let i = 0; i < 100; i++) {

    const NewCard = document.createElement('div');
    NewCard.className = "card";
    NewCard.append (i + 1);
    ContenitoreCarte.append(NewCard);
}





