const searchBar=document.querySelector(".searchBar input");
const searchBtn=document.querySelector(".searchBtn button");

const listConatainer=document.querySelector(".list");




function addTask(){
    if (searchBar.value==""){
        alert("Enter something");
    }
    else {
        let newElement=document.createElement("li");
        newElement.innerHTML=searchBar.value;
        listConatainer.appendChild(newElement);

        let cancel=document.createElement("span");
        cancel.innerHTML="\u00d7";
        newElement.appendChild(cancel)
        
        
    }
    searchBar.value="";
    saveData()

}

const task=document.querySelector("ul li");
const cancelBtn=document.querySelector("ul li span");

function checking(e){
    
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData()
        }
    ;
    
}

searchBtn.addEventListener("click",addTask);




listConatainer.addEventListener("click",checking);


listConatainer.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
});

function saveData(){
    localStorage.setItem("data",listConatainer.innerHTML
    );
}

function showData(){
    listConatainer.innerHTML=localStorage.getItem("data")
}
showData()