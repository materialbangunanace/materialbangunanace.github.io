const NAV_DATA = [
{ name: "Bata Merah", priceMin: 550000, priceMax: 800000, unit: "per 1000 pcs" },
{ name: "Bata Ringan", priceMin: 800000, priceMax: 1100000, unit: "per m³" },
{ name: "Cat Tembok Interior 5L", priceMin: 120000, priceMax: 250000, unit: "per 5 kaleng" },
{ name: "Pipa PVC 3/4\"", priceMin: 25000, priceMax: 40000, unit: "per batang" },
{ name: "Triplek 9mm", priceMin: 95000, priceMax: 130000, unit: "per lembar" },
{ name: "Kabel Listrik NYA 1.5mm", priceMin: 180000, priceMax: 260000, unit: "per roll (50m)" }
];


function loadNavigation() {
const nav = document.getElementById("nav-menu");
if (!nav) return;
nav.innerHTML = NAV_DATA.map(item => `<a href="${item.link}">${item.name}</a>`).join(" ");
}


// Render Material Cards
function loadMaterials() {
const wrap = document.getElementById("materials-list");
if (!wrap) return;


wrap.innerHTML = MATERIAL_DATA.map((m, i) => `
<div class=\"card item\" data-id=\"${i}\">
<div class=\"icon\">${m.icon}</div>\" data-id=\"${i}\">
<h4>${m.name}</h4>
<p class=\"price\">Rp ${m.priceMin.toLocaleString()} - Rp ${m.priceMax.toLocaleString()}</p>
</div>
`).join(" ");


$("#materials-list .item").on("click", function () {
const id = $(this).data("id");
const m = MATERIAL_DATA[id];
$("#material-detail").html(`
<div class='card detail-card'>
<h2>${m.name}</h2>
<p><strong>Harga:</strong> Rp ${m.priceMin.toLocaleString()} - Rp ${m.priceMax.toLocaleString()}</p>
<p><strong>Satuan:</strong> ${m.unit}</p>
</div>
`);
});
}


window.addEventListener("DOMContentLoaded", () => {
loadNavigation();
loadMaterials();
});
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


nav.innerHTML = NAV_DATA.map(item => `<a href="${item.link}">${item.name}</a>`).join(" ");
}


// Bisa dipakai di semua halaman
window.addEventListener("DOMContentLoaded", () => {
loadNavigation();
});
