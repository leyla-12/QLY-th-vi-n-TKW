// Xử lý form đăng nhập
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username && password) {
    alert("Đăng nhập thành công (demo)!");
    // TODO: gọi API backend để xác thực tài khoản
    // Ví dụ: fetch('/api/login', {method:'POST', body: JSON.stringify({username, password})})
  } else {
    alert("Vui lòng nhập đầy đủ thông tin.");
  }
});
