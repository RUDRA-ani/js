 let uscore=0;
 let cscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const reset=document.querySelector("#reset");
const uscorev=document.querySelector("#uscorev");
const cscorev=document.querySelector("#cscorev")
 
const genComputerChoice=()=>{
    choi=["rock","paper","scissors"]
     let com = Math.floor(Math.random()*3);
     return choi[com];
}

const playGame=(userChoice)=>{
   const compChoice=genComputerChoice();
   console.log("your choice is ",userChoice,"computer choice is ",compChoice);
 
   if(userChoice==compChoice){
     draw();
   }
   else{
     if(userChoice=="rock"){
  
        userWin=compChoice=="paper"?false:true;
      }
      else if(userChoice=="paper"){
       userWin=compChoice=="scissors"?false:true;
       }
     else if(userChoice=="scissors"){
       userWin=compChoice=="rock"?false:true;
      }
   //    console.log(userWin);

      display(userWin,userChoice,compChoice);
   }
   

  
}
const draw=()=>{
    console.log("it is draw")
    msg.innerText="DRAW"
}
const display=(userWin,userChoice,compChoice)=>{
     if(userWin){
        console.log("you win");
        uscore++;
        uscorev.innerText=uscore;

        msg.innerText=`you="${userChoice}" and computer="${compChoice}" YOU WIN`;
       
     }
     else{
        console.log("you loose");
        cscore++;
        cscorev.innerText=cscore;
        msg.innerText=`you="${userChoice}" and computer="${compChoice}" YOU LOST`;
        
     }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log(userChoice);
        playGame(userChoice);
        // let userWin=true;
      
        
    })
})
reset.addEventListener("dblclick",()=>{
  cscorev.innerText=0;
  uscorev.innerText=0;
  cscore=0;
  uscore=0;
})
