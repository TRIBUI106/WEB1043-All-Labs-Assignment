const img = [
    '/img/goku1.png',
    '/img/goku2.png',
    '/img/goku3.png',
    '/img/goku4.png',
    '/img/goku5.png'
]

img.forEach(element => {
    console.log(element)
});

let anhHienTai = 0
document.getElementById('showImg').src = img[anhHienTai];

function firstImg() {
    console.log("Đã hiện ảnh đầu")
    document.getElementById('showImg').src = img[0];
}

function lastImg() {
    console.log("Đã hiện ảnh cuối")
    anhHienTai = img.length - 1;
    document.getElementById('showImg').src = img[anhHienTai];
}

function prevImg() {
    console.log("Đã hiện ảnh trước đó");
    anhHienTai = (anhHienTai > 0) ? anhHienTai - 1 : img.length - 1;
    document.getElementById('showImg').src = img[anhHienTai];
}

function nextImg() {
    console.log("Đã hiện ảnh kế tiếp");
    anhHienTai = (anhHienTai < img.length - 1) ? anhHienTai + 1 : 0;
    document.getElementById('showImg').src = img[anhHienTai];
}

// điều_kiện ? biểu_thức_nếu_đúng : biểu_thức_nếu_sai;
