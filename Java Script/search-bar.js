const searchBar = document.getElementById("searchBar");
const cards = document.querySelectorAll(".glass");

searchBar.addEventListener("input", () => {
    const query = searchBar.value.trim().toLowerCase();

    cards.forEach(card => {
        const dataText = Object.values(card.dataset).join(" ").toLowerCase();

        const visibleText = card.innerText.toLowerCase();

        const fullText = dataText + " " + visibleText;

        if (fullText.includes(query)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
});