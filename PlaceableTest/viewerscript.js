// http://www.realxtend.org/doxygen/_tundra_script_reference.html


scene = framework.Scene();

var randomnumber=Math.floor(Math.random()*100);


function AutoConnect(){
    var isserver = server.IsRunning() || server.IsAboutToStart();
    if(isserver==false){
        client.Login("localhost",2345,"Guest"+randomnumber.toString()," ","udp");
        //engine.IncludeFile("/scenes/PlaceableTest/createmovekilltest.js");
        engine.IncludeFile("./../../../rextest2/PlaceableTest/createmovekilltest.js");
    }
    if(isserver==true){
        print("server");
    }
}

function Quit(){
    framework.Exit();
}

frame.DelayedExecute(1).Triggered.connect(this,AutoConnect);
//frame.DelayedExecute(10).Triggered.connect(this, Quit);
