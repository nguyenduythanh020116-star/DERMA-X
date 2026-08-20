# DERMA-X v0.7.0 — Aesthetic & Clinical Decision-Support Studio

Hệ thống hỗ trợ ra quyết định lâm sàng da liễu & mô phỏng tương tác dược học cục bộ (*Local-First Clinical Decision-Support & Simulation Studio*).

---

## Các Điểm Cải Tiến & Tái Cấu Trúc Toàn Diện trong v0.7.0

1. **Giao Diện Thẩm Mỹ Viện Chuẩn Medical-Spa**:
   - Tông màu Pastel thanh lịch: Trắng ngà (`#FAF8F5`), Hồng phấn (`#E09F95`), Xanh mint thảo mộc (`#8EBA9F`), Màu nhấn san hô đất (`#C85A5A`).
   - Font chữ chuẩn hóa `Be Vietnam Pro` hỗ trợ hoàn hảo tiếng Việt có dấu, khoảng cách dòng (line-height) tối ưu cho mắt nhìn.
   - Thẻ thông tin (Cards) bo tròn mềm mại, loại bỏ chi tiết thừa, hiển thị tối ưu trên cả điện thoại (Mobile) lẫn máy tính (Desktop).

2. **Cấu Trúc Tinh Giản 4 Tab Chính (Tối đa 2 cấp điều hướng)**:
   - **Tab 1: Tổng quan (Home)**: Hồ sơ da cá nhân hóa, chỉ số tải kích ứng & sức khỏe hàng rào, thời tiết/UV thực tế, phác đồ Sáng/Tối linh hoạt.
   - **Tab 2: Đánh giá da (Analyze & Simulate)**: Cấu hình kiểu hình da đa trục, thử nghiệm bổ sung hoạt chất mới (*What-If Simulation*), tính toán biến thiên Before/After và đề xuất can thiệp lâm sàng.
   - **Tab 3: Gợi ý sản phẩm (Products & Gatekeeper)**: Cơ sở dữ liệu 80 sản phẩm chuẩn y khoa với bộ lọc an toàn cho da nhạy cảm/thai kỳ, phân loại theo bước dưỡng và ngân sách.
   - **Tab 4: Tra cứu hoạt chất (Knowledge Base)**: Từ điển dược lý 10+ hoạt chất cốt lõi (Adapalene, Tretinoin, AHA, BHA, BPO, Niacinamide, Azelaic Acid, Ceramide...).

3. **Chuẩn Hóa Ngôn Ngữ Y Khoa & Thuần Việt**:
   - Loại bỏ các từ ngữ AI/thuật toán thô ráp.
   - Dùng văn phong phòng khám da liễu cao cấp, gần gũi, đúng thuật ngữ chuyên môn.

4. **Chạy Ngoại Tuyến 100% (Offline-First)**:
   - Nhúng sẵn toàn bộ cơ sở dữ liệu 80 sản phẩm dự phòng bên trong `index.html`. Bạn có thể mở trực tiếp mà không cần cài đặt Node.js hay mở Web Server.

---

## Hướng Dẫn Khởi Chạy

### Cách 1 (Nhanh nhất - Không cần cài đặt):
- Nhấp đúp chuột trực tiếp vào tệp `index.html` trong bất kỳ trình duyệt web nào (Google Chrome, Safari, Microsoft Edge, Firefox).

### Cách 2 (Khởi chạy bằng Node.js Server):
- Trên **macOS / Linux**: Nhấp đúp chuột vào tệp `start.command` (hoặc mở Terminal chạy `npm start`).
- Trên **Windows**: Nhấp đúp chuột vào tệp `start.bat`.
- Truy cập trình duyệt tại địa chỉ: `http://localhost:3010`
