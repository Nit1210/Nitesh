const correctAnswers=['C','B','A','B','B'];
const form=document.querySelector('.quiz-form');
const result=document.querySelector('.result');
let score=0;
form.addEventListener( 'submit', e =>{
    e.preventDefault();

   alert("Are sure we want to submit?");
    //getting user answers
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];

    //check the score
    userAnswers.forEach((answers,index)=>{
        if(answers=== correctAnswers[index]){
            score +=20;
        }
        if(answers[index]!=null){
            document.getElementById('sumbitbutton').disabled=true;
           }
       
       // console.log(score);
    })
    
   
    scrollTo(0,0);
    result.className="result py-4  bg-light text-center";
    let output=0;
    const timmer=setInterval(() =>{
        result.getElementsByTagName("span")[0].innerText=`${output}%`
       
        if(output===score){
            clearInterval;
        }
        else{
            output++;
        }
    },10);
    // console.log(result.getElementsByTagName("span")[0].innerText=`${score}%`);
   //disable Submit Button if score is > 20
  
   

});

