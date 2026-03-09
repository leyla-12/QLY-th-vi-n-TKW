// dangnhap.js
// Logic đăng nhập được xử lý inline trong dangnhap.html
// File này giữ lại để tương thích cấu trúc project

// TODO: Khi có backend, thay thế logic demo bằng:
// async function login(username, password) {
//   const res = await fetch('/api/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ username, password })
//   });
//   const data = await res.json();
//   if (data.token) {
//     localStorage.setItem('token', data.token);
//     localStorage.setItem('role', data.role);
//     window.location.href = data.role === 'admin' ? 'taikhoan.html' : 'quanlysach.html';
//   }
// }
