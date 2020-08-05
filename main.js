var timer = document.getElementById('timerSpan');
var startBtn = document.getElementById('startbtn');
var resetBtn = document.getElementById('resetbtn');
var stopBtn = document.getElementById('stopbtn')

var watch = new Stopwatch(timer);

startBtn.addEventListener('click', function(){
    if(!watch.isOn){
        watch.start();
    }
});

stopBtn.addEventListener('click', function(){
    if(watch.isOn){
        watch.stop();
    }
});

resetBtn.addEventListener('click', function(){
    watch.reset();
});
