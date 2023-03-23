function preload() {

}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.position(200, 300);
    video = createCapture(VIDEO);
    video.hide();

    tint_color= ""
}

function draw() {
    image(video , 150 , 150 , 300 , 200);
    tint(tint_color)
    fill( 120 , 0 ,0)
    stroke ( 0 , 0 ,120)
    circle(50, 50 , 40)
    circle(550, 50 , 40)
    circle(550, 450 , 40)
    circle(50, 450 , 40)
    rect(40, 70, 20, 360);
    rect(540, 70, 20, 360);
    rect(70, 40, 460, 20);
    rect(70, 440, 460, 20);


}

function take_snapshot() {
    save('kiran.png');

}


function apply_filter() {
    tint_color = document.getElementById('input').value;
}
