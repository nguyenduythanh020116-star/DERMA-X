# DERMA-X v2.1.0 — Clinical Decision Support & 3D Interactive Compound Simulation System

## 1. Giới thiệu tổng quan (Overview)
DERMA-X là hệ thống hỗ trợ ra quyết định lâm sàng da liễu chuẩn y khoa thực chứng (Evidence-Based Medicine - EBM), tích hợp cơ sở dữ liệu dược mỹ phẩm chuẩn hóa và trung tâm mô phỏng 3D tương tác giải phẫu bệnh học & động học hợp chất điều trị.

---

## 2. Các nâng cấp & Tính năng nổi bật trong bản phát hành v2.1.0

### A. Cơ sở dữ liệu 100 sản phẩm dược mỹ phẩm chuẩn hóa (100 Verified Clinical Products)
- Bổ sung 20 sản phẩm dưỡng ẩm, phục hồi màng lipid, làm dịu da viêm cơ địa và điều trị chuẩn y khoa từ các thương hiệu hàng đầu: CeraVe, Bioderma, Eucerin, Eau Thermale Avène, Cetaphil, Dr.G, Round Lab, Torriden, SKIN1004, COSRX, Purito, Etude, Curél, La Roche-Posay, d'Alba.
- Đầy đủ 26 trường thông tin chuẩn y tế: `stt`, `product_id`, `product_name`, `brand`, `origin`, `category`, `subcategory`, `price_tier`, `price_min`, `price_max`, `price_raw`, `key_actives`, `formulation_source_type`, `formulation_source_url`, `manufacturer_claim`, `clinical_evidence`, `verified_source_tier`, `verification_date`, `data_confidence`, `evidence_level`, `irritation_risk`, `barrier_support`, `inci_breakdown`, `mechanism_of_action`, `comedogenic_index`, `barrier_tolerance`.
- Độ tin cậy dữ liệu cao (Data Confidence: High), phân tầng bằng chứng (Evidence Level: Grade 1A, 1B, 2A RCTs), trích dẫn DOI/PMID chính thức.

### B. Trung tâm mô phỏng 3D động học kép (Dual 3D Interactive Engine)
- **Chế độ 1: Mô hình Giải phẫu Lớp da 3D (3D Skin Anatomy & Pathology)**:
  - Trực quan hóa thời gian thực 5 lớp giải phẫu: Tầng sừng (Stratum Corneum), Thượng bì (Epidermis), Trung bì (Dermis), Tuyến bã nhờn (Sebaceous Gland), Ổ mụn viêm (Lesions).
  - Tự động đồng bộ hóa với dữ liệu khám lâm sàng (điểm IGA, mức độ tổn thương rào cản, ổ viêm).
- **Chế độ 2: Mô phỏng 3D Động học Tương tác Hợp chất (3D Active Compound Interaction Simulator)**:
  - Trực quan hóa 3D va chạm phân tử và đám mây hạt năng lượng giữa 2 hoạt chất điều trị (Adapalene, Tretinoin, BPO, BHA, AHA, Vitamin C, Niacinamide, Azelaic Acid, Panthenol B5, Ceramides, HA).
  - Đổi màu và hiệu ứng phản ứng 3D theo thời gian thực:
    * **Xanh ngọc / Lục (Synergy / Safe)**: Cộng hưởng điều trị, bảo vệ rào cản.
    * **Vàng hổ phách (Caution / Time-spaced)**: Chênh lệch pH, cần thời gian chờ hoặc tách buổi sáng/tối.
    * **Đỏ cảnh báo (Conflict / Antagonism)**: Phân hủy oxy hóa, quá tải bạt sừng, bùng phát kích ứng.
  - Bảng phân tích dược động học, cơ chế phân tử EBM và hướng dẫn kê đơn phân tầng thời gian.

### C. Tinh chỉnh hệ thống thang điểm lâm sàng (Refined Clinical Scoring Scales)
- **Acne IGA (0-4)**: Clear (0), Almost Clear (1), Mild (2), Moderate (3), Severe (4 - Kèm cảnh báo Red Flag & chuyển tuyến).
- **Kiểu hình tổn thương (Lesion Phenotypes)**: Comedones (Ẩn/Đầu đen), Papules (Sẩn viêm), Pustules (Mụn mủ), Nodules (Nốt nang sâu).
- **Phân loại sẹo rỗ (Scarring Types)**: None, Ice-pick, Boxcar, Rolling, Hypertrophic, Keloid.
- **Tình trạng rào cản biểu bì (Barrier Xerosis / Impairment)**: Grade 0 (Bảo tồn), Grade 1 (Nhẹ), Grade 2 (Trung bình), Grade 3 (Suy yếu nặng / TEWL cao).
- **Triệu chứng cơ năng (Sensory Symptoms)**: Châm chích (Stinging), Bong tróc (Flaking), Đỏ rát (Redness/Burning), Căng tức (Tightness).
- **Phân loại da Fitzpatrick (Type I - VI)** và Nguy cơ tăng sắc tố sau viêm (PIH/PIE).
- **Cổng kiểm soát an toàn (Gatekeepers)**: Thai kỳ / Cho con bú (Chống chỉ định Retinoids/HQ), Thói quen kem chống nắng, Cảnh báo đỏ y khoa.

### D. Giữ nguyên cấu trúc và toàn vẹn thẩm mỹ (Preserved Aesthetic UI Architecture)
- Thiết kế Pastel Clinical tinh tế (`#FAF7F5`, `#4A3B36`, `#D97768`, `#2D6A4F`, `#F0A8A0`, `#EBF6F0`).
- Giao diện 5 Tabs điều hướng liền mạch, hỗ trợ phản hồi mượt mà trên cả máy tính và thiết bị di động.
- Tính năng xuất hồ sơ bệnh án định dạng Y khoa chuẩn (Text & JSON).

---

## 3. Cấu trúc thư mục (File Structure)
```
DERMA-X-v0.7.0-Aesthetic-Redesign/
├── index.html                           # Ứng dụng Web hoàn chỉnh (Standalone SPA)
├── server.js                            # Local Web Server (Node.js Express / HTTP)
├── package.json                         # Node package configuration
├── start.bat                            # Script khởi chạy nhanh trên Windows
├── start.command                        # Script khởi chạy nhanh trên macOS / Linux
├── DATA_DICTIONARY.md                   # Từ điển dữ liệu chuẩn hóa 26 cột
├── CLINICAL_ARCHITECTURE.md             # Tài liệu kiến trúc lâm sàng & thuật toán EBM
├── 3D_VISUALIZATION_ARCHITECTURE.md     # Tài liệu kiến trúc mô phỏng 3D WebGL
├── README.md                            # Hướng dẫn sử dụng & thông số phát hành
├── product_database.json                # Cơ sở dữ liệu 100 sản phẩm (JSON)
├── product_database.csv                 # Cơ sở dữ liệu 100 sản phẩm (CSV)
└── data/
    └── products.json                    # File dữ liệu runtime cho ứng dụng
```

---

## 4. Hướng dẫn khởi chạy (Getting Started)
1. **Chạy trực tiếp (Không cần cài đặt)**:
   - Mở trực tiếp file `index.html` bằng bất kỳ trình duyệt web hiện đại nào (Chrome, Safari, Edge, Firefox).
2. **Khởi chạy qua Local Server**:
   - Chạy file `start.bat` (Windows) hoặc `start.command` (macOS).
   - Hoặc mở terminal và gõ: `node server.js` rồi truy cập `http://localhost:3000`.

---
*Bản quyền y khoa & phát triển kiến trúc lâm sàng © 2026 DERMA-X Team.*
