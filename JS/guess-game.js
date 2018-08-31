function guess(x) {
    const num = document.getElementById('num').value;
    const rd = Math.round(Math.random() * 5);
    const show = document.getElementById('show');
    console.log(rd);
    show.innerHTML = rd == num ? 'Dung roi' : 'Rat tiec, ban da doan sai';
}

