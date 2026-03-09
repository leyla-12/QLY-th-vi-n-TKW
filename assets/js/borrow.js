// Mở form tạo phiếu mượn
document.getElementById("newSlip")?.addEventListener("click", () => {
  document.getElementById("borrowForm").classList.remove("hidden");
  document.getElementById("formTitle").textContent = "Phiếu mượn mới";
});

// Đóng form
document.getElementById("closeForm")?.addEventListener("click", () => {
  document.getElementById("borrowForm").classList.add("hidden");
});

// Lưu phiếu mượn
document.getElementById("saveSlip")?.addEventListener("click", () => {
  document.getElementById("notification").textContent = "CẬP NHẬT THÔNG TIN THÀNH CÔNG!";
  document.getElementById("notification").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("notification").classList.add("hidden");
  }, 3000);
});

// Reset form
document.getElementById("resetSlip")?.addEventListener("click", () => {
  document.getElementById("readerName").value = "";
  document.getElementById("readerContact").value = "";
  document.getElementById("bookList").value = "";
  document.getElementById("borrowDate").value = "";
  document.getElementById("returnDate").value = "";
  document.getElementById("note").value = "";
});
