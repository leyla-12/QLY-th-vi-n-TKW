// Mở form tạo tài khoản
document.getElementById("createAccount")?.addEventListener("click", () => {
  document.getElementById("accountForm").classList.remove("hidden");
  document.getElementById("formTitle").textContent = "Tạo tài khoản mới";
});

// Đóng form
document.getElementById("closeForm")?.addEventListener("click", () => {
  document.getElementById("accountForm").classList.add("hidden");
});

// Lưu/Cập nhật tài khoản
document.getElementById("saveAccount")?.addEventListener("click", () => {
  document.getElementById("notification").textContent = "CẬP NHẬT THÔNG TIN THÀNH CÔNG!";
  document.getElementById("notification").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("notification").classList.add("hidden");
  }, 3000);
});

// Xóa tài khoản
document.querySelectorAll(".btn-delete").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("deleteConfirm").classList.remove("hidden");
  });
});

// Hủy xóa
document.getElementById("cancelDelete")?.addEventListener("click", () => {
  document.getElementById("deleteConfirm").classList.add("hidden");
});

// Xác nhận xóa
document.getElementById("confirmDelete")?.addEventListener("click", () => {
  document.getElementById("deleteConfirm").classList.add("hidden");
  document.getElementById("notification").textContent = "XÓA TÀI KHOẢN THÀNH CÔNG!";
  document.getElementById("notification").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("notification").classList.add("hidden");
  }, 3000);
});
