var count = 1;
window.addEventListener("keyup", function(e)) {
    console.log(e.key);
    if(e.key) {

    }
    add_new_chars();
};
function add_new_chars() {
    
};
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};
getRandom(1,3);

function add_it () {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = `CLICK ME (${count})`;
    btn.setAttribute("id","btn_" + count++);
    btn.setAttribute("class","btn btn-outline-danger");
    btn.addEventListener("click", function(e) { 
        //when it happend event "click" run function(e) to change the innerHTML in the button.
        e.target.innerHTML = e.target.id + "  CLICKED";
        e.target.setAttribute("class","btn btn-outline-dark");
        console.log("onclick1");
    });
    btn.addEventListener("dblclick", function(e) {
        e.target.innerHTML = " YOU double cliked" + e.target.id.replace("btn_","");
    });

    document.body.appendChild(btn);
};
function delete_it(){
    var btn = document.getElementById("btn_" + --count);
    document.body.removeChild(btn);
};
function show_it() {
    
};
var container = document.getElementById("container");
console.log(container);
window.addEventListener("keyup", function(e) {
    console.log(container);/*
    if(e.key=='Escape') {
        container.textContent ="";
    } else if (e.key=='Backspace') {
        var str = container.innerText;
        console.log(str);
        /*if(str==NULL)
            str = "";
        insert.textContent = str.substring(0, str.length-1);
    } else {
        container.textContent += e.key;
    }*/
});