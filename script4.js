const skillService = document.querySelectorAll(".specific-service");
const globalClose_X_btn = document.querySelectorAll("i.fa-solid.fa-x.close-service")
const globalParagraph = document.querySelectorAll(".services-info")

console.log(skillService);

skillService.forEach((element) => {
    let paragraph = element.querySelector(".services-info")
    let close_X_btn = element.querySelector("i.fa-solid.fa-x.close-service")
    element.addEventListener("click", () => {

        globalClose_X_btn.forEach((element) => {
            element.classList.remove("active-X-close")
        })        
        skillService.forEach((element) => {
            element.classList.remove("active-services")
        })
        globalParagraph.forEach((element) => {
            element.classList.remove("active-paragraph")
        })

        if (paragraph) {
            paragraph.classList.add("active-paragraph")
            element.classList.add("active-services")
            close_X_btn.classList.add("active-X-close")
        }
    })
    close_X_btn.addEventListener("click", (event) => {
        event.stopPropagation()
        paragraph.classList.remove("active-paragraph")
        element.classList.remove("active-services")
        close_X_btn.classList.remove("active-X-close")
    })
})