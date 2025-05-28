let bttn=document.querySelectorAll(".box");
let resetbttn=document.querySelector("#reset");
let msg=document.querySelector("#msg");
 
let turn0=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],

];
bttn.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("button was clicked");
        if(turn0){
            box.innerText="X";
            turn0=false;
        }
        else{
            box.innerText="O";
            turn0=true;
        }
    
        box.disabled=true;
        checkWinner();
       

    })


});
const checkWinner=()=>{
    for(pattern of winPatterns){
          val1=bttn[pattern[0]].innerText;
          val2=bttn[pattern[1]].innerText;
          val3=bttn[pattern[2]].innerText;
          if(val1!="" && val2!="" && val3!=""){
            if(val1==val2 && val2==val3){
                console.log("winner ",val1);
               
                stop();
                
               
            }
            
                showwin(val1);
                
           
        }
        
       
        

        }
        
}
const stop=()=>{
    bttn.forEach((box)=>{
        box.disabled=true;
    })
}
const showwin=(val1)=>{
  msg.innerText=`the winner is ${val1}`;
}



resetbttn.addEventListener("click",()=>{
    bttn.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        msg.innerText="";

    })
})