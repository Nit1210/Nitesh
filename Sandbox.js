const correctAnswers=['C','B','A','B','B'];
const form=document.querySelector('.quiz-form');

form.addEventListener( 'submit', e =>{
    e.preventDefault();

    let score=0;
    //getting user answers
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];

    //check the score
    userAnswers.forEach((answers,index)=>{
        if(answers=== correctAnswers[index]){
            score +=25;
        }
        console.log(score);
    })
});