var i = 2;
var user;
var answer;
var count = 5
var max =0

function start(){
    document.getElementById("start").style.display="none"
    document.getElementById("Title").style.display="block"
    document.getElementById("Question").style.display="block"
    document.getElementById("myText").style.display="block"
    document.getElementById("timer").style.display="block"
}

function startTimer(){
    myTimer = setInterval(countDown,500);
  }

function countDown(){
    count -= 1;
    document.getElementById("timer").innerHTML=count+" Seconds"
    console.log(count);
    if (count <= max) {
        clearInterval(myTimer);
        console.log("finished");
        document.getElementById("Question").innerHTML="Score: "+answer/2;
        document.getElementById("myText").style.display="none"
        document.getElementById("mybutton").style.display="block"

    }
}

function yes(){
    location.reload()
}

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('myText');
    
    input.addEventListener('keyup', (e) => {
        console.log('keyup event triggered');
        if (e.keyCode === 13) {
            Hello();
        }
    });
    
    function Hello() {
        var user = document.getElementById("myText").value;
    answer = i+i
    if (user==""){

    }else
        if (user==answer){
        i = i+i
        document.getElementById("Question").innerHTML=i+"+"+i
        count = count+2.5
    }else{
        document.getElementById("Question").innerHTML="Score: "+answer/2;
        document.getElementById("myText").style.display="none"
        document.getElementById("mybutton").style.display="block"
    }
    document.getElementById("myText").value = "";
    }
});