# DERMA-X Clinical-First & 3D Skin Engine (Pastel Aesthetic Dermatology Edition v2.0)

Hệ thống hỗ trợ ra quyết định lâm sàng da liễu & thẩm mỹ chuẩn hóa (Clinical Decision Support System - CDSS) kết hợp mô hình giải phẫu da 3D tương tác theo thời gian thực.

---

## 🌸 Các Điểm Cải Tiến & Tái Thiết Kế Toàn Diện trong Bản Pastel v2.0

1. **Giao Diện Pastel Thẩm Mỹ Viện & Phòng Khám Da Liễu Cao Cấp**:
   - Tông màu Pastel sáng dịu, ấm áp và chuyên nghiệp: Nền kem ngà (`#FAF7F5`), thẻ card trắng tinh khôi (`#FFFFFF`) bo góc mềm (`rounded-2xl`), viền ấm (`#F0E6E0`), điểm nhấn hồng phấn san hô (`#F0A8A0` / `#D97768`), xanh sage thảo mộc (`#B8D8C8` / `#2D6A4F`), chữ nâu than ấm (`#4A3B36`).
   - Xóa bỏ hoàn toàn giao diện nền tối (dark navy) kỹ thuật lạnh lẽo.

2. **Dọn Dẹp Thanh Tiêu Đề (Header) Tinh Gọn & Thống Nhất**:
   - Header chỉ giữ lại: Logo DERMA-X + Tagline chuyên môn + Nút **"Làm mới"** và nút hành động chính **"Xuất Hồ Sơ"**.
   - Các nút trùng lặp (Mô hình 3D, Quy tắc EBM, Ca mẫu) đã được chuyển về đúng các tab và phân hệ chức năng tương ứng.

3. **Bộ Icon Outline Vector Hiện Đại (Thay thế 100% Emoji)**:
   - Toàn bộ emoji hệ điều hành đã được thay bằng bộ icon SVG vector outline mềm mại, sắc nét với độ dày nét 1.75px đồng bộ.

4. **Khắc Phục Triệt Để Toàn Bộ Lỗi Tương Tác & Cửa Sổ Pop-up (Modals)**:
   - Sửa lỗi cú pháp JavaScript giúp toàn bộ sự kiện click, chọn thẻ và chuyển tab phản hồi tức thì.
   - **6 Cửa sổ Pop-up (Modals)** hoạt động hoàn hảo:
     1. `Chi tiết dược lý sản phẩm`: Phân tích hoạt chất, nồng độ, hệ nền INCI, cơ chế MoA, chỉ số bít tắc mụn (0–5) và mức độ dung nạp rào cản.
     2. `Xuất hồ sơ lâm sàng`: Xuất báo cáo y khoa chuẩn hóa, Sao chép văn bản, In/Lưu PDF, Tải file JSON (.json).
     3. `Cảnh báo đỏ lâm sàng`: Hướng dẫn phân luồng và chuyển tuyến cấp cứu da liễu.
     4. `Thanh tra quy tắc EBM`: Danh mục 11+ quy tắc lâm sàng thực chứng phân tầng Level A–F.
     5. `Thư viện thang đo chuẩn hóa`: Hướng dẫn lâm sàng chi tiết thang điểm IGA, Fitzpatrick, Barrier TEWL, NRS.
     6. `Cấu trúc mô học 3D`: Giải phẫu vi thể từng lớp biểu bì, trung bì, tuyến bã và ổ mụn viêm.

5. **5 Phân Hệ Điều Hướng Chính (Tabs)**:
   - **Tab 1: Khám lâm sàng & Đánh giá**: Thu thập dữ liệu bệnh nhân, thang điểm IGA 0–4, phân loại Fitzpatrick I–VI, tình trạng rào cản, triệu chứng cơ năng, hoạt chất đang dùng, cảnh báo đỏ và 4 ca lâm sàng mẫu.
   - **Tab 2: Tổng quan & Phác đồ**: Bảng chẩn đoán đa chiều, phác đồ cá thể hóa Sáng (AM) / Tối (PM), mô phỏng bổ sung hoạt chất (What-If Simulation) và cơ sở lý luận da liễu.
   - **Tab 3: Gợi ý sản phẩm y khoa**: Top 5 sản phẩm ưu tiên theo thuật toán lâm sàng + Danh mục 80 dược mỹ phẩm phân loại chi tiết với bộ lọc danh mục và mức giá.
   - **Tab 4: Dược lý & Hướng dẫn EBM**: Thư viện 10+ hoạt chất cốt lõi, ma trận tương tác hoạt chất, phân tầng chứng cứ Level A–F.
   - **Tab 5: Mô hình giải phẫu da 3D**: Mô hình cắt lớp vi thể 3D tương tác xoay 360°, phóng to/thu nhỏ, bật/tắt từng lớp giải phẫu và cắt ngang khối mô.

---

## 🚀 Hướng Dẫn Khởi Chạy

### Cách 1: Mở trực tiếp (Nhanh nhất - Offline 100%)
- Nhấp đúp chuột trực tiếp vào tệp `index.html` trong bất kỳ trình duyệt web hiện đại nào (Google Chrome, Microsoft Edge, Safari, Firefox, Cốc Cốc).

### Cách 2: Chạy qua Node.js Web Server
- Trên **macOS / Linux**: Nhấp đúp vào `start.command` (hoặc chạy lệnh `npm start` trong Terminal).
- Trên **Windows**: Nhấp đúp vào `start.bat`.
- Truy cập trình duyệt tại địa chỉ: `http://localhost:3000` (hoặc `http://localhost:3010`).
