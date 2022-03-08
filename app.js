let button = document.getElementsByTagName("button");
let screen = document.getElementsByClassName("screen1")[0];
let calc = document.getElementById("calc");
let clear = document.getElementById("clear")

for (var i=0;i<19;i++)
{
    if(i!=0 && i!=18)
    button[i].addEventListener("click",print);
}

function print(){
    screen.value = screen.value + this.value;
}

calc.addEventListener("click",equal);

function equal(){
    screen.value = eval(screen.value);
}
clear.addEventListener("click",kill);

function kill(){
    screen.value = "";
}