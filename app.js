

document.addEventListener('DOMContentLoaded', () => {


    while ((num % 2) != 0) {
        var num = prompt("Please enter how many cards you want to play with (even numbers only)");
    }

    console.log(num)

    var grid = document.querySelector('.grid');
    var robotsArray = []
    var robotsNamesArray = []
    var chosenCardsIDArray = []
    var cardsWon = []

    var pairs = num / 2;

    var result = document.querySelector('#result')
    var info = document.querySelector('.info')




    result.textContent = pairs//to display number of pairs to be found

    for (var i = 0; i < num / 2; i++) {

        var robot = document.createElement('img')
        robot.setAttribute('src', 'https://robohash.org/' + i + '?500x500')
        robot.setAttribute('robot-name', "robot" + i)
        robotsArray.push(robot)
        robotsArray.push(robot)

    }

    //RANDOMIZE ROBOTS
    robotsArray.sort(() => 0.5 - Math.random())


    function createBoard() {
        for (var i = 0; i < num; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/board.png')
            card.setAttribute('card-id', i)
            card.style.height = '150px';
            card.style.width = '150px';
            card.style.borderRadius = "5px"

            card.addEventListener('click', flipCard);

            grid.appendChild(card)



        }
    }



    function checkForMatch() {

        var cards = document.querySelectorAll('img')
        var card1 = chosenCardsIDArray[0]
        var card2 = chosenCardsIDArray[1]
        if (robotsNamesArray[0] == robotsNamesArray[1]) {




            cards[card1].setAttribute('src', 'images/empty.png')
            cards[card2].setAttribute('src', 'images/empty.png')
            alert("YOU FOUND MATCHING CARDS!");
            cardsWon.push(chosenCardsIDArray)

            pairs = pairs - 1
            result.textContent = pairs

            if (cardsWon.length == robotsArray.length / 2) {
                info.textContent = "CONGRATS! YOU COMPLETED THE GAME "
                for (var a = 0; a < 300; a++) {
                    var m = document.createElement('span')
                    m.style.fontFamily = "Monoton"
                    m.style.color = "white";
                    m.textContent = "CONGRATS !"
                    info.appendChild(m);


                }


            }

        }

        else {

            alert("TRY AGAIN :(");

            cards[card1].setAttribute('src', 'images/board.png')
            cards[card2].setAttribute('src', 'images/board.png')
        }

        chosenCardsIDArray = []
        robotsNamesArray = []


    }

    function flipCard() {

        var clickedCardID = this.getAttribute('card-id')
        chosenCardsIDArray.push(clickedCardID)

        console.log(this)
        console.log("clicked card ID" + clickedCardID)

        this.setAttribute('src', robotsArray[clickedCardID].getAttribute('src'))
        robotsNamesArray.push(robotsArray[clickedCardID].getAttribute('robot-name'))

        console.log(chosenCardsIDArray)
        console.log(robotsNamesArray)


        if (chosenCardsIDArray.length === 2) {

            setTimeout(checkForMatch, 500)
        }

    }


    createBoard();


})


