import { Controller } from "stimulus"

export default class extends Controller {
    static targets = ["list", "hamburger", "x"]

    openNav() {
        const hamIcon = this.hamburgerTarget
        const xIcon = this.xTarget
        const listMenu = this.listTarget
        hamIcon.classList.toggle("hidden")
        xIcon.classList.toggle("hidden")
        listMenu.classList.toggle("hidden")
        console.log("opened nav from hamburger")
    }
    closeNav() {
        const hamIcon = this.hamburgerTarget
        const xIcon = this.xTarget
        const listMenu = this.listTarget
        hamIcon.classList.toggle("hidden")
        xIcon.classList.toggle("hidden")
        listMenu.classList.toggle("hidden")
        console.log("closed nav from menu")
    }
    closeNavFromLogo() {
        const hamIcon = this.hamburgerTarget
        const xIcon = this.xTarget
        const listMenu = this.listTarget
        if (!listMenu.classList.contains("hidden")) {
            hamIcon.classList.toggle("hidden")
            xIcon.classList.toggle("hidden")
            listMenu.classList.toggle("hidden")
            console.log("click logo, nav should be closed after click")
        }
    }
}
