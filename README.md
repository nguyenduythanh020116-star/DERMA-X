# 🐱 DERMA-X — Hệ Thống Đánh Giá Phác Đồ Da Liễu & Mô Phỏng 3D Dược Lý Lâm Sàng

> **Phiên bản Gold Standard v0.7.7:** Bảo tồn 100% cấu trúc và nhận diện giao diện gốc (Aesthetic Cat Theme, Bảng màu ấm `#FAF8F5`, `#E09F95`, `#8EBA9F`, `#C85A5A`), mở rộng cơ sở dữ liệu lên **100 sản phẩm** kiểm chứng lâm sàng và tích hợp **Công cụ mô phỏng 3D tương tác hợp chất & màng biểu bì** (Three.js WebGL).

---

## 🌟 1. Tổng Quan Cấu Trúc Giao Diện (Bảo Tồn 100% Giao Diện Gốc)

Hệ thống duy trì nguyên bản 4 bước khám & điều trị chuyên khoa da liễu:

1. **Bước 1: Khám lâm sàng & Thiết lập phác đồ (`tab-eval`) 🐱**
   - **Module 1:** Thông tin bệnh nhân, tuổi, giới tính, thai kỳ/cho con bú, thói quen chống nắng, bệnh lý nền & ngân sách.
   - **Module 2:** Kiểu hình da (tiết bã, mức độ nhạy cảm, độ toàn vẹn hàng rào, mức độ mụn, thâm PIH/nám) & môi trường (nhiệt độ, độ ẩm, chỉ số UV).
   - **Module 3:** Hoạt chất trong routine hiện tại (Retinoids, Phục hồi & Lipid, Bạt sừng & Trị mụn).
   - **Module 4:** Mô phỏng bổ sung hoạt chất mới, báo cáo biện luận cơ chế dược lý & **Mô phỏng 3D tương tác phân tử/lớp sừng (Three.js WebGL)**.
2. **Bước 2: Phác đồ điều trị (`tab-home`) 📋**
   - Bảng điểm lâm sàng 4 chỉ số (Toàn vẹn hàng rào da, Tải trọng bạt sừng, Chỉ số kích ứng, Cân bằng phác đồ).
   - Cảnh báo tương kỵ & chống chỉ định y khoa (Bằng chứng JAAD / BAD Level A/B).
   - Phác đồ cá nhân hóa Sáng (AM) / Tối (PM) với các bước chăm sóc và sản phẩm tương thích.
3. **Bước 3: Cơ sở dữ liệu 100 sản phẩm (`tab-prod`) 📦**
   - Banner mục tiêu cá nhân hóa & Top 5 khuyến cáo ưu tiên.
   - Danh mục 100 sản phẩm dược mỹ phẩm kiểm chứng đầy đủ INCI, cơ chế, rủi ro kích ứng, giá gọn gàng.
   - Bộ lọc chuyên khoa theo danh mục (Làm sạch, Khóa ẩm, Serum, KCN, Kê đơn Rx) và ô tìm kiếm thông minh.
   - Modal tra cứu chi tiết thành phần & bằng chứng y khoa.
4. **Bước 4: Kiến thức lâm sàng (`tab-know`) 📚**
   - Từ điển dược lý màng lọc quang học Mexoryl 400, Tinosorb, Kẽm Oxide.
   - Cơ chế hoạt chất bạt sừng, Retinoids thế hệ 1-3, Dicarboxylic acid, Vitamin C và phục hồi màng lipid.

---

## 🔬 2. Tính Năng Mô Phỏng 3D Tương Tác Giữa Các Hợp Chất (Mới)

Tích hợp trực tiếp bên trong **Module 4 (Bước 1)** bằng công nghệ WebGL Three.js:
- **Chế độ Lớp Sừng (Stratum Corneum & Lipid Matrix):** Mô phỏng cấu trúc "gạch - vữa" sinh học của các phiến sừng Corneocyte và màng lipid kép (Ceramides : Cholesterol : Acid béo), chuyển động xuyên thấu của phân tử hoạt chất và xung cảnh báo khi quá tải bạt sừng.
- **Chế độ Cấu Trúc Phân Tử 3D (Molecular Ball-and-Stick):** Mô hình không gian 3D của các hoạt chất (AHA Glycolic, BHA Salicylic, Adapalene, Tretinoin, Azelaic Acid, BPO, Vit C, Ceramide), hiển thị liên kết cộng hóa trị, tương tác đồng vận (xanh ngọc) hoặc xung đột tĩnh điện/pH (đỏ cam).
- **Chế độ Thụ Thể Đích (Receptor Docking):** Mô phỏng túi liên kết protein thụ thể nhân tế bào RAR-gamma và thụ thể cảm giác đau TRPV1 khi hoạt chất tiếp cận.
- **HUD Chỉ Số Dược Động Học Thời Gian Thực:** Hiển thị lưu lượng thấm (Flux rate), độ pH tối ưu, độ sâu thâm nhập biểu bì và cảnh báo kích ứng tương tác.

---

## 📊 3. Cơ Sở Dữ Liệu 100 Sản Phẩm Chuẩn Hóa

Toàn bộ 100 sản phẩm trong hệ thống đã được đồng bộ chuẩn định dạng:
- Đầy đủ thông tin: ID, Tên chuẩn, Hãng, Xuất xứ, Danh mục, Phân khúc giá (min-max VND gọn gàng), Hoạt chất chính, Nguồn dữ liệu chính thức, Bằng chứng lâm sàng Level A/B, Chỉ số kích ứng, Cơ chế tác động.
- Xuất dữ liệu đa định dạng: `index.html` (giao diện tương tác), `product_database.json`, `product_database.csv`, `data/products.json`.

---

## 🚀 4. Hướng Dẫn Khởi Chạy Nhanh

- **Cách 1 (Trực tiếp):** Mở file `index.html` trên bất kỳ trình duyệt web hiện đại nào (Chrome, Safari, Edge, Firefox).
- **Cách 2 (Local Server):**
  ```bash
  npm start
  # hoặc: node server.js
  # Truy cập: http://localhost:3000
  ```
- **Trên Windows:** Nhấp đúp vào `start.bat`
- **Trên macOS / Linux:** Nhấp đúp vào `start.command`

---
*© 2026 DERMA-X Clinical System. Thiết kế chuyên sâu cho Bác sĩ Da liễu & Chuyên viên Thẩm mỹ.*
