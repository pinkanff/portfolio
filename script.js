const portfolioImages = {
    logo: ["images/logo1.png", "images/logo2.png"],
    poster: ["images/poster1.png", "images/poster2.png"],
    baju: ["images/baju1.png", "images/baju2.png"],
    spanduk: ["images/spanduk1.png", "images/spanduk2.png"]
};

let currentCategory = "";
let currentIndex = 0;

function openLightbox(category, index) {
    currentCategory = category;
    currentIndex = index;
    document.getElementById("lightbox-img").src = portfolioImages[currentCategory][currentIndex];
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
    currentIndex = (currentIndex + direction + portfolioImages[currentCategory].length) % portfolioImages[currentCategory].length;
    document.getElementById("lightbox-img").src = portfolioImages[currentCategory][currentIndex];
}

function openChat() {
    document.getElementById("whatsapp-popup").style.display = "block";
}

function closeChat() {
    document.getElementById("whatsapp-popup").style.display = "none";
}

function kirimPesan() {
    let nama = document.getElementById("nama").value;
    let nomorWhatsApp = "62859106534081";
    let url = `https://api.whatsapp.com/send?phone=${nomorWhatsApp}&text=Nama: ${nama}`;
    window.open(url, "_blank");
}

function kirimPesan() {
    let nama = document.getElementById("nama").value;
    let jenisOrder = document.getElementById("jenis-order").value;
    let tenggat = document.getElementById("tenggat").value;
    let pesan = document.getElementById("pesan").value;
    
    let nomorWhatsApp = "62859106534081"; // Ganti dengan nomor WhatsApp yang benar
    
    let teksPesan = `Halo, saya ingin memesan desain:\n\n`
        + `*Nama:* ${nama}\n`
        + `*Jenis Order:* ${jenisOrder}\n`
        + `*Tenggat Waktu:* ${tenggat}\n`
        + `*Catatan:* ${pesan}\n\n`
        + `Mohon konfirmasi. Terima kasih!`;

    let url = `https://api.whatsapp.com/send?phone=${nomorWhatsApp}&text=${encodeURIComponent(teksPesan)}`;
    
    window.open(url, "_blank");
}

function closeChat() {
    document.getElementById("whatsapp-popup").style.display = "none";
}

function toggleChat() {
    let popup = document.getElementById("whatsapp-popup");
    if (popup.style.display === "none" || popup.style.display === "") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}

function closeChat() {
    document.getElementById("whatsapp-popup").style.display = "none";
}

function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("active");
}

// Fungsi untuk menampilkan/menyembunyikan menu
function toggleMenu() {
    let menu = document.getElementById("nav-menu");
    menu.classList.toggle("active");
}

// Tutup menu saat item diklik
document.querySelectorAll("#nav-menu a").forEach(item => {
    item.addEventListener("click", () => {
        document.getElementById("nav-menu").classList.remove("active");
    });
});

// Toggle menu hamburger
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-menu").classList.toggle("active");
});

// Tutup menu jika layar diperbesar ke desktop
window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        document.getElementById("nav-menu").classList.remove("active");
    }
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        document.getElementById("nav-menu").classList.remove("active");
    }
});
