(async function getDragons() {
    const response = await fetch('/api');
    const result = await response.json();
    const dragonsArray = result.dragons;
    dragonsArray.forEach(dragon => {
        const div = document.getElementById('dragons');
        const paragraph = document.createElement('p');
        paragraph.innerText = dragon.name;
        div.appendChild(paragraph);
    });
})();

// WORKING WITH SOCKETS
const socket = io();

const dragonsDiv = document.getElementById('dragons');

function addDragon() {
    const newDragon = 'T-Rex';
    socket.emit('newDragon', { newDragon })
};

socket.on('addNewDragon', (data) => {
    const newParagraph = document.createElement('p');
    newParagraph.innerText = data.newDragon;
    dragonsDiv.appendChild(newParagraph);
});