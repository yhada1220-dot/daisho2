const helloBtn = document.getElementById("helloBtn")
const message = document.getElementById("message");

helloBtn.addEventListener("click",()=>{
    const hour = new Date().geetHours();
    let greeting ="こんにちは";
    if (hour<12){
        greeting = "おはよう";
    } else 
    }