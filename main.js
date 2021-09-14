var rover_x=10;
var rover_y=10;
var rover_width=100;
var rover_height=90;
var rover_image="rover.png";

var nasa_images_array=["stuff1img.jpg", "stuff2img.jpg", "stuff3img.jpg", "stuff4img.jpg"];
random_number=Math.floor(Math.random()*4);
var background_image= nasa_images_array[random_number];

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


function add()
{
background_imgtag=new Image();
background_imgtag.onload=uploadbackground;
background_imgtag.src=background_image;

rover_imgtag=new Image();
rover_imgtag.onload=uploadrover;
rover_imgtag.src=rover_image;
}

function uploadbackground()
{
    ctx.drawImage(background_imgtag,0,0, canvas.width, canvas.height);

}

function uploadrover()
{
    ctx.drawImage(rover_imgtag,rover_x, rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    var keypressed=e.keyCode;
    console.log(keypressed);

    if(keypressed=='38')
    {
        console.log("up key is pressed");
        up();
    }

    if(keypressed=='40')
    {
        console.log("down key is pressed");
        down();
    }

    if(keypressed=='37')
    {
        console.log("left key is pressed");
        left();
    }

    if(keypressed=='39')
    {
        console.log("right key is pressed");
        right();
    }

}

function up()
{
 if(rover_y>=0)
 {
     rover_y-=10;
     console.log("when up arrow is pressed x="+rover_x+" y= +"+rover_y);
     uploadbackground();
     uploadrover();
 }
}

function down()
{
 if(rover_y<=500)
 {
     rover_y+=10;
     console.log("when down arrow is pressed x="+rover_x+" y= +"+rover_y);
     uploadbackground();
     uploadrover();
 }
}

function left()
{
 if(rover_x>=0)
 {
     rover_x-=10;
     console.log("when left arrow is pressed x="+rover_x+" y= +"+rover_y);
     uploadbackground();
     uploadrover();
 }
}

function right()
{
 if(rover_x<=700)
 {
     rover_x+=10;
     console.log("when right arrow is pressed x="+rover_x+" y= +"+rover_y);
     uploadbackground();
     uploadrover();
 }
}