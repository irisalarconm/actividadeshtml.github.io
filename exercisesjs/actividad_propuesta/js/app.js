let today = new Date();
let hourNow = today.getHours();
let greeting;

if(hourNow > 18){
    greeting = "Buenas Noches!";
} else if (hourNow > 12){
    greeting = "Buenas Tardes!";
}else if(hourNow>0){
    greeting = "Buenos días!";
}else{
    greeting = "Bienvenidos!";
}

document.write(`<h3>` + greeting + `<h3>`);