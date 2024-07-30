const inputbox=document.querySelector("#input-box");
const listcontainer=document.querySelector("#list");
function done(){
    if(inputbox.value===''){
        alert("Nothing is entered");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);       
    }
    inputbox.value="";
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
    }
    else{
        e.target.classList.toggle("checked");
    }
},false)