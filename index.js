// Code of this program


function UpdatedClock(){

    const date = new Date();
    
    let hours = date.getHours();
    const meridium = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = date.getMinutes().toString().padStart(2,0);
    const seconds = date.getSeconds().toString().padStart(2,0);
    
    const format = `${hours}:${minutes}:${seconds} ${meridium}`;
    
    document.getElementById("clock").textContent = format;

    // Define the images
    const day = "image/day.jpg";
    const sunrise = "image/sunrise.jpg";
    const night = "image/night.jfif";

    
    // Get the elements of body
    const body = document.body;

    // After 12:00 PM (noon)
    if (hours >= 12 && meridium === "PM") { 
        body.style.backgroundImage = `url('${sunrise}')`;
    // After 7:00 PM
    } else if (hours >= 7 && meridium === "PM") { 
        body.style.backgroundImage = `url('${night}')`;
    } else {
        body.style.backgroundImage = `url('${day}')`;
    }

}

UpdatedClock()
setInterval(UpdatedClock, 1000)
