const NAV_DATA = [
{ name: "Beranda", link: "\/index.html" },
{ name: "Kontak", link: "\/p\/contact.html" },
{ name: "Privacy Policy", link: "\/p\/privacy-policy.html" }
];


// Loader universal untuk menu
function loadNavigation() {
const nav = document.getElementById("nav-menu");
if (!nav) return;


nav.innerHTML = NAV_DATA.map(item => `
<a href="${item.link}">${item.name}</a>
`).join("\n");
}


// Bisa dipakai di semua halaman
window.addEventListener("DOMContentLoaded", () => {
loadNavigation();
});
