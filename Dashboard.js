//Connect to the server's Server-Sent Events stream
const Event = new EventSource("http://127.0.0.1:8080/event");

//Handle new player data received from the server
Event.onmessage = (event) => {
    console.log("IS RUNNING");
    //Convert the received JSON string into a JavaScript object
    const data = JSON.parse(event.data)
    
    //Update the player's game run time
    const runTimeElement=document.getElementById("runTime");
    runTimeElement.textContent=data.runTime;
    
    //Update the player's run timer
    const timerElement=document.getElementById("timer");
    timerElement.textContent=data.timer.runTime;

    //Update the player's X, Y, and Z position
    const positionElementX=document.getElementById("positionX");
    positionElementX.textContent=data.position.x;
    
    const positionElementY=document.getElementById("positionY");
    positionElementY.textContent=data.position.y;

    const positionElementZ=document.getElementById("positionZ");
    positionElementZ.textContent=data.position.z;

    //Update the player's X, Y, and Z angles
    const anglesElementX=document.getElementById("anglesX");
    anglesElementX.textContent=data.angles.x;
    
    const anglesElementY=document.getElementById("anglesY");
    anglesElementY.textContent=data.angles.y;

    const anglesElementZ=document.getElementById("anglesZ");
    anglesElementZ.textContent=data.angles.z;

    //Update the player's X, Y, and Z velocity
    const velocityElementX=document.getElementById("velocityX");
    velocityElementX.textContent=data.velocity.x;

    const velocityElementY=document.getElementById("velocityY");
    velocityElementY.textContent=data.velocity.y;

    const velocityElementZ=document.getElementById("velocityZ");
    velocityElementZ.textContent=data.velocity.z;

    //Update the player's movement energy
    const energyElement=document.getElementById("energy");
    energyElement.textContent=data.energy;

    //Update the player's X, Y and Z wish velocity
    const wishVelElementX=document.getElementById("wishVelX");
    wishVelElementX.textContent=data.wishVel.x;

    const wishVelElementY=document.getElementById("wishVelY");
    wishVelElementY.textContent=data.wishVel.y;

    const wishVelElementZ=document.getElementById("wishVelZ");
    wishVelElementZ.textContent=data.wishVel.z;
   
    //Update previous movement tick statistics
    const strafeRightElement=document.getElementById("strafeRight");
    strafeRightElement.textContent=data.lastTick.strafeRight;

    const speedGainElement=document.getElementById("speedGain");
    speedGainElement.textContent=data.lastTick.speedGain;

    const idealGainElement=document.getElementById("idealGain");
    idealGainElement.textContent=data.lastTick.idealGain;

    const yawRatioElement=document.getElementById("yawRatio");
    yawRatioElement.textContent=data.lastTick.yawRatio;

    //Update the player's ducking state
    const duckingElement=document.getElementById("ducking");
    duckingElement.textContent=data.ducking;

    //Update the player's physical input buttons
    const physicalButtonsElement=document.getElementById("physicalButtons");
    physicalButtonsElement.textContent=data.physicalButtons;
    
    //Update Move type
    const moveTypeElement=document.getElementById("moveType");
    moveTypeElement.textContent=data.moveType;

    const tickIntervalElement=document.getElementById("tickInterval");
    tickIntervalElement.textContent=data.tickInterval;

    const mapNameElement=document.getElementById("mapName");
    mapNameElement.textContent=data.mapName;
    
    //Log the received data for debugging
    console.log("Data Update:", event.data);
};