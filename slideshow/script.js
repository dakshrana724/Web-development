let arr = ["download (1).jpg", "download (2).jpg", "download (3).jpg", "download.jpg"];


const forward=document.querySelector(".front");
const backward=document.querySelector(".back");

const image=document.querySelector(".container img")

let a=0;

function forwardImage() {
    a = (a + 1) % arr.length; 
    3333
    image.src = arr[a];
}
function backwardImage(){
    a=((a-1)+arr.length)%arr.length
    img=arr[a];
    image.src=img;
    
}


forward.addEventListener("click",forwardImage)
backward.addEventListener("click",backwardImage)









// let arr = ["download (1).jpg", "download (2).jpg", "download (3).jpg", "download.jpg"];

// const forward = document.querySelector(".front");
// const backward = document.querySelector(".back");
// const image = document.querySelector(".container img");

// let a = 0;

// function forwardImage() {
//     a = (a + 1) % arr.length; // Loop back to start when reaching the end
//     image.src = arr[a];
// }

// function backwardImage() {
//     a = (a - 1 + arr.length) % arr.length; // Loop back to end when going backward at the start
//     image.src = arr[a];
// }

// forward.addEventListener("click", forwardImage);
// backward.addEventListener("click", backwardImage);
