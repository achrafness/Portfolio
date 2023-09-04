const body = document.querySelector("body")

const btnModal = document.querySelector(".btn-modal")
const btnClose = document.querySelector(".btn-close")
const modal = document.querySelector("#my_modal_1")

const copy = document.querySelectorAll(".fa-at")

const toggle = document.querySelector(".fa-bars")
const list = document.querySelector(".list-nav")

const dark = document.querySelector(".darkMod")
const darkarr = ['fa-sharp', 'fa-regular', 'fa-moon', 'fa-solid', 'fa-sun'];

// modal 
btnModal.addEventListener("click",()=>{
    modal.showModal()    
    body.classList.add("blur-sp");
})
btnClose.addEventListener("click",()=>{
    body.classList.remove("blur-sp");
})
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        body.classList.remove("blur-sp");
    }
  });

// copy e-mail 
copy.forEach(e => { e.addEventListener("click",()=>{
    var input = "achraf.nessighaoui13@gmail.com";
    navigator.clipboard.writeText(input);
    alert("Copied Text: " + input);
})})
// mobile list 
toggle.addEventListener("click",()=>{
    list.classList.toggle("hidden")
})

// dark mode 
dark.addEventListener("click", () => {
    body.classList.toggle("dark");
    darkarr.forEach(cls => dark.classList.toggle(cls));
});
