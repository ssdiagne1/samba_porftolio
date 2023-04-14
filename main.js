var typed = new Typed('.typer', {
    strings: ['Full stack developper', 'Designer.','Junior Software engineer.'],
    typeSpeed: 100,
    backSpeed: 90,
    loop: true
});

let valueNumbers = document.querySelectorAll(".exp-number");
let interval = 4000;

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

const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  })
}
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("gallery-item")) {
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
});

