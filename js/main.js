document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const usernameField = document.getElementById("username");
  const passwordField = document.getElementById("password");
  const roleSelect = document.getElementById("role");
  const forgotPasswordLink = document.querySelector(".forgot-password");
  const loginButton = document.querySelector(".btn-login");

  // Lắng nghe sự kiện submit form
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn chặn form tự động submit

    const username = usernameField.value.trim();
    const password = passwordField.value.trim();
    const role = roleSelect.value;

    // Kiểm tra thông tin tài khoản và mật khẩu
    if (!username || !password || !role) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    // Kiểm tra tài khoản, mật khẩu và vai trò
    if (role === "admin") {
      if (username !== "" && password !== "") {
        alert("Đăng nhập thành công với vai trò Quản trị viên!");
        // Redirect tới trang admin
        window.location.href = "admin/index.html";
      } else {
        alert("Thông tin đăng nhập không đúng!");
      }
    } else if (role === "employee") {
      if (username !== "" && password !== "") {
        alert("Đăng nhập thành công với vai trò Nhân viên!");
        // Redirect tới trang nhân viên
        window.location.href = "employee/index.html";
      } else {
        alert("Thông tin đăng nhập không đúng!");
      }
    }
  });

  // Xử lý sự kiện quên mật khẩu
  forgotPasswordLink.addEventListener("click", function (e) {
    e.preventDefault();
    const email = prompt("Vui lòng nhập email của bạn để lấy lại mật khẩu:");

    if (email) {
      alert(`Một email khôi phục mật khẩu đã được gửi tới ${email}`);
      // Ở đây có thể thực hiện gửi yêu cầu tới server để reset mật khẩu
    }
  });
});

showAdd = false;

openAddModal = function () {
  this.showAdd = true;
};

closeAddModal = function () {
  this.showAdd = false;
};
