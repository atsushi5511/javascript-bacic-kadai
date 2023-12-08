
const text = document.getElementById('text');
const btn = document.getElementById('btn');







btn.addEventListener('click',() => {
    setTimeout(() => {
    document.getElementById('text').textContent = 'ボタンをクリックしました';
}, 2000);
});

