var typed = new Typed('.typer', {
    strings: ['Full stack developper', 'Designer.','Junior Software engineer.'],
    typeSpeed: 100,
    backSpeed: 90,
    loop: true
});

let valueNumbers = document.querySelectorAll(".exp-number");
let interval = 30;

valueNumbers.forEach((valueNumber)=>{
    let startValue = 0;
    let endValue = parseInt(valueNumber.getAttribute("data-val"));
    let duration = Math.floor(interval/endValue);
    let counter = setInterval(()=>{
        startValue +=1;
        valueNumber.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    },duration)
});