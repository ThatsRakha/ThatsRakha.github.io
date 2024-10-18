document.addEventListener("DOMContentLoaded", function() {
    fetch('data/journal.txt')
        .then(response => response.text())
        .then(data => {
            const entries = data.split('\n').map(entry => {
                const [date, title, content] = entry.split('|');
                return `
                    <div class="card mb-4">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${date}</h6>
                            <p class="card-text">${content}</p>
                        </div>
                    </div>
                `;
            }).join('');
            document.getElementById('journalContent').innerHTML = entries;
        })
        .catch(err => console.error('Error loading journal:', err));
});


// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Fungsi untuk menampilkan konten jurnal
    fetch('data/journal.txt')
        .then(response => response.text())
        .then(data => {
            const entries = data.split('\n').map(entry => {
                const [date, title, content] = entry.split('|');
                return `
                    <div class="card mb-4">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${date}</h6>
                            <p class="card-text">${content}</p>
                        </div>
                    </div>
                `;
            }).join('');
            document.getElementById('journalContent').innerHTML = entries;
        })
        .catch(err => console.error('Error loading journal:', err));

    // Fungsi untuk menampilkan gambar secara acak di gallery
    const images = [
        'Gallery/Config by AndroGcam ✓1 Feb 13_39.lmc_8.4 (3).jpg'
        // Tambahkan gambar lainnya di sini
    ];

    const galleryContainer = document.getElementById('gallery');
    const randomImages = images.sort(() => 0.5 - Math.random()).slice(0, images.length); // Mengacak dan mengambil semua gambar
    randomImages.forEach(imgSrc => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-4 mb-4';
        colDiv.innerHTML = `
            <div class="card">
                <img src="${imgSrc}" class="card-img-top" alt="Gallery Image">
            </div>
        `;
        galleryContainer.appendChild(colDiv);
    });
});