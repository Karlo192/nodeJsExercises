(async function getStrings() {
    const response = await fetch('/api');
    const result = await response.json();
    const stringArray = result.strings;
    stringArray.forEach(string => {
        const div = document.getElementById('strings');
        const par = document.createElement('p');
        par.innerText = string;
        div.appendChild(par);
    });
})();