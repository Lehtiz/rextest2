// http://www.realxtend.org/doxygen/_tundra_script_reference.html


scene = framework.Scene();

var randomnumber=Math.floor(Math.random()*100);
var scenename = "testapp";


function AutoConnect(){
    var isserver = server.IsRunning() || server.IsAboutToStart();
    if(isserver==false){
        client.Login("localhost",2345,"Guest"+randomnumber.toString()," ","udp");
        goviewer();
    }
    if(isserver==true){
        goserver();
    }
}

function Quit(){
    framework.Exit();
}

//me = framework.server();
function goserver(){
    print("server");
    //server();
    //var avatarEntity = me.CreateEntityRaw(scene.NextFreeId(),["EC_Script"])
    //me.EmitEntityCreatedRaw(avatarEntity);
}
function goviewer(){
    print("viewer");
    engine.IncludeFile("/home/mikko/src/rextest2/PlaceableTest/createmovekilltest.js")
    //print(scene.GetSceneRaw());
    //viewer();
    //var avatarEntity = scene.CreateEntityRaw(scene.NextFreeId())
    //scene.EmitEntityCreatedRaw(avatarEntity);
}

function viewer(){

    //var scene = framework.Scene().GetDefaultSceneRaw();
    var bEntity = scene.CreateEntityRaw(scene.NextFreeId(), ["EC_Script"]);
    var script = bEntity.script;
    script.type = "js";
    script.runOnLoad = true;
    var r = script.scriptRef;
    r.ref = "~/test/1test/testapp.js";
    script.scriptRef = r;
    
    scene.EmitEntityCreatedRaw(bEntity);
}



/*
//create a script entity and run it
function viewer2(){
    print("viewer");

    var script = me.GetOrCreateComponentRaw("EC_Script");
    script.type = "js";
    script.runOnLoad = true;
    var r = script.scriptRef;
    r.ref = "~/test/1test/testapp.js";
    script.scriptRef = r;
    
    me.EmitEntityCreatedRaw(entity);
}

function goviewer2(){
    //me = framework.DefaultScene();
    var entityName = "asd";
    var entity = me.CreateEntityRaw(me.NextFreeId(), ["EC_Script"]);
    entity.SetTemporary(false);
    entity.SetName(entityName);
    
    var script = entity.script;
    script.type = "js";
    script.runOnLoad = true;
    var r = script.scriptRef;
    r.ref = "local://testapp.js";
    script.scriptRef = r;
    
    me.EmitEntityCreatedRaw(entity);
}
*/

frame.DelayedExecute(1).Triggered.connect(this,AutoConnect);
frame.DelayedExecute(10).Triggered.connect(this, Quit);
