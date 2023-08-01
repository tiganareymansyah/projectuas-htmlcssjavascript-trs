// Java Script For Home , About And Contact

const menutoggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector (".navbar ul");

menutoggle.addEventListener ("click", function ()
{
    nav.classList.toggle ("slide");
});