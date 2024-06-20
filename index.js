document.addEventListener('DOMContentLoaded', () => {
    cardOptions = [
        {
            name: 'goat',
            img: './assets/goat.png'
        },
        {
            name: 'goat',
            img: './assets/goat.png'
        },
        {
            name: 'owl',
            img: './assets/owl.png'
        },
        {
            name: 'owl',
            img: './assets/owl.png'
        },
        {
            name: 'pac',
            img: './assets/pac.png'
        },
        {
            name: 'pac',
            img: './assets/pac.png'
        },
        {
            name: 'penguin',
            img: './assets/penguin.png'
        },
        {
            name: 'penguin',
            img: './assets/penguin.png'
        },
        {
            name: 'pig',
            img: './assets/pig.png'
        },
        {
            name: 'pig',
            img: './assets/pig.png'
        },
        {
            name: 'rangoli',
            img: './assets/rangoli.png'
        },
        {
            name: 'rangoli',
            img: './assets/rangoli.png'
        }
    ]

    cardOptions.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.getElementById('result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cardOptions.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'assets/background.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }
    function checkMatch() {
        const cards = document.querySelectorAll('img');
        const chosenOptionOne = cardsChosenId[0];
        const chosenOptionTwo = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            cards[chosenOptionOne].setAttribute('src', 'assets/white.png');
            cards[chosenOptionTwo].setAttribute('src', 'assets/white.png');
            cards[chosenOptionOne].removeEventListener('click', flipCard);
            cards[chosenOptionTwo].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[chosenOptionOne].setAttribute('src', 'assets/background.jpg');
            cards[chosenOptionTwo].setAttribute('src', 'assets/background.jpg');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = "Match: " + cardsWon.length;
        if (cardsWon.length === cardOptions.length / 2) {
            resultDisplay.textContent = 'Congratulation! You matched all';
        }
    }
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardOptions[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardOptions[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
    createBoard();
})