const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: 0
    },
    {
        question: "Which is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 2
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "William Shakespeare", "J.K. Rowling", "Leo Tolstoy"],
        correctAnswer: 1
    },
    {
        question: "What is the boiling point of water?",
        options: ["90°C", "100°C", "80°C", "120°C"],
        correctAnswer: 1
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Oxygen", "Silver", "Osmium"],
        correctAnswer: 1
    },
    {
        question: "In what year did the Titanic sink?",
        options: ["1912", "1905", "1915", "1920"],
        correctAnswer: 0
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        correctAnswer: 1
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        correctAnswer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Saturn", "Mercury"],
        correctAnswer: 0
    },
    {
        question: "What is the capital of Nepal?",
        options: ["Kathmandu", "Pokhara", "Biratnagar", "Lalitpur"],
        correctAnswer: 0
    },
    {
        question: "Which mountain range is in Nepal?",
        options: ["Himalayas", "Andes", "Alps", "Rockies"],
        correctAnswer: 0
    },
    {
        question: "What is the official language of Nepal?",
        options: ["Nepali", "Hindi", "English", "Tibetan"],
        correctAnswer: 0
    },
    {
        question: "What is the currency of Nepal?",
        options: ["Rupee", "Dollar", "Euro", "Yen"],
        correctAnswer: 0
    },
    {
        question: "Which is the largest lake in Nepal?",
        options: ["Rara Lake", "Phewa Lake", "Begnas Lake", "Rara Lake"],
        correctAnswer: 0
    },
    {
        question: "Who is known as the 'Father of Nepalese Democracy'?",
        options: ["King Tribhuvan", "King Prithvi Narayan Shah", "King Birendra", "BP Koirala"],
        correctAnswer: 3
    },
    {
        question: "Which festival is celebrated to mark the victory of good over evil in Nepal?",
        options: ["Dashain", "Tihar", "Holi", "Buddha Jayanti"],
        correctAnswer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    
    document.getElementById('quiz').textContent = currentQuestion.question;
    document.getElementById('option0').textContent = currentQuestion.options[0];
    document.getElementById('option1').textContent = currentQuestion.options[1];
    document.getElementById('option2').textContent = currentQuestion.options[2];
    document.getElementById('option3').textContent = currentQuestion.options[3];
    
    // Clear previous selection and styles
    document.querySelectorAll('input[name="option"]').forEach(input => input.checked = false);
    document.querySelectorAll('label').forEach(label => label.style.backgroundColor = ""); 
}

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    
    if (selectedOption) {
        const selectedAnswer = parseInt(selectedOption.value);
        const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
        
        // Highlight correct answer
        const correctLabel = document.querySelector(`label input[value="${correctAnswer}"]`).parentElement;
        correctLabel.style.backgroundColor = "lightgreen";

        // If correct, update score
        if (selectedAnswer === correctAnswer) {
            score++;
        }

        // Display updated score at the bottom of the container
        document.getElementById("score").textContent = `Score: ${score}`;

        // Automatically move to the next question after 1 second
        setTimeout(() => {
            currentQuestionIndex++;
            
            if (currentQuestionIndex < quizData.length) {
                loadQuestion();
            } else {
                document.querySelector('.quiz-container').innerHTML = `<h2>Quiz Finished!</h2><p>Your final score is: ${score}/${quizData.length}</p>`;
            }
        }, 1000);
        
    } else {
        alert("Please select an option before submitting.");
    }
}

// Load the first question when the page loads
window.onload = loadQuestion;
