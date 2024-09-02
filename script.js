
function pick(val){
    document.getElementById("box").value +=val;
}
function clr(){
    document.getElementById("box").value ="";
}
function solv(){
    var x=document.getElementById("box").value;
    var y=eval(x);
    document.getElementById("box").value=y;
}
