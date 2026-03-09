// quenmatkhau.js
// Logic quên mật khẩu được xử lý inline trong quenmatkhau.html
// File này giữ lại để tương thích cấu trúc project

// TODO: Khi có backend, thay thế logic demo bằng:
// async function forgotPassword(email) {
//   const res = await fetch('/api/forgot-password', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ email })
//   });
//   const data = await res.json();
//   if (data.success) {
//     // Chuyển sang trang nhập mã xác nhận
//     window.location.href = `xacnhan.html?email=${encodeURIComponent(email)}`;
//   }
// }
