// Lấy thẻ progress-bar
var progressBar = document.getElementById("my-progress-bar");

// Cập nhật giá trị tiến trình (từ 0 đến 100)
function updateProgress(value) {
  progressBar.style.width = value + "%";
}

// Ví dụ: cập nhật giá trị tiến trình là 50%
updateProgress(50);