const content = document.getElementById('content'); 
const select = document.createElement('select');
content.prepend(select);
select.onchange = function() {
    if(this.value === 'all') {
        document.querySelectorAll('.card').forEach(card => card.style.display = 'block');
    }
    else {
        document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
        document.querySelectorAll(`a[bs-category="${this.value}"]`).forEach(card => card.style.display = 'block');
    }
};
fetch('./includes/Categories.json')
.then(response => response.json())
.then(data => {
        Object.entries(data).forEach(([key,val]) => {
            const option = document.createElement('option');
            option.value = key;
            option.innerText = val;
            select.appendChild(option);
            document.querySelectorAll(`h6[bs-category="${key}"]`)
            .forEach(card => card.innerText = val);
        });
});