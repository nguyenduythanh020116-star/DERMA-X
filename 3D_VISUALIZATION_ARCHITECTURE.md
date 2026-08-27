# DERMA-X v2.0 — Kiến Trúc Mô Hình Giải Phẫu Da 3D Động Tương Tác (3D Skin Engine)

**Động cơ hiển thị:** Three.js / WebGL với Shaders & Vật liệu Lâm sàng Chuẩn hóa  
**Cơ chế dự phòng (Fallback):** HTML5 Canvas 2D Anatomical Cross-Section Renderer (hoạt động 100% ngoại tuyến)  
**Nguyên tắc Y khoa cốt lõi:** Toàn bộ hoạt ảnh, biến dạng mô học và mật độ tổn thương 3D được điều khiển 100% từ **Biến số Lâm sàng Chuẩn hóa** (IGA, Hàng rào, Fitzpatrick, Kiểu hình tổn thương), tuyệt đối không để AI tạo sinh tự do làm sai lệch kiến thức giải phẫu.

---

## 1. Cấu Trúc Giải Phẫu 3D Phân Tầng (Anatomical Skin Layers)
Mô hình cắt lớp 3D của DERMA-X tái hiện trực quan 8 tầng cấu trúc vi thể:
1. **Lớp Sừng & Màng Lipid Biểu Bì (Stratum Corneum):** Lưới đa giác tế bào sừng (Corneocytes) xếp lớp cùng phiến lipid gian bào (Ceramide:Cholesterol:Acid béo 3:1:1), ngăn mất nước qua biểu bì (TEWL).
2. **Thượng Bì Sống (Viable Epidermis):** Lớp hạt, lớp gai, lớp đáy với tế bào sừng phân chia và tế bào hắc tố (Melanocytes) quyết định màu da theo phân loại Fitzpatrick I–VI.
3. **Trung Bì & Khung Đỡ Ngoại Bào (Dermis & ECM):** Bó sợi Collagen Type I/III, Elastin và chất nền ngoại bào (Hyaluronic Acid, Proteoglycans).
4. **Đơn Vị Nang Lông - Thân Lông (Pilosebaceous Unit):** Phễu nang lông chứa nút sừng vi thể (Microcomedone), mụn đầu đen/trắng hoặc sẩn viêm mủ.
5. **Tuyến Bã Nhờn Đa Thùy (Sebaceous Glands):** Tuyến bã tiết lipid bảo vệ, phì đại và tăng tiết bã nhờn khi điểm Sebum tăng.
6. **Mạng Lưới Mao Mạch Bì Nông & Sâu (Micro-Vasculature):** Quai mao mạch nhú bì giãn nở và phát quang hồng ban (Erythema Glow) khi có phản ứng viêm da.
7. **Tuyến Mồ Hôi Ngoại Tiết (Eccrine Sweat Glands):** Ống cuộn sâu hạ bì dẫn lên bề mặt điều hòa nhiệt.
8. **Hạ Bì Mô Mỡ (Subcutaneous Adipose Fat):** Cụm tế bào mỡ đệm cơ học và giữ nhiệt.

---

## 2. Hệ Thống Tương Tác & Điều Khiển 3D
- **OrbitControls 360°:** Xoay tự do mọi góc độ, thu phóng (Zoom), dịch chuyển (Pan), phím đặt lại góc nhìn chuẩn (`reset3DCamera()`).
- **Bật/Tắt Từng Tầng Giải Phẫu (Layer Toggles):** Bật/tắt độc lập Tầng sừng (Corneum), Thượng bì (Epidermis), Trung bì (Dermis), Tuyến bã (Sebaceous), và Ổ mụn viêm (Lesions).
- **Mặt Cắt Giải Phẫu (Anatomical Cut Plane):** Cắt dọc khối mô để quan sát sâu bên trong nang lông và mạch máu bì.
- **Cửa Sổ Tra Cứu Mô Học 3D (Histology Modal):** Nhấp vào các thẻ tầng giải phẫu để xem chi tiết sinh lý học, trạng thái ca bệnh hiện tại và hoạt chất điều trị mục tiêu.
