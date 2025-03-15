function goHome() {
    window.location.href = '/';
}

function goBack() {
    window.history.back();
}

// Efek Zoom Fullscreen
const galleryItems = document.querySelectorAll('.gallery-item');
const fullscreenView = document.getElementById('fullscreen-view');
const fullscreenImg = document.getElementById('fullscreen-img');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        fullscreenImg.src = item.src;
        fullscreenView.style.display = 'flex';
    });
});

fullscreenView.addEventListener('click', () => {
    fullscreenView.style.display = 'none';
});

// Fungsi Pencarian
function searchGallery() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach(item => {
        const altText = item.alt.toLowerCase();
        if (altText.includes(searchInput)) {
            item.style.display = "inline-block"; // Tampilkan jika cocok
        } else {
            item.style.display = "none"; // Sembunyikan jika tidak cocok
        }
    });
}
