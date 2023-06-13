fetch('./includes/Categories.json')
.then(response => response.json())
.then(data => {
        Object.entries(data).forEach(([key,val]) => {
            document.querySelectorAll(`h2[bs-category="${key}"]`)
            .forEach(card => card.innerText = val);
        });
});