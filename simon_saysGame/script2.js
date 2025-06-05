const start=document.querySelector(".stBtn");
const lev=document.querySelector("h2");
const body=document.querySelector("body");
const container=document.querySelector(".container")

const red=document.querySelector(".box1");
const yellow=document.querySelector(".box2");
const green=document.querySelector(".box3");
const blue=document.querySelector(".box4");

let begin=true;
let level=0;
let color=["box1","box2","box3","box4"];

let colorArr=[];
let userArr=[];


start.addEventListener("click",()=>{
    if(begin==true){
    console.log("Game started");
    begin=false;

    lev.innerText="Level 0";
        var score=document.querySelector("h3");
        score.innerText=`Score:${level}`

    nextlevel()
    }

})


function nextlevel(){
    userArr=[];
    level++;
    lev.innerText="Level "+level;

    let randInx=Math.floor(Math.random()*4);
    console.log(randInx)
    let randColor=color[randInx]

    colorArr.push(randColor)

    let flashedColor=document.querySelector(`.${randColor}`);

    flashbtn(flashedColor);   

}

function flashbtn(flashedColor){
    flashedColor.classList.add("flash");

    setTimeout(()=>{
        flashedColor.classList.remove("flash"),400
    })
    
    
    
}

console.log(colorArr);
red.addEventListener("click",()=>userinput("box1"));
yellow.addEventListener("click",()=>userinput("box2"));
green.addEventListener("click",()=>userinput("box3"));
blue.addEventListener("click",()=>userinput("box4"));

function userinput(box){
    userArr.push(box)
    compare(userArr.length - 1);
}
function compare(i){
    
    
    if(colorArr[i]===userArr[i]){
        console.log("same");
        if (userArr.length===colorArr.length){
        setTimeout(() => {
            nextlevel()
        }, 1000); }
    }
    else{
        console.log("not same");
        body.style.backgroundColor="red";
        container.style.backgroundColor="red";


        setTimeout(()=>{
            body.style.backgroundColor="black";
            container.style.backgroundColor="white";
        },200);
        lev.innerText="Game Over ! Press start to begin again";
        var score=document.querySelector("h3");
        score.innerText=`Score:${level}`
        reset()
        
        }
    }
function reset(){
    userArr=[];
    colorArr=[];
    level=0;
    begin=true;
}