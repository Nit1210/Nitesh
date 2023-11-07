const correctAnswers = ['C', 'B', 'A', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const submitButton = document.getElementById('submitbutton');
let score = 0;
const confirmMessage="Are you sure you want to submit?";

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(submitButton);

    if(confirm(confirmMessage)) {
        // Disabling the submit button
        submitButton.disabled = true;
    
        // Getting user answers
        const userAnswers = [
            form.q1.value,
            form.q2.value,
            form.q3.value,
            form.q4.value,
            form.q5.value
        ];

        // Check the score
        userAnswers.forEach((answer, index) => {
            if (answer === correctAnswers[index]) {
                score += 20;
            }
        });

        // Displaying the score gradually
        scrollTo(0, 0);
        result.className = 'result py-4 bg-light text-center';
        let output = 0;
        const timer = setInterval(() => {
            result.getElementsByTagName('span')[0].innerText = `${output}%`;
            if (output === score) {
                clearInterval(timer);
            } else {
                output++;
            }
        }, 10);
    }
});
