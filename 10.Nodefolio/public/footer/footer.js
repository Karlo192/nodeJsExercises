// DEFINING A NON-STATIC FOOTER FOR COPYRIGHT STATEMENT WHICH CHANGES BY YEAR
const footer = document.getElementById("footer-about");
footer.innerText = "© Copyright DK " + (new Date().getFullYear()); 