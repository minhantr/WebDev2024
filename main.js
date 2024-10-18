document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('header').innerHTML = `
        <div class="nav-container">
            <nav>
                <ul>
                    <li><a href="index.html">Trang chủ</a></li>
                    <li><a href="search-results.html">Tìm kiếm</a></li>
                    <li><a href="bookings-management.html">Quản lý đặt chỗ</a></li>
                    <li><a href="login-register.html">Đăng nhập/Đăng ký</a></li>
                </ul>
            </nav>
        </div>
    `;
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('footer').innerHTML = `
        <div class="container">
            <div class ="footer-section">
                <h3>Về Travel Booking</h3>
                <ul>
                    <li><a href="#">Cách Đặt Chỗ</li>
                    <li><a href="#">Liên Hệ Chúng Tôi</li>
                    <li><a href="#">Trợ Giúp</li>
                    <li><a href="#">Về Chúng Tôi</li>
                </ul>
            </div>
            <div class ="footer-section">
                <h3>Dịch Vụ</h3>
                <ul>
                    <li><a href="#">Khách Sạn</li>
                    <li><a href="#">Vé Máy Bay</li>
                    <li><a href="#">Vé Xe Khách</li>
                    <li><a href="#">Đưa Đón Sân Bay</li>
                    <li><a href="#">Cho Thuê Xe</li>
                    <li><a href="#">Du Thuyền</li>
                    <li><a href="#">Biệt Thự</li>
                    <li><a href="#">Căn Hộ</li>
                </ul>
            </div>
        </div>
        <p class ="copyright-symbol">&copy; 2024 TravelBooking. All rights reserved.</p>
    `
})