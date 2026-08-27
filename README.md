# DERMA-X v2.0 — Hệ Thống Hỗ Trợ Quyết Định Da Liễu & Mô Hình Da 3D Động

**Phiên bản:** `v2.0.0-ClinicalFirst`  
**Thuật toán:** `DERMAX-CLINICAL-v2.0`  
**Giao diện:** Tiếng Việt Chuyên Sâu, Phong Cách Công Nghệ Y Khoa Hiện Đại, Hỗ Trợ Đa Thiết Bị.

---

## 🚀 Tính Năng Nổi Bật

1. **Khung Đánh Giá Lâm Sàng Chuẩn Hóa (Clinical-First Architecture):**
   - Loại bỏ hoàn toàn điểm số tổng quát mơ hồ (`Skin Health: 78/100`).
   - Chuẩn hóa theo các thang đo quốc tế độc lập: **Acne IGA (0–4)**, **Barrier Categorical Impairment**, **Inflammation Grade**, **Itch NRS (0–10)**.
2. **Mô Hình Da 3D Động Tương Tác (3D Interactive Skin Simulator):**
   - Dựng cắt lớp giải phẫu 3D bằng Three.js / WebGL.
   - Cấu trúc giải phẫu (Thượng bì, Trung bì, Tuyến bã, Mạch máu, Sẹo teo lõm) biến đổi trực quan theo đúng biến số lâm sàng.
   - Biến dạng bề mặt 3D thực thể cho sẹo lõm (Ice-pick, Boxcar, Rolling) và sẹo lồi (Keloid).
   - Luồng hạt di chuyển mô phỏng dòng lipid bã nhờn và mất nước qua biểu bì (TEWL).
   - Thanh trượt so sánh đối chứng giữa Da Chuẩn Tham Chiếu và Da Hiện Tại.
3. **Động Cơ Phân Tích Nguy Cơ (Treatment Risk Engine):**
   - Đánh giá nguy cơ kích ứng, tải trọng rào cản, độ nhạy cảm quang học và cảnh báo xung đột hoạt chất.
4. **Hệ Thống Cảnh Báo Đỏ & Chuyển Tuyến (Red Flags Engine):**
   - Nhận diện các dấu hiệu cấp cứu y khoa để ưu tiên chuyển tuyến chuyên khoa da liễu.
5. **Giao Diện Pop-up Tương Tác Cao Cấp (Redesigned Modals):**
   - Chi tiết sản phẩm & phân tích INCI sâu.
   - Xuất hồ sơ ca bệnh lâm sàng (Markdown / JSON / In PDF).
   - Thanh tra quy tắc lâm sàng & phân tầng bằng chứng EBM (Level A–F).
   - Cửa sổ tính thang điểm mở rộng EASI / PASI với thông báo dữ liệu thiếu minh bạch.
   - Thẻ thông tin cấu trúc mô học khi bấm vào các chi tiết giải phẫu 3D.

---

## 💻 Hướng Dẫn Khởi Chạy Cục Bộ (Run Locally)

### Cách 1: Sử dụng Node.js Server
```bash
cd DERMA-X-v0.7.0-Aesthetic-Redesign
node server.js
```
Mở trình duyệt tại: `http://localhost:3000`

### Cách 2: Mở trực tiếp tệp HTML
Mở tệp `index.html` trong bất kỳ trình duyệt web hiện đại nào (Chrome, Safari, Edge, Firefox).

---

## 🧪 Chạy Kiểm Thử Đơn Vị (Unit Tests)
```bash
python3 test_clinical_scoring.py
python3 test_3d_state_mapping.py
```
