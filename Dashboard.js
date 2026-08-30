const Event = new EventSource("http://127.0.0.1:8080/event");

Event.onmessage = (event) => {
    console.log("IS RUNNING");
    const data = JSON.parse(event.data)
    
    const timeElement=document.getElementById("time");
    timeElement.textContent=data.time;

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

    const moveTypeElement=document.getElementById("moveType");
    moveTypeElement.textContent=data.moveType;

    const moveHudElement=document.getElementById("moveHud");
    moveHudElement.textContent=data.moveHud;

    const lastTickElement=document.getElementById("lastTick");
    lastTickElement.textContent=data.lastTick;

    const duckingElement=document.getElementById("ducking");
    duckingElement.textContent=data.ducking;

    const sprintingElement=document.getElementById("sprinting");
    sprintingElement.textContent=data.sprinting;

    const walkingElement=document.getElementById("walking");
    walkingElement.textContent=data.walking;

    const buttonsElement=document.getElementById("buttons");
    buttonsElement.textContent=data.buttons;

    console.log("Data Update:", event.data);
};