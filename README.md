# DERMA-X Clinical-First & 3D Skin Engine (Pastel Aesthetic Dermatology Edition v2.0)

Hệ thống hỗ trợ ra quyết định lâm sàng da liễu & thẩm mỹ chuẩn hóa (Clinical Decision Support System - CDSS) kết hợp mô hình giải phẫu da 3D tương tác theo thời gian thực.

## 🌸 Tổng quan Bản Redesign Pastel Thẩm Mỹ & Da Liễu
- **Tông màu Pastel Da liễu & Spa Clinic cao cấp**: Thay thế toàn bộ nền tối (dark navy) bằng gam màu pastel sáng, ấm áp và chuyên nghiệp (nền kem ngà `#FAF7F5`, thẻ trắng `#FFFFFF` bo góc mềm `rounded-2xl`, điểm nhấn hồng phấn ấm `#F0A8A0`, xanh sage `#B8D8C8`, chữ nâu than ấm `#4A3B36`).
- **Dọn dẹp Header tinh giản**: Loại bỏ các nút dư thừa trên thanh tiêu đề, tập trung vào 1 nút hành động chính duy nhất **"Xuất Hồ Sơ"** và nút làm mới dữ liệu.
- **Bộ icon outline vector đồng bộ 100%**: Thay thế toàn bộ emoji hệ điều hành bằng bộ icon outline vector hiện đại, nét mảnh mềm mại 1.75px.
- **Sửa lỗi tương tác & Cửa sổ Pop-up (Modals)**:
  - Khắc phục triệt để lỗi cú pháp JavaScript gây tê liệt sự kiện click.
  - 6 Cửa sổ Pop-up (Modal) hoạt động hoàn hảo: Chi tiết dược lý sản phẩm, Xuất hồ sơ lâm sàng, Cảnh báo đỏ y khoa, Thanh tra quy tắc EBM, Thư viện thang đo IGA/Fitzpatrick, Phân tích cấu trúc giải phẫu 3D.
  - Tương tác chọn thẻ (Card selection) mượt mà với hiệu ứng viền/nền active pastel rõ rệt, tự động kích hoạt tính toán điểm chẩn đoán và đồng bộ mô hình 3D.

## 🚀 Hướng dẫn Chạy Ứng Dụng
1. Mở trực tiếp file `index.html` trong bất kỳ trình duyệt web hiện đại nào (Chrome, Edge, Safari, Firefox).
2. Hoặc chạy máy chủ cục bộ:
   ```bash
   node server.js
   # Mở http://localhost:3000
   ```

## 📋 5 Phân Hệ Chức Năng (Tabs)
1. **1. Khám lâm sàng**: Thu thập toàn diện dữ liệu nhân khẩu học, thang điểm mụn IGA (0-4), phân loại da Fitzpatrick (I-VI), tình trạng rào cản biểu bì, triệu chứng cơ năng, hoạt chất đang dùng và cảnh báo đỏ.
2. **2. Tổng quan & Phác đồ**: Bảng chẩn đoán đa chiều, phác đồ điều trị cá thể hóa Sáng (AM) / Tối (PM), tổng hợp cơ sở lý luận da liễu và hướng dẫn phân tầng hoạt chất.
3. **3. Gợi ý sản phẩm**: Danh mục 80+ dược mỹ phẩm phân tích thành phần INCI, kiểm tra chống chỉ định thai kỳ / hỏng rào và đối soát mức độ bằng chứng EBM.
4. **4. Dược lý & EBM**: Thư viện hướng dẫn lâm sàng quốc tế (JAAD 2024, BAD 2023, EDF), ma trận tương tác hoạt chất và thanh tra 11+ quy tắc y khoa thực chứng.
5. **5. Mô hình 3D**: Mô phỏng mặt cắt giải phẫu da 3D (Tầng sừng, Thượng bì, Trung bì, Tuyến bã, Nang lông, Ổ mụn viêm) tương tác xoay 360°, phóng to/thu nhỏ, mặt cắt ngang và thay đổi theo dữ liệu khám lâm sàng.
