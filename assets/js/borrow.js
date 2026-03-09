// Kiểm tra mã độc giả
document.getElementById("checkReader")?.addEventListener("click", () => {
  const readerId = document.getElementById("readerId").value.trim();
  const notification = document.getElementById("notification");
  const newSlipBtn = document.getElementById("newSlip");

  if (!readerId) {
    notification.textContent = "Vui lòng nhập mã độc giả!";
    notification.className = "error";
    notification.classList.remove("hidden");
    newSlipBtn.disabled = true;
    return;
  }

  // Demo danh sách mã hợp lệ
  const validIds = ["PM0100", "PM0098", "SV0123"];

  if (validIds.includes(readerId)) {
    notification.textContent = "Mã độc giả hợp lệ: " + readerId;
    notification.className = "success";
    notification.classList.remove("hidden");
    newSlipBtn.disabled = false; // Cho phép tạo phiếu
  } else {
    notification.textContent = "Mã độc giả không tồn tại hoặc sai!";
    notification.className = "error";
    notification.classList.remove("hidden");
    newSlipBtn.disabled = true; // Không cho phép tạo phiếu
  }
});

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
  alert("CẬP NHẬT THÔNG TIN THÀNH CÔNG!");
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
