// Mở form thêm sách
document.getElementById("addBook")?.addEventListener("click", () => {
  document.getElementById("bookForm").classList.remove("hidden");
  document.getElementById("formTitle").textContent = "Thêm sách mới";
});

// Đóng form
document.getElementById("closeForm")?.addEventListener("click", () => {
  document.getElementById("bookForm").classList.add("hidden");
});

// Lưu thay đổi
document.getElementById("saveBook")?.addEventListener("click", () => {
  document.getElementById("notification").textContent = "Đã lưu thông tin sách!";
  document.getElementById("notification").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("notification").classList.add("hidden");
  }, 3000);
});

// Xóa sách
document.querySelectorAll(".btn-delete").forEach(btn => {
  btn.addEventListener("click", () => {
    if (confirm("Bạn có chắc chắn muốn xóa sách này?")) {
      alert("Sách đã được xóa!");
    }
  });
});
