const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// Chuyển đổi giao diện
signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

// Xử lý đăng ký
document.querySelector(".sign-up-container form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    let fullName = document.querySelector('.sign-up-container input[placeholder="Họ và Tên"]').value;
    let email = document.querySelector('.sign-up-container input[placeholder="Email"]').value;
    let password = document.querySelector('.sign-up-container input[placeholder="Mật khẩu"]').value;
    let phone = "Chưa cập nhật"; // Mặc định, user có thể cập nhật sau
    let birthDate = "Chưa cập nhật";
    let gender = "Không xác định";

    if (fullName && email && password) {
        let user = { fullName, email, password, phone, birthDate, gender };
        localStorage.setItem("user", JSON.stringify(user));
        alert("Đăng ký thành công! Hãy đăng nhập.");
        container.classList.remove("right-panel-active");
    } else {
        alert("Vui lòng nhập đầy đủ thông tin.");
    }
});

// Xử lý đăng nhập
document.querySelector(".sign-in-container form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    let email = document.querySelector('.sign-in-container input[placeholder="Email"]').value;
    let password = document.querySelector('.sign-in-container input[placeholder="Mật khẩu"]').value;
    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "profile.html";
    } else {
        alert("Email hoặc mật khẩu không đúng.");
    }
});