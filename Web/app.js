document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'Tempe Goreng', img: '../Gambar/p1.png', price: 2000},
            { id: 2, name: 'Tahu Goreng', img: 'p2.png', price: 2000},
            { id: 3, name: 'Telur Dadar', img: 'p3.png', price: 5000},
            { id: 4, name: 'Nasi Putih', img: 'p4.png', price: 5000},
            { id: 5, name: 'Tumis Kangkung', img: 'p5.png', price: 3000},
            { id: 6, name: 'Kentang Balado', img: 'p6.png', price: 3000},
            { id: 7, name: 'Tongkol Balado', img: 'p7.png', price: 6000},
            { id: 8, name: 'Lele Goreng', img: 'p8.png', price: 5000},
            { id: 9, name: 'Ayam Goreng', img: 'p9.png', price: 7000},
            { id: 10, name: 'Perkedel', img: 'p10.png', price: 2000},
            { id: 11, name: 'Sayur Asem', img: 'p11.png', price: 3000},
            { id: 12, name: 'Sayur Sop', img: 'p12.png', price: 3000},
        ]
    }));
});