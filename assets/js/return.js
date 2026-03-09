// Demo dữ liệu độc giả
const readers = {
  "leengank5@gmail.com": {
    name: "Lê Thanh Ngân",
    id: "012345",
    status: "Chưa trả sách",
    period: "09/04/2026 - 13/04/2026",
    books: [
      "Giáo trình Lịch sử Đảng Cộng Sản Việt Nam",
      "Bài tập Kinh tế lượng",
      "Giáo trình Kinh tế lượng"
    ],
    fine: {
      total: 85000,
      details: [
        "Giáo trình Kinh tế lượng: 60,000 VND",
        "Bài tập Kinh tế lượng: 25,000 VND",
        "Giảm giá: -1,000 VND"
      ]
    }
  }
};

// Kiểm tra email độc giả
document.getElementById("checkReturn")?.addEventListener("click", () => {
  const email = document.getElementById("readerEmail").value.trim();
  const notification = document.getElementById("notification");
  const slip = document.getElementById("borrowSlip");
  const fineSlip = document.getElementById("fineSlip");

  if (!email) {
    notification.textContent = "Vui lòng nhập email độc giả!";
    notification.className = "error";
    notification.classList.remove("hidden");
    slip.classList.add("hidden");
    fineSlip.classList.add("hidden");
    return;
  }

  if (readers[email]) {
    const r = readers[email];
    notification.textContent = "Độc giả hợp lệ!";
    notification.className = "success";
    notification.classList.remove("hidden");

    // Hiển thị phiếu mượn
    document.getElementById("readerName").textContent = r.name;
    document.getElementById("readerId").textContent = r.id;
    document.getElementById("status").textContent = r.status;
    document.getElementById("borrowPeriod").textContent = r.period;

    const list = document.getElementById("borrowBooks");
    list.innerHTML = "";
    r.books.forEach(b => {
      const li = document.createElement("li");
      li.textContent = b;
      list.appendChild(li);
    });

    slip.classList.remove("hidden");
    fineSlip.classList.add("hidden");

    // Nút tạo phiếu phạt
    document.getElementById("createFine")?.addEventListener("click", () => {
      document.getElementById("fineReader").textContent = r.name;
      document.getElementById("fineTotal").textContent = r.fine.total;

      const fineList = document.getElementById("fineDetails");
      fineList.innerHTML = "";
      r.fine.details.forEach(d => {
        const li = document.createElement("li");
        li.textContent = d;
        fineList.appendChild(li);
      });

      fineSlip.classList.remove("hidden");
    });
  } else {
    notification.textContent = "Email độc giả không tồn tại!";
    notification.className = "error";
    notification.classList.remove("hidden");
    slip.classList.add("hidden");
    fineSlip.classList.add("hidden");
  }
});
