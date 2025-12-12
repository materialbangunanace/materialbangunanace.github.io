const NAV_DATA = [
{ name: "Beranda", link: "index.html" },
{ name: "Katalog", link: "katalog.html" },
{ name: "Estimasi", link: "estimasi.html" },
{ name: "Daftar Belanja", link: "belanja.html" },
{ name: "Kontak", link: "kontak.html" }
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
