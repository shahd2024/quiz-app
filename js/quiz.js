import {allQuestions,quiz} from "./index.js"
 
 
 
 export class Quiz{
    constructor(cateName,diff,nums){
        this.cateName=cateName;
        this.diff=diff;
        this.nums=nums;
        this.score=0;
       
        
    }
    getAPI(){
        return `https://opentdb.com/api.php?amount=${this.nums}&category=${this.cateName}&difficulty=${this.diff}`
    }
   async getAllQuestions(){
     let myHttp=await fetch(this.getAPI());
     let res= await myHttp.json();
     
     
      return res.results
    }
    displayScore(){
        let cartona=`  <h2 class="mb-0"> ${this.score == allQuestions.length ? `Congratulations 🤩🥳
                     your score is ${this.score} of ${allQuestions.length}` : `Opss 😞 your score is ${this.score}
                      of ${allQuestions.length} `}
          </h2>
          <button id="tryBtn" class="again btn btn-primary rounded-pill"><i class="bi bi-arrow-repeat"></i> Try Again</button>
        
        `
        document.getElementById('finish').innerHTML=cartona;
        document.getElementById("finish").classList.replace("d-none", "d-block");
        document.getElementById("myData").classList.replace("d-block", "d-none");
        document.querySelector("#tryBtn").addEventListener("click", () => {
            window.location.reload()
        })
    }
}