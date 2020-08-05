function Stopwatch(elem){
    var time = 0;
    var interval;
    var offset;

    function update(){
        if(this.isOn){
            time += delta();
        }
        var formattedtime = timeFormatter(time);
        elem.textContent = formattedtime;
    }

    function delta(){
        var now = Date.now();
        var timePassed = now-offset;
        offset = now;
        return timePassed;
    }

    function timeFormatter(timeInMillisec){
        var time = new Date(timeInMillisec);
        var sec = time.getSeconds().toString();
        var millisec = time.getMilliseconds().toString();
        var min = (time.getMinutes()-30).toString();

        if(min.length<2){
            min='0'+min;
        }
        if(sec.length<2){
            sec='0'+sec;
        }
        while(millisec.length<3){
            millisec='0'+millisec;
        }

        return min+' : '+sec+' : '+millisec;
    }

    this.isOn = false;

    this.start = function(){
        if(!this.isOn){
            interval = setInterval(update.bind(this), 3);
            offset = Date.now();
            this.isOn = true;
        }
    };

    this.stop = function(){
        if(this.isOn){
            clearInterval(interval);
            interval = null;
            this.isOn = false
        }
    };

    this.reset = function(){
        if(!this.isOn){
            time = 0;
            update();
        }
    };
}