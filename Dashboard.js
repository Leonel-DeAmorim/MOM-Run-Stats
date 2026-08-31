const Event = new EventSource("http://127.0.0.1:8080/event");

Event.onmessage = (event) => {
    console.log("IS RUNNING");
    const data = JSON.parse(event.data)
    
    const timeElement=document.getElementById("time");
    timeElement.textContent=data.time;
    
    const timerElement=document.getElementById("timer");
    timerElement.textContent=data.timer.runTime;

    const positionElementX=document.getElementById("positionX");
    positionElementX.textContent=data.position.x;
    
    const positionElementY=document.getElementById("positionY");
    positionElementY.textContent=data.position.y;

    const positionElementZ=document.getElementById("positionZ");
    positionElementZ.textContent=data.position.z;

    const anglesElementX=document.getElementById("anglesX");
    anglesElementX.textContent=data.angles.x;
    
    const anglesElementY=document.getElementById("anglesY");
    anglesElementY.textContent=data.angles.y;

    const anglesElementZ=document.getElementById("anglesZ");
    anglesElementZ.textContent=data.angles.z;

    const velocityElementX=document.getElementById("velocityX");
    velocityElementX.textContent=data.velocity.x;

    const velocityElementY=document.getElementById("velocityY");
    velocityElementY.textContent=data.velocity.y;

    const velocityElementZ=document.getElementById("velocityZ");
    velocityElementZ.textContent=data.velocity.z;

    const energyElement=document.getElementById("energy");
    energyElement.textContent=data.energy;

    const strafeSync0Element=document.getElementById("strafeSync0");
    strafeSync0Element.textContent=data.strafeSync0;

    const strafeSync1Element=document.getElementById("strafeSync1");
    strafeSync1Element.textContent=data.strafeSync1;

    //movehud
    const wishVelElementX=document.getElementById("wishVelX");
    wishVelElementX.textContent=data.moveHud.wishVel.x;

    const wishVelElementY=document.getElementById("wishVelY");
    wishVelElementY.textContent=data.moveHud.wishVel.y;

    const wishVelElementZ=document.getElementById("wishVelZ");
    wishVelElementZ.textContent=data.moveHud.wishVel.z;
   
    const accelerationElement=document.getElementById("acceleration");
    accelerationElement.textContent=data.moveHud.acceleration;

    const maxspeedElement=document.getElementById("maxspeed");
    maxspeedElement.textContent=data.moveHud.maxspeed;

    const frictionElement=document.getElementById("friction");
    frictionElement.textContent=data.moveHud.friction;



    ///lasttick
    const strafeRightElement=document.getElementById("strafeRight");
    strafeRightElement.textContent=data.lastTick.strafeRight;

    const speedGainElement=document.getElementById("speedGain");
    speedGainElement.textContent=data.lastTick.speedGain;

    const idealGainElement=document.getElementById("idealGain");
    idealGainElement.textContent=data.lastTick.idealGain;

    const yawRatioElement=document.getElementById("yawRatio");
    yawRatioElement.textContent=data.lastTick.yawRatio;

    

    const duckingElement=document.getElementById("ducking");
    duckingElement.textContent=data.ducking;

    
    const buttonsElement=document.getElementById("buttons");
    buttonsElement.textContent=data.buttons;

    console.log("Data Update:", event.data);
};