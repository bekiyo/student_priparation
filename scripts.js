document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownBtn.addEventListener('click', function() {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Optional: Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-btn')) {
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle the menu visibility
    menuToggle.addEventListener('click', function() {
        navLinks.classList.add('active');
        document.body.style.overflow = 'hidden'; // Disable scroll when menu is open
    });

    // Close the menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            navLinks.classList.remove('active');
            document.body.style.overflow = ''; // Enable scroll when menu is closed
        }
    });

    // Optionally, you can close the menu when a link is clicked
    navLinks.addEventListener('click', function() {
        navLinks.classList.remove('active');
        document.body.style.overflow = ''; // Enable scroll when menu is closed
    });
});





// Get modal elements
var loginModal = document.getElementById('loginModal');
var signupModal = document.getElementById('signupModal');

// Get open modal buttons
var loginBtn = document.getElementById('loginBtn');
var signupBtn = document.getElementById('signupBtn');

// Get close buttons
var closeBtns = document.getElementsByClassName('close-btn');

// Open login modal
loginBtn.addEventListener('click', function() {
    loginModal.style.display = 'block';
});

// Open signup modal
signupBtn.addEventListener('click', function() {
    signupModal.style.display = 'block';
});

// Close modals when clicking close buttons
for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener('click', function() {
        loginModal.style.display = 'none';
        signupModal.style.display = 'none';
    });
};

// Close modals when clicking outside of them
window.addEventListener('click', function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target == signupModal) {
        signupModal.style.display = 'none';
    }
});


// JavaScript for Testimonial Pagination
document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.testimonial-pagination .dot');

    // Function to show the selected testimonial
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
            if (i === index) {
                testimonial.classList.add('active');
            }
        });

        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === index) {
                dot.classList.add('active');
            }
        });
    }

    // Add click event to each dot
    dots.forEach((dot) => {
        dot.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'));
            showTestimonial(index);
        });
    });

    // Optional: Auto-slide feature
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length; // Loop through testimonials
        showTestimonial(currentIndex);
    }, 5000); // Change testimonial every 5 seconds
});

// JavaScript to handle modal open, close, and form steps
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('signupModal');
    const openModalBtn = document.getElementById('signupBtn');
    const closeModalBtn = document.querySelector('.close-btn');
    const nextBtns = document.querySelectorAll('.next-btn');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const formSteps = document.querySelectorAll('.form-step');

    let currentStep = 0;

    // Open the modal
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        showStep(currentStep);
    });

    // Close the modal when the 'x' is clicked
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Function to show the current step
    function showStep(step) {
        formSteps.forEach((formStep, index) => {
            formStep.classList.toggle('form-step-active', index === step);
        });
    }

    // Next button click event
    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentStep++;
            showStep(currentStep);
        });
    });

    // Previous button click event
    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentStep--;
            showStep(currentStep);
        });
    });
});
// JavaScript to make header sticky on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// JavaScript for the mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});







// List of questions (you can load these dynamically or from a database)
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "What is 5 + 3?",
        options: ["5", "8", "9", "7"],
        answer: 1
    },
    // Add more questions up to 80+
];

// Tracking the current question and user score
let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    // Load the current question and its options
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    document.getElementById('option1').textContent = currentQuestion.options[0];
    document.getElementById('option2').textContent = currentQuestion.options[1];
    document.getElementById('option3').textContent = currentQuestion.options[2];
    document.getElementById('option4').textContent = currentQuestion.options[3];
}

function nextQuestion() {
    // Get the selected answer
    const selectedOption = document.querySelector('input[name="option"]:checked');
    
    if (selectedOption) {
        const answer = parseInt(selectedOption.value);
        
        // Check if the answer is correct
        if (answer === questions[currentQuestionIndex].answer) {
            score++;
        }

        // Move to the next question or end the quiz
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            endQuiz();
        }
    } else {
        alert('Please select an option before moving on.');
    }
}

function endQuiz() {
    // Hide the question container and show the result container
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    
    // Display the score and unique code
    document.getElementById('score').textContent = score + " / " + questions.length;
    document.getElementById('uniqueCode').textContent = generateUniqueCode();
}

function generateUniqueCode() {
    const timestamp = new Date().getTime();
    return "EXAM" + timestamp;
}

// Load the first question when the page is loaded
window.onload = loadQuestion;




// todolist
// Get references to the DOM elements
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task');
const editModal = document.getElementById('edit-modal');
const closeModal = document.querySelector('.close');
const editTaskInput = document.getElementById('edit-task-input');
const saveEditButton = document.getElementById('save-edit');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentEditIndex = null;

// Load tasks from local storage on page load
document.addEventListener('DOMContentLoaded', loadTasks);

// Add task event listener
addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const task = {
        text: taskText,
        completed: false
    };
    tasks.push(task);
    saveTasks();
    renderTasks();
    taskInput.value = '';
}

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = ''; // Clear the current list

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add(task.completed ? 'completed' : '');

        taskItem.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button onclick="toggleComplete(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        taskList.appendChild(taskItem);
    });
}

// Function to mark a task as completed/incomplete
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

// Function to edit a task
function editTask(index) {
    currentEditIndex = index;
    editTaskInput.value = tasks[index].text;
    editModal.style.display = 'block';
}

// Function to save the edited task
saveEditButton.addEventListener('click', () => {
    const editedText = editTaskInput.value.trim();
    if (editedText === '') return;

    tasks[currentEditIndex].text = editedText;
    saveTasks();
    renderTasks();
    closeModalFunc();
});

// Function to save tasks in local storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasks() {
    renderTasks();
}

// Close the modal when 'X' is clicked
closeModal.addEventListener('click', closeModalFunc);

// Function to close the edit modal
function closeModalFunc() {
    editModal.style.display = 'none';
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == editModal) {
        editModal.style.display = 'none';
    }
}
