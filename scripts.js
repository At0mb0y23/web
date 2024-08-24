function checkAnswer() {
    // Correct answer
    const correctAnswer = 'A';
    
    // Get the selected answer
    const options = document.getElementsByName('answer');
    let selectedAnswer = '';
    for (const option of options) {
        if (option.checked) {
            selectedAnswer = option.value;
            break;
        }
    }

    // Check if the selected answer is correct
    const feedbackElement = document.getElementById('feedback');
    if (selectedAnswer === correctAnswer) {
        feedbackElement.textContent = 'Correct! The color of an apple is Red.';
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.textContent = 'Incorrect. Please try again.';
        feedbackElement.style.color = 'red';
    }
}
