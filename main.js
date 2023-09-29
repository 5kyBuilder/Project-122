x = 0;
y = 0;

amount = 0;

check_apple = "";

var speechRecognition = window.webkitSpeechRecognition;
var new_speech = new speechRecognition();

function preload()
{
    apple = loadImage("apple.png")
}

function setup()
{
    canvas = createCanvas(800,600);
}

function draw()
{
    if(check_apple == "set"){
        for(i = 1; i < amount; i++)
        {
            y = floor(Math.random() * 700);
            x = floor(Math.random() * 700);

            image(apple, x,y,50,50); 
        }
        document.getElementById("status").innerHTML = amount + " Apples are drawn in the canvas!";
    }
}

function draw_shape ()
{
    document.getElementById("status").innerHTML = "System is listening, Please Speak."

    new_speech.start();
}

new_speech.onresult = function(e)
{
    content = e.results[0][0].transcript;

    console.log(content);

    number = Number(content);

    if(Number.isInteger(number))
    {
        document.getElementById("status").innerHTML = "Drawing" + amount +  " Apples in the screen";
        amount = number;
        check_apple = "set";
    }
}    