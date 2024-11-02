import { Quiz } from "./quiz.js";
import { Question } from "./question.js";


let categoryMenu=document.getElementById('categoryMenu');
let difficultyOptions=document.getElementById('difficultyOptions');
let questionsNumber=document.getElementById('questionsNumber');
let btn=document.getElementById('startQuiz');
 export let quiz;
 export  let allQuestions;
btn.addEventListener('click',async()=>{
    let cateName=categoryMenu.value;
    let diff=difficultyOptions.value;
    let nums=questionsNumber.value;
     quiz=new Quiz(cateName,diff,nums);
    console.log(quiz.getAPI());
      allQuestions=await quiz.getAllQuestions();
      console.log(allQuestions);
      let question=new Question(0);
      question.displauAllQuestions();
      document.getElementById('quizOptions').classList.replace('d-block','d-none');
      document.getElementById('myData').classList.replace('d-none','d-block');
})


