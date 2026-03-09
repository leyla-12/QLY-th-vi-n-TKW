// Xử lý form đăng nhập
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    alert("Đăng nhập thành công (demo)!");
  } else {
    alert("Vui lòng nhập đầy đủ thông tin.");
  }
});

// Xử lý form quên mật khẩu
document.getElementById("forgotForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;

  if (email) {
    alert("Yêu cầu đặt lại mật khẩu đã được gửi tới email: " + email);
  } else {
    alert("Vui lòng nhập email.");
  }
});
