const questions = [
    {
        question: "What does the 'defer' attribute in a script tag do?",
        answers: [
            { text: "Loads the script asynchronously", correct: false },
            { text: "Defers the execution of the script until after the HTML is parsed", correct: true },
            { text: "Executes the script immediately", correct: false },
            { text: "Preloads the script for later execution", correct: false },
        ]
    },
    {
        question: "What is the purpose of the 'data-*' attribute in HTML5?",
        answers: [
            { text: "To store custom data attributes on HTML elements", correct: true },
            { text: "To define styling for an element", correct: false },
            { text: "To enhance accessibility features", correct: false },
            { text: "To link external resources", correct: false },
        ]
    },
    {
        question: "What is the difference between inline, block, and inline-block elements?",
        answers: [
            { text: "They differ in how they are styled by default", correct: false },
            { text: "They define different positioning behaviors", correct: false },
            { text: "They affect layout, including width and height behavior", correct: true },
            { text: "They differ only in rendering speed", correct: false },
        ]
    },
    {
        question: "What is the purpose of the 'figure' and 'figcaption' elements in HTML5?",
        answers: [
            { text: "To group images and captions", correct: true },
            { text: "To replace the <img> tag", correct: false },
            { text: "To add alternative text to images", correct: false },
            { text: "To define a table layout", correct: false },
        ]
    },
    {
        question: "How does the 'contenteditable' attribute work in HTML?",
        answers: [
            { text: "It makes elements editable in the browser", correct: true },
            { text: "It allows the modification of styles dynamically", correct: false },
            { text: "It enables responsive design", correct: false },
            { text: "It defines custom content areas", correct: false },
        ]
    },
    {
        question: "What is the purpose of the 'placeholder' attribute in an input element?",
        answers: [
            { text: "To provide a label for the input", correct: false },
            { text: "To specify temporary, hint text", correct: true },
            { text: "To validate the input data", correct: false },
            { text: "To define the type of input", correct: false },
        ]
    },
    {
        question: "What is the difference between a 'div' and a 'section' element in HTML5?",
        answers: [
            { text: "Sections are semantic, while divs are not", correct: true },
            { text: "Sections cannot contain child elements", correct: false },
            { text: "Divs are only for styling", correct: false },
            { text: "Sections are block-level, divs are inline", correct: false },
        ]
    },
    {
        question: "What is the role of the 'template' element in HTML5?",
        answers: [
            { text: "It is used to define reusable HTML snippets", correct: true },
            { text: "It is used to create forms dynamically", correct: false },
            { text: "It is an alternative to CSS styling", correct: false },
            { text: "It embeds multimedia content", correct: false },
        ]
    },

    {
        question: "What is the difference between relative and absolute positioning in CSS?",
        answers: [
            { text: "Absolute is relative to the browser window, relative is based on the parent element", correct: true },
            { text: "Both are the same", correct: false },
            { text: "Relative ignores parent positioning", correct: false },
            { text: "Absolute uses z-index, relative does not", correct: false },
        ]
    },
    {
        question: "What is the difference between 'em' and 'rem' units in CSS?",
        answers: [
            { text: "'em' is relative to its parent, 'rem' is relative to the root element", correct: true },
            { text: "Both are absolute units", correct: false },
            { text: "'rem' changes with the viewport size", correct: false },
            { text: "'em' is only for font sizes", correct: false },
        ]
    },
    {
        question: "What is the difference between relative, absolute, fixed, and sticky positioning in CSS?",
        answers: [
            { text: "Relative positions the element relative to itself", correct: false },
            { text: "Sticky positions the element based on the viewport", correct: false },
            { text: "Absolute positions the element relative to its nearest positioned ancestor", correct: true },
            { text: "Fixed positions the element relative to the viewport", correct: true },
        ]
    },
    {
        question: "What are CSS pseudo-elements, and how are they different from pseudo-classes?",
        answers: [
            { text: "Pseudo-elements style specific parts of elements, pseudo-classes style based on state", correct: true },
            { text: "Pseudo-elements modify attributes", correct: false },
            { text: "Pseudo-classes only work on text content", correct: false },
            { text: "Both are used to group elements", correct: false },
        ]
    },
    {
        question: "What is the difference between 'visibility: hidden' and 'display: none' in CSS?",
        answers: [
            { text: "'visibility: hidden' hides the element but keeps its space, 'display: none' removes it", correct: true },
            { text: "'display: none' is faster", correct: false },
            { text: "'visibility: hidden' collapses the space", correct: false },
            { text: "Both are identical in behavior", correct: false },
        ]
    },
    {
        question: "What is the difference between CSS Grid and Flexbox?",
        answers: [
            { text: "Grid is for 2D layouts, Flexbox is for 1D layouts", correct: true },
            { text: "Flexbox supports responsive design better", correct: false },
            { text: "Grid cannot align items", correct: false },
            { text: "Flexbox doesn't support wrapping", correct: false },
        ]
    },
    {
        question: "What does the 'clip-path' property do in CSS?",
        answers: [
            { text: "Creates a clipping region that determines what part of the element is visible", correct: true },
            { text: "Defines the border radius of an element", correct: false },
            { text: "Works only with SVG elements", correct: false },
            { text: "Clips text content in a container", correct: false },
        ]
    },
    {
        question: "What is the difference between transitions and animations in CSS?",
        answers: [
            { text: "Transitions occur on property changes, animations can run continuously", correct: true },
            { text: "Animations are simpler to implement", correct: false },
            { text: "Transitions only work with JavaScript", correct: false },
            { text: "Animations require user interaction", correct: false },
        ]
    },
    {
        question: "What is the purpose of the 'z-index' property in CSS?",
        answers: [
            { text: "To define the stacking order of elements", correct: true },
            { text: "To add shadows to elements", correct: false },
            { text: "To define the opacity of elements", correct: false },
            { text: "To determine the visibility of an element", correct: false },
        ]
    },
    {
        question: "What is the difference between fixed and fluid layouts in CSS?",
        answers: [
            { text: "Fixed layouts have fixed widths, fluid layouts adapt to the viewport size", correct: true },
            { text: "Fluid layouts are always full screen", correct: false },
            { text: "Fixed layouts use percentage-based widths", correct: false },
            { text: "Fluid layouts cannot include media queries", correct: false },
        ]
    },
    {
        question: "What is the difference between 'null' and 'undefined' in JavaScript?",
        answers: [
            { text: "'null' is an assigned value, 'undefined' means a variable has been declared but not assigned a value", correct: true },
            { text: "'null' is an object, 'undefined' is a type of error", correct: false },
            { text: "'null' represents an empty object, 'undefined' is a non-existent variable", correct: false },
            { text: "'null' and 'undefined' are identical", correct: false },
        ]
    },
    {
        question: "What is closure in JavaScript?",
        answers: [
            { text: "A function that is called when a new variable is declared", correct: false },
            { text: "A function that can access variables from its outer function even after the outer function has returned", correct: true },
            { text: "A function that executes only when an event is triggered", correct: false },
            { text: "A function that executes asynchronously", correct: false },
        ]
    },
    {
        question: "What is the purpose of the 'bind()' method in JavaScript?",
        answers: [
            { text: "It binds a function to a specific context", correct: true },
            { text: "It binds variables to the function's parameters", correct: false },
            { text: "It makes the function execution synchronous", correct: false },
            { text: "It binds a function to an event handler", correct: false },
        ]
    },
    {
        question: "What are the differences between 'let', 'const', and 'var' in JavaScript?",
        answers: [
            { text: "'let' and 'const' are block-scoped, while 'var' is function-scoped", correct: true },
            { text: "'let' can be reassigned, 'const' cannot, 'var' is also reassigned", correct: false },
            { text: "'let' is used for numbers, 'const' for strings, and 'var' for objects", correct: false },
            { text: "'let' and 'const' are used in ES6, 'var' is deprecated", correct: false },
        ]
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        answers: [
            { text: "'this' refers to the global object", correct: false },
            { text: "'this' refers to the current function being executed", correct: false },
            { text: "'this' refers to the object calling the method", correct: true },
            { text: "'this' always refers to the window object", correct: false },
        ]
    },
    {
        question: "What are Promises in JavaScript and how do they work?",
        answers: [
            { text: "Promises are objects representing the eventual completion (or failure) of an asynchronous operation", correct: true },
            { text: "Promises are used to execute synchronous operations in parallel", correct: false },
            { text: "Promises are functions that return callbacks", correct: false },
            { text: "Promises are used for handling errors", correct: false },
        ]
    },
    {
        question: "What is the event delegation in JavaScript?",
        answers: [
            { text: "Attaching an event listener to a parent element to handle events on its child elements", correct: true },
            { text: "Assigning event handlers to individual elements", correct: false },
            { text: "Delegating event handling to a third-party library", correct: false },
            { text: "Assigning multiple event handlers to an element", correct: false },
        ]
    },
    {
        question: "What is the difference between synchronous and asynchronous code execution in JavaScript?",
        answers: [
            { text: "Synchronous code runs sequentially, while asynchronous code runs in the background", correct: true },
            { text: "Asynchronous code waits for the previous task to finish before starting", correct: false },
            { text: "Synchronous code executes in parallel, asynchronous code executes sequentially", correct: false },
            { text: "Asynchronous code runs inside a callback function, synchronous code does not", correct: false },
        ]
    },
    {
        question: "What is a JavaScript 'module' and how is it used?",
        answers: [
            { text: "A module is a file containing reusable code that can be imported/exported between files", correct: true },
            { text: "A module is a special function used to handle callbacks", correct: false },
            { text: "Modules are used for error handling in JavaScript", correct: false },
            { text: "A module is a type of array used to store functions", correct: false },
        ]
    },
    {
        question: "What is the difference between 'call()' and 'apply()' in JavaScript?",
        answers: [
            { text: "'call()' takes arguments individually, 'apply()' takes an array of arguments", correct: true },
            { text: "'call()' executes a function in the global context, 'apply()' executes in the current context", correct: false },
            { text: "'call()' is used for event handling, 'apply()' is used for asynchronous tasks", correct: false },
            { text: "'call()' and 'apply()' are used to define functions", correct: false },
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true; // Disable all buttons
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
