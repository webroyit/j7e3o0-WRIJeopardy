const game = document.getElementById("game");
const scoreDisplay = document.getElementById("score");

const jeopardyCategories = [
    {
        genre: "WHO",
        question: [
            {
                question: "Who are you?",
                answers: ["Water, Fire"],
                correct: "Water",
                level: "easy"
            },
            {
                question: "Who are you?",
                answers: ["Water, Fire"],
                correct: "Water",
                level: "medium"
            },
            {
                question: "Who are you?",
                answers: ["Water, Fire"],
                correct: "Water",
                level: "hard"
            }
        ]
    },
    {
        genre: "WHERE",
        question: [
            {
                question: "Where are you?",
                answers: ["Home, Work"],
                correct: "Home",
                level: "easy"
            },
            {
                question: "Where are you?",
                answers: ["Home, Work"],
                correct: "Home",
                level: "medium"
            },
            {
                question: "Where are you?",
                answers: ["Home, Work"],
                correct: "Home",
                level: "hard"
            }
        ]
    },
    {
        genre: "WHEN",
        question: [
            {
                question: "When did it snow?",
                answers: ["Today, Last Week"],
                correct: "Today",
                level: "easy"
            },
            {
                question: "When did it snow?",
                answers: ["Today, Last Week"],
                correct: "Today",
                level: "medium"
            },
            {
                question: "When did it snow?",
                answers: ["Today, Last Week"],
                correct: "Today",
                level: "hard"
            }
        ]
    },
    {
        genre: "WHAT",
        question: [
            {
                question: "What do bird eat?",
                answers: ["Nothing, Worm"],
                correct: "Worm",
                level: "easy"
            },
            {
                question: "What do bird eat?",
                answers: ["Nothing, Worm"],
                correct: "Worm",
                level: "medium"
            },
            {
                question: "What do bird eat?",
                answers: ["Nothing, Worm"],
                correct: "Worm",
                level: "hard"
            }
        ]
    },
    {
        genre: "HOW MANY",
        question: [
            {
                question: "How many seconds in an hour?",
                answers: ["36000, 3600"],
                correct: "3600",
                level: "easy"
            },
            {
                question: "How many seconds in an hour?",
                answers: ["36000, 3600"],
                correct: "3600",
                level: "medium"
            },
            {
                question: "How many seconds in an hour?",
                answers: ["36000, 3600"],
                correct: "3600",
                level: "hard"
            }
        ]
    }
];

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
}

jeopardyCategories.forEach(category => addCatergory(category));