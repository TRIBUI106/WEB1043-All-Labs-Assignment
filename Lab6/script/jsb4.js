document.addEventListener('DOMContentLoaded', () => {
    // Lấy các phần tử cần thiết
    const output = document.querySelector('.output');
    const message = document.querySelector('.message');
    
    // Tạo một hộp mới và thêm vào trang
    const box = document.createElement('div');
    box.classList.add('box');
    output.append(box);
    
    // Khởi tạo đối tượng game
    const game = {
        timer: 0,
        start: null
    };

    // Hàm sinh số ngẫu nhiên
    function getRandomNumber(max) {
        return Math.floor(Math.random() * max);
    }

    // Hàm để thêm hộp vào trang
    function showBox() {
        message.textContent = 'Bấm điiii'; // Hiển thị thông điệp
        game.start = new Date().getTime(); // Ghi nhận thời điểm bắt đầu
        box.style.display = 'block'; // Hiển thị hộp
        box.style.left = getRandomNumber(output.clientWidth - 50) + 'px'; // Đặt vị trí ngẫu nhiên cho hộp
        box.style.top = getRandomNumber(output.clientHeight - 50) + 'px'; // Đặt vị trí ngẫu nhiên cho hộp
    }

    // Xử lý khi nhấp vào hộp
    box.addEventListener('click', () => {
        box.style.display = 'none'; // Ẩn hộp
        const currentTime = new Date().getTime();
        const duration = (currentTime - game.start) / 1000; // Tính thời gian đã trôi qua
        message.textContent = `Mất ${duration.toFixed(3)}s để bấm`; // Hiển thị thời gian
        game.timer = setTimeout(showBox, getRandomNumber(3000)); // Thay thế hộp sau một khoảng thời gian ngẫu nhiên
    });

    // Hiển thị thông điệp ban đầu và bắt đầu trò chơi
    message.textContent = "Press to Start";
    setTimeout(showBox, 1000);
});
