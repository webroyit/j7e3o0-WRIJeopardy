const game = document.getElementById("game");
const scoreDisplay = document.getElementById("score");

const jeopardyCategories = [
    {
        genre: "WHO",
        questions: [
            {
                question: "Who are you?",
                answers: ["Water", "Fire"],
                correct: "Water",
                level: "easy"
            },
            {
                question: "Who are you?",
                answers: ["Water", "Fire"],
                correct: "Water",
                level: "medium"
            },
            {
                question: "Who are you?",
                answers: ["Water", "Fire"],
                correct: "Water",
                level: "hard"
            }
        ]
    },
    {
        genre: "WHERE",
        questions: [
            {
                question: "Where are you?",
                answers: ["Home", "Work"],
                correct: "Home",
                level: "easy"
            },
            {
                question: "Where are you?",
                answers: ["Home", "Work"],
                correct: "Home",
                level: "medium"
            },
            {
                question: "Where are you?",
                answers: ["Home", "Work"],
                correct: "Home",
                level: "hard"
            }
        ]
    },
    {
        genre: "WHEN",
        questions: [
            {
                question: "When did it snow?",
                answers: ["Today", "Last Week"],
                correct: "Today",
                level: "easy"
            },
            {
                question: "When did it snow?",
                answers: ["Today", "Last Week"],
                correct: "Today",
                level: "medium"
            },
            {
                question: "When did it snow?",
                answers: ["Today", "Last Week"],
                correct: "Today",
                level: "hard"
            }
        ]
    },
    {
        genre: "WHAT",
        questions: [
            {
                question: "What do bird eat?",
                answers: ["Nothing", "Worm"],
                correct: "Worm",
                level: "easy"
            },
            {
                question: "What do bird eat?",
                answers: ["Nothing", "Worm"],
                correct: "Worm",
                level: "medium"
            },
            {
                question: "What do bird eat?",
                answers: ["Nothing", "Worm"],
                correct: "Worm",
                level: "hard"
            }
        ]
    },
    {
        genre: "HOW MANY",
        questions: [
            {
                question: "How many seconds in an hour?",
                answers: ["36000", "3600"],
                correct: "3600",
                level: "easy"
            },
            {
                question: "How many seconds in an hour?",
                answers: ["36000", "3600"],
                correct: "3600",
                level: "medium"
            },
            {
                question: "How many seconds in an hour?",
                answers: ["36000", "3600"],
                correct: "3600",
                level: "hard"
            }
        ]
    }
];

let score = 0;

// Create Catergory and add it to HTML
function addCatergory(category) {
    // Create div element for column
    const column = document.createElement("div");
    // Add styles class name
    column.classList.add("genre-column");

    // Create div element for Genre Title
    const genreTitle = document.createElement("div");
    // Add styles class name
    genreTitle.classList.add("genre-title");
    // Set the value for Genre Title
    genreTitle.innerText = category.genre;

    // Insert Genre Title to Column
    column.appendChild(genreTitle);

    // Insert category to HTML
    game.append(column);

    category.questions.forEach(question => {
        // Create div element for card
        const card = document.createElement("div");
        card.classList.add("card");
        column.append(card);

        if (question.level === "easy") {
            card.innerText = 100;
        }
        if (question.level === "medium") {
            card.innerText = 200;
        }
        if (question.level === "hard") {
            card.innerText = 300;
        }

        // Add attributes to card
        card.setAttribute("data-question", question.question);
        card.setAttribute("data-answer-1", question.answers[0]);
        card.setAttribute("data-answer-2", question.answers[1]);
        card.setAttribute("data-correct", question.correct);
        card.setAttribute("data-value", card.getInnerHTML());

        card.addEventListener("click", flipCard);
    })
}

jeopardyCategories.forEach(category => addCatergory(category));

function flipCard() {
    this.innerText = "";

    // Add styles to question
    this.style.fontSize = "15px";
    this.style.lineHeight = "15px";

    const textDisplay = document.createElement("div");
    textDisplay.classList.add("card-text");
    textDisplay.innerHTML = this.getAttribute("data-question");

    const firstButton = document.createElement("button");
    const secondButton = document.createElement("button");

    firstButton.classList.add("first-button");
    secondButton.classList.add("second-button");

    firstButton.innerHTML = this.getAttribute("data-answer-1");
    secondButton.innerHTML = this.getAttribute("data-answer-2");

    firstButton.addEventListener("click", getResult);
    secondButton.addEventListener("click", getResult);

    this.append(textDisplay, firstButton, secondButton);

    // Disable flipping other cards
    const allCards = Array.from(document.querySelectorAll(".card"));
    allCards.forEach(card => card.removeEventListener("click", flipCard));
}

function getResult() {
    const cardOfButton = this.parentElement;

    // If correct, earn points
    if(cardOfButton.getAttribute("data-correct") == this.innerHTML) {
        score = score + parseInt(cardOfButton.getAttribute("data-value"));
        scoreDisplay.innerHTML = score;
    }
}