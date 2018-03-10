const CTA = document.querySelector(".cta a")
const ALERT = document.querySelector("#booking-alert")

CTA.classList.remove("hide")
ALERT.classList.add("hide")


// Toggles for when button is clicked
function reveal() {
    CTA.classList.toggle("hide")
    ALERT.classList.toggle("hide")

}
//***************//
// Event handler
// By leaving out the () on reveal ensures the funstion wont be run when it originally loads
CTA.onclick = reveal
//**************//
