# DERMA-X v2.0 — Kiến Trúc Hệ Thống Hỗ Trợ Ra Quyết Định Lâm Sàng (Clinical-First CDSS)

**Phiên bản Thuật toán:** `DERMAX-CLINICAL-v2.0`  
**Cơ sở Y học Thực chứng:** Evidence-Based Medicine (EBM) Hierarchy (Level A – F)  
**Hướng dẫn Tham chiếu:** JAAD 2024 (Acne Guidelines), BAD 2023 (Barrier Restoration), EDF, AAD

---

## 1. Triết Lý Cốt Lõi (Core Principles)
Hệ thống tính điểm của DERMA-X tuân thủ nghiêm ngặt nguyên tắc **Clinical-First**:
```
DỮ LIỆU BỆNH NHÂN (User Input)
    ↓
ĐÁNH GIÁ LÂM SÀNG CHUẨN HÓA (Standardized Clinical Assessment)
    ↓
THANG ĐIỂM Y KHOA CHUẨN (IGA 0-4, Fitzpatrick I-VI, Barrier Grades 0-3, NRS 0-10)
    ↓
KIỂU HÌNH BỆNH HỌC ĐA CHIỀU (Multidimensional Clinical Phenotype)
    ↓
ĐỘNG CƠ PHÂN TÍCH NGUY CƠ (Treatment Risk & Photosensitivity Engine)
    ↓
ĐỘNG CƠ QUY TẮC Y HỌC THỰC CHỨNG (EBM Rules Engine Level A–F)
    ↓
PHÁC ĐỒ CÁ THỂ HÓA SÁNG / TỐI (Personalized AM/PM Regimen)
    ↓
DIỄN GIẢI DƯỢC LÝ & ĐỒNG BỘ MÔ HÌNH 3D (Dermatological Rationale & 3D Sync)
```

---

## 2. Các Phân Hệ Lâm Sàng Độc Lập
1. **Thang Điểm Mụn Toàn Cầu IGA (Investigator's Global Assessment):**
   - `IGA 0 (Clear)`: Sạch mụn hoàn toàn, không có tổn thương viêm hoặc không viêm.
   - `IGA 1 (Almost Clear)`: Gần như sạch, một vài nhân mụn rải rác, < 2 sẩn viêm nhỏ.
   - `IGA 2 (Mild)`: Mụn nhẹ, nhiều nhân mụn hở/kín, vài sẩn viêm nông, không có nốt nang.
   - `IGA 3 (Moderate)`: Mụn viêm trung bình, nhiều sẩn mủ viêm, tổn thương rõ rệt, <= 1 nốt nang.
   - `IGA 4 (Severe)`: Mụn viêm rất nặng, dày đặc sẩn mủ và nhiều nốt nang sâu (Ưu tiên chuyển tuyến khám bác sĩ da liễu).
2. **Phân Loại Da Fitzpatrick (Type I – VI):**
   - Đánh giá khả năng nhạy cảm UV, xu hướng cháy nắng / rám nắng và nguy cơ tăng sắc tố sau viêm (PIH/Melasma).
3. **Phân Hệ Hàng Rào Biểu Bì (Epidermal Barrier Integrity):**
   - 4 Cấp độ: `Bảo tồn (Normal)`, `Tổn thương nhẹ (Mild)`, `Tổn thương vừa (Moderate)`, `Suy yếu nặng (Severe)`.
   - Thu thập triệu chứng cơ năng: Châm chích (Stinging), Bong tróc (Flaking), Căng rát (Tightness), Nóng đỏ (Burning).
4. **Cổng An Toàn Thai Kỳ (Pregnancy Gatekeeper):**
   - Loại bỏ 100% dẫn xuất Vitamin A (Retinoids, Tretinoin, Adapalene) và Hydroquinone khi bệnh nhân Mang thai / Cho con bú. Ưu tiên Azelaic Acid 20% và Ceramide 3:1:1.
5. **Cảnh Báo Đỏ Lâm Sàng (Red Flags Engine):**
   - Nhận diện tổn thương mụn bọc nang tiến triển nhanh, ban da lan tỏa cấp tính, sốt toàn thân, bóng nước loét để cảnh báo và hướng dẫn chuyển tuyến chuyên khoa.
