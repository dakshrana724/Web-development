const start=document.querySelector(".stBtn");
const red=document.querySelector(".box1");
const yellow=document.querySelector(".box2");
const green=document.querySelector(".box3");
const blue=document.querySelector(".box4");


var score=0;


async function simon(){

    while(true){
        var r=0;
        var g=0;
        var b=0;
        var y=0;

        repeat=Math.floor(Math.random()*4)+1;
        for (let i=0;i<repeat;i++){
            color=Math.floor(Math.random()*4);
            if(color==0){
                r=r+1;
                originalColor=red.style.backgroundColor;
                red.style.backgroundColor="rgb(255,0,0)";

                setTimeout(()=>{
                    red.style.backgroundColor=originalColor;
                },1000);
            }
            else if (color==1){
                y=y+1;

                originalColor=yellow.style.backgroundColor;
                yellow.style.backgroundColor="rgb(255,255,0)";

                setTimeout(()=>{
                    yellow.style.backgroundColor=originalColor;
                },1000);
            }
            else if (color==2){
                g=g+1;

                originalColor=green.style.backgroundColor;
                green.style.backgroundColor="rgb(0,255,0)";

                setTimeout(()=>{
                    green.style.backgroundColor=originalColor;
                },1000);
            }
            else if (color==3){
                b=b+1;

                originalColor=blue.style.backgroundColor;
                blue.style.backgroundColor="rgb(0, 0, 255)";

                setTimeout(()=>{
                    blue.style.backgroundColor=originalColor;
                },1000);
            }
        }

        var doubleR=0
        var doubleY=0
        var doubleG=0
        var doubleB=0

        var correct_answer=0


        red.addEventListener("click",()=>{
            doubleR=doubleR+1;
            if(doubleR==r){
                correct_answer=correct_answer+1;
            }   
        });

        yellow.addEventListener("click",()=>{
            doubleY=doubleY+1;
            if(doubleY!=y){
                correct_answer=correct_answer+1;
            }})
        green.addEventListener("click",()=>{
            doubleG=doubleG+1;
            if(doubleG!=g){
                correct_answer=correct_answer+1;
            }})
        blue.addEventListener("click",()=>{
            doubleB=doubleB+1;

            if(doubleB!=b){
                correct_answer=correct_answer+1;
            }

        });

        if(repeat!=correct_answer){
            break;
        }
        else{
            var score=score+1;
        }


    };


    alert("your score is",score);

    }

start.addEventListener("click",simon);