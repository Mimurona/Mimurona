var y = Math.floor(Math.random() * 10 + 1);

var guess = 1;

document.getElementById("submitguess").onclick = function(){
    var x = document.getElementById("guessField").value;

    if(x == y)
    {
        alert("Success!");
    }
    else if(x > y)
    {
        guess++;
        alert("Wrong!! Try Again!");
    }
    else
    {
        guess++;
        alert("Wrong!! Try Again!");
    }
}

