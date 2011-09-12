//entity hascomponent
var isserver = server.IsRunning();
var outputEnabled = true;

var x1 = Math.floor(10*Math.random());
var y1 = Math.floor(10*Math.random());
var z1 = Math.floor(10*Math.random());

var x2 = Math.floor(10*Math.random());
var y2 = Math.floor(10*Math.random());
var z2 = Math.floor(10*Math.random());

var randomnumber=Math.floor(Math.random()*100);
if(isserver == false){
    print("client");
    client.Login("localhost",2345,"Guest"+randomnumber.toString()," ","udp");
    var scene = framework.Scene();
    var myScene = scene.MainCameraScene();
    main();
}
else{
    print("server");
    var myScene = scene;
    main();
}

function quit(){
    framework.Exit();
}

function createEntity(entityName, x, y, z){
    var pos_x = x;
    var pos_y = y;
    var pos_z = z;
    var entityId = myScene.NextFreeId();
    if(outputEnabled){
        print("ACTION: Creating a box(id: " + entityId +") at (x,y,z): " + pos_x + ", " + pos_y + ", " + pos_z);
    }
    var entity = myScene.CreateEntity(entityId, ["EC_Placeable", "EC_Mesh"]);
    entity.SetTemporary(true);
    entity.SetName(entityName);
    //entity.mesh.SetMeshRef("~/test/1test/box.mesh");
    entity.mesh.SetMeshRef("local://box.mesh");

    // Set starting position for the entity
    var placeable = entity.placeable;
    var transform = placeable.transform;
    transform.pos.x = pos_x;
    transform.pos.y = pos_y;
    transform.pos.z = pos_z;
    placeable.transform = transform;
    
    //scene.EmitEntityCreated(entity);
}

function checkEntityLocation(entityName, x, y, z){
    var entity = myScene.GetEntityByName(entityName);
    if(entity != null){
        var xbool = false;
        var ybool = false;
        var zbool = false;
        
        if(entity.placeable.transform.pos.x == x){
            xbool = true;
        }
        if(entity.placeable.transform.pos.y == y){
            ybool = true;
        }
        if(entity.placeable.transform.pos.z == z){
            zbool = true;
        }
        
        if(outputEnabled){
            print("Checking if old and new coordinates match");
            print(" x "+ x +":" + entity.placeable.transform.pos.x + " " + xbool);
            print(" y "+ y +":" + entity.placeable.transform.pos.y + " " + ybool);
            print(" z "+ z +":" + entity.placeable.transform.pos.z + " " + zbool);
        }
        if (xbool == true && ybool == true && zbool == true){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        print("no entity found")
    }
}
function moveEntity(ent, x, y ,z){
    var entity = myScene.GetEntityByName(ent);
    if(entity != null){
        if(outputEnabled){
            print("ACTION: Moving box(id: " + entity.id + ") to (x,y,z): " + x + ", " + y + ", " + z);
        }
        var placeable = entity.placeable;
        var transform = placeable.transform;
        transform.pos.x = x;
        transform.pos.y = y;
        transform.pos.z = z;
        placeable.transform = transform;
    }
    else{
        print("no entity found")
    } 
}
function removeEntity(ent){
    var entity = myScene.GetEntityByName(ent);
    if (entity != null) {
        if(outputEnabled){
            print("ACTION: Removing entity");
        }
        var entId = entity.id;
        myScene.RemoveEntity(entId);
    }
    else{
        print("No entity found");
    }
}
function isAlive(ent, expected){
    var status = false;
    var entity = myScene.GetEntityByName(ent);
    if (entity == null) {
        status = false;
    }
    if (entity != null) {
        status = true;
    }
    if(status == expected){
        boolmatch = true;
    }
    if(status != expected){
        boolmatch = false;
    }
    
    if(outputEnabled){
        print("Entity is alive: " + status);
    }
    
    return boolmatch;
}
function quit(){
    framework.Exit();
}

function evaluateResults(test1, test2, test3, test4){
    testResult = false;
    if(!test1){
        print("Entity is not alive");
    }
    if(!test2){
        print("coordinate mismatch");
    }
    if(!test3){
        print("coordinate mismatch");
    }
    if(!test4){
        print("Entity is not alive");
    }
    
    if(test1 && test2 && test3 && test4){
        testResult = true;
        print("All test phases completed succesfully");
    }
    /*
    print(test1);
    print(test2);
    print(test3);
    print(test4);
    */
    
    return testResult;
}

var entityName = "box";

//use integers, doubles seem to cause differences in client
/*
//initial location
var x1 = 0;
var y1 = 6;
var z1 = 0;

//move to
var x2 = 0;
var y2 = 10;
var z2 = 0;
*/


function main(){
    if(outputEnabled){
        print("##########################")
    }
    createEntity(entityName, x1, y1, z1);
    test1 = isAlive(entityName, true);
    test2 = checkEntityLocation(entityName, x1, y1, z1);
    moveEntity(entityName, x2, y2, z2);
    test3 = checkEntityLocation(entityName, x2, y2, z2);
    removeEntity(entityName);
    test4 = isAlive(entityName, false);
    if(outputEnabled){
        print("##########################")
    }
    
    if(outputEnabled){
        evaluateResults(test1, test2, test3, test4)
    }
    quit();
}

//frame.DelayedExecute(1).Triggered.connect(this, main);

