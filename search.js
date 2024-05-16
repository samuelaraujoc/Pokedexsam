function showSuggestions() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const suggestionsList = document.getElementById('suggestions');
    const fruitsList = document.getElementById('fruits').getElementsByTagName('li');
    suggestionsList.innerHTML = '';

    for (let i = 0; i < fruitsList.length; i++) {
        const fruit = fruitsList[i].textContent;
        if (fruit.toLowerCase().includes(filter)) {
            const listItem = document.createElement('li');
            listItem.textContent = (i + 1) + '. ' + fruit; // Adicionando a numeração
            listItem.onclick = function() {
                input.value = fruit;
                suggestionsList.innerHTML = '';
            };
            suggestionsList.appendChild(listItem);
        }
    }
}
