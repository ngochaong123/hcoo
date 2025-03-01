document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || localStorage.getItem("loggedIn") !== "true") {
        alert("Bạn cần đăng nhập trước!");
        window.location.href = "login.html"; // Chuyển về trang đăng nhập
        return;
    }

    // Hiển thị thông tin lên profile nếu đã lưu trước đó
    document.getElementById("fullName").value = user.fullName || "";
    document.getElementById("email").value = user.email || "";
    document.getElementById("phone").value = user.phone || "";
    document.getElementById("birthDate").value = user.birthDate || "";
    document.getElementById("passwordInput").value = user.password || "";

    // Hiển thị giới tính
    if (user.gender) {
        document.querySelector(`input[name="gender"][value="${user.gender}"]`).checked = true;
    }
});

function saveProfile() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const birthDate = document.getElementById("birthDate").value;
    const password = document.getElementById("passwordInput").value;
    const gender = document.querySelector("input[name='gender']:checked")?.value || "Khác";

    if (!fullName || !email || !phone || !birthDate || !password) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    const user = { fullName, email, phone, birthDate, password, gender };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("loggedIn", "true");

    alert("Thông tin đã được lưu thành công!");
}
