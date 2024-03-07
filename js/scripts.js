function navMenu() {
    let nav = document.getElementById("navbar");
    if (nav.className === "navbar") {
        nav.className += " mobile"; // přidá třídu "mobile" k prvkům s třídou "navbar"
    } else {
        nav.className = "navbar";
    }
}