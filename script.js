var i = 2;
var user;
var answer;
var count;
var max =0
var x= Math.floor(Math.random()*2)+1;
var y=Math.floor(Math.random()*100)+1;
var z=Math.floor(Math.random()*100)+1;
var score = 0;
var mode;

function chooseGameMode(gamemode){
    if(gamemode == 'easy')
    {
        count = 15;
        factor = 5;
        mode = 'Easy';
    }
    if(gamemode == 'medium')
    {
        count = 10;
        factor = 3;
        mode = 'Medium';
    }
    if(gamemode == 'hard')
    {
        count = 5;
        factor = 2;
        mode = 'Hard';
    }
    start()
    document.getElementById("easy").style.display="none"
    document.getElementById("medium").style.display="none"
    document.getElementById("hard").style.display="none"
    
}

function start(){
    document.getElementById("start").style.display="none"
    if (x==1){
        document.getElementById("Question").innerHTML=y+"+"+z
        answer = y+z
    }else{
        document.getElementById("Question").innerHTML=y+"-"+z
        answer = y-z
    }
    document.getElementById("Title").style.display="block"
    document.getElementById("Question").style.display="block"
    document.getElementById("myText").style.display="block"
    document.getElementById("timer").style.display="block"
    document.getElementById("mode").style.display="block"
    document.getElementById("score").style.display="block"
    document.getElementById("timer").innerHTML=count+" Seconds"
    document.getElementById("mode").innerHTML=mode
}


function startTimer(){
    myTimer = setInterval(countDown,1000);
  }

function countDown(){
    count -= 1;
    document.getElementById("timer").innerHTML=count+" Seconds"
    if(count<= 3){
        document.getElementById("timer").style.backgroundColor="red"
    }
    if (count>3){
        document.getElementById("timer").style.backgroundColor="#4CAF50"
    }
    if (count <= max) {
        clearInterval(myTimer);
        console.log("finished");
        document.getElementById("Question").innerHTML+="="+answer;
        document.getElementById("myText").style.display="none"
        document.getElementById("mybutton").style.display="block"

    }
}

function retry(){
    location.reload()
}

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('myText');
    
    input.addEventListener('keyup', (e) => {
        console.log('keyup event triggered');
        if (e.keyCode === 13) {
            submit();
        }
    });
    
    function submit() {
        var user = document.getElementById("myText").value;
        var x= Math.floor(Math.random()*2)+1;
        var y=Math.floor(Math.random()*100)+1;
        var z=Math.floor(Math.random()*100)+1;
    if (user==""){

    }else
        if (user==answer){
            if (x==1){
                document.getElementById("Question").innerHTML=y+"+"+z

            }else{
                document.getElementById("Question").innerHTML=y+"-"+z
            }
        score = score+1
        count = count+factor
        document.getElementById("score").innerHTML="Score: "+score
        if (x==1){
            answer = y+z
        }else{
            answer = y-z
        }
    }else{
        document.getElementById("myText").value = "";
    }
    document.getElementById("myText").value = "";

    console.log(answer)
    }
});
