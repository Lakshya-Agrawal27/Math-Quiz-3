function back(){
    window.location="activity_1.html"
}

function getscore(){
    score = localStorage.getItem("Score");
    document.getElementById("update").innerHTML = "<h1>Score: " + score + " </h1>";
}