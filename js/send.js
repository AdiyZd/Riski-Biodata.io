function send(event) {
    event.preventDefault(); // no default

    // user input
    const nama = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const komen = document.getElementById('text').value;

    // pesan
    const kirim = `Nama: ${nama}%0AEmail: ${email}%0AKomentar: ${komen}`;

    const noHp = '6288216796297'; // isi dengan nomor hp bot
    const urlWa = `https://wa.me/${noHp}?text=${kirim}`;

    window.open(urlWa, '_blank');
}