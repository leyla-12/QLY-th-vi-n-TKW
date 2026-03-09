// Xử lý form quên mật khẩu
document.getElementById("forgotForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();

  if (email) {
    alert("Mã xác nhận đã được gửi tới email: " + email);
    // TODO: gọi API backend để gửi mã xác nhận
    // Ví dụ: fetch('/api/forgot-password', {method:'POST', body: JSON.stringify({email})})
  } else {
    alert("Vui lòng nhập email.");
  }
});
