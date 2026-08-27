# DERMA-X v2.0 — Interactive Dynamic 3D Skin Visualization Engine

**Engine:** Three.js / WebGL & High-Performance Procedural Shaders  
**Fallback:** HTML5 Canvas 2D Anatomical Cross-Section Renderer  
**Nguyên tắc:** Animation và biến dạng 3D được điều khiển 100% bằng **Biến số Lâm sàng Chuẩn hóa**, không để AI tự bịa đặt hình ảnh bệnh lý.

---

## 1. Cấu Trúc Giải Phẫu 3D (Anatomical Skin Layers)
Mô hình cắt lớp giải phẫu da 3D thể hiện trực quan 8 tầng cấu trúc:
1. **Lớp sừng & Bề mặt da (Stratum Corneum):** Lưới đa giác tế bào sừng với biến dạng đỉnh (Vertex Displacement) mô phỏng sẹo rỗ thật.
2. **Thượng bì sống (Viable Epidermis):** Lớp hạt, lớp gai, lớp đáy giàu tế bào sừng và tế bào hắc tố Melanocytes.
3. **Trung bì & Mạng lưới Collagen (Dermis & ECM):** Bó sợi Collagen Type I/III, Elastin và chất nền ngoại bào.
4. **Nang lông & Thân lông (Hair Follicle & Shaft):** Phễu nang lông chứa nút sừng mụn ẩn (Comedone plug) hoặc sẩn viêm mủ.
5. **Tuyến bã nhờn đa thùy (Sebaceous Glands):** Thùy tuyến bã kết nối với phễu nang lông, tự động phì đại và phát xung nhịp khi điểm Sebum = HIGH.
6. **Mạng lưới mao mạch bì nông & sâu (Micro-Vasculature):** Quai mao mạch nhú bì, tự động giãn mạch và phát ánh sáng hồng ban (Erythema Glow) khi viêm da.
7. **Tuyến mồ hôi ngoại tiết (Eccrine Sweat Glands):** Ống cuộn sâu trung bì với ống dẫn xoắn ốc lên bề mặt da.
8. **Hạ bì mô mỡ (Subcutaneous Adipose Fat):** Cụm tế bào mỡ hình cầu màu vàng giữ nhiệt và nâng đỡ cơ học.

---

## 2. Hệ Thống Hạt Động (Dynamic Particle Systems)
- **Hạt Lipid Sebum:** Các giọt lipid màu vàng phát sáng di chuyển từ tuyến bã nhờn theo ống dẫn nang lông lên bề mặt da.
- **Hạt Thoát ẩm TEWL (Transepidermal Water Loss):** Các phân tử hơi nước màu xanh cyan bốc hơi thoát qua lớp sừng bị đứt gãy (Minh họa nguy cơ mất nước giáo dục).
- **Hạt Dị nguyên Môi trường:** Các vi hạt bụi mịn và chất ô nhiễm lơ lửng tiếp xúc bề mặt da.

---

## 3. Biến Dạng Sẹo 3D Thật (3D Real Vertex Deformation)
- **Sẹo lõm đáy nhọn (Ice-pick atrophic scar):** Vết lõm sâu dạng hình chữ V dốc đứng.
- **Sẹo lõm đáy vuông (Boxcar atrophic scar):** Vết lõm thành dựng đứng, đáy phẳng.
- **Sẹo lõm lượn sóng (Rolling atrophic scar):** Vùng trũng lượn sóng mềm mại rộng > 4mm.
- **Sẹo phì đại (Hypertrophic scar):** Mô sợi trung bì nhô cao trong giới hạn vết thương.
- **Sẹo lồi (Keloid scar):** Khối u sợi collagen gồ cao phát triển vượt ra ngoài ranh giới tổn thương ban đầu.

---

## 4. Tương Tác & Điều Khiển
- **OrbitControls 360°:** Xoay tự do mọi góc nhìn, thu phóng (Zoom), dịch chuyển (Pan), đặt lại camera.
- **Chế độ So Sánh Đối Chứng (Comparison Slider):** Nửa trái hiển thị Da Chuẩn Tham Chiếu (Healthy Baseline), Nửa phải hiển thị Kiểu Hình Ca Bệnh Hiện Tại.
- **Trình Khám Phá Lớp (Layer Explorer):** Bật/tắt hiển thị độc lập từng lớp giải phẫu.
- **Thanh Giả Lập Diễn Tiến (Simulation Timeline):** Quan sát mô phỏng phục hồi mô từ Hiện tại ➔ Tuần 2 ➔ Tuần 4 ➔ Tuần 8 ➔ Tuần 12.
