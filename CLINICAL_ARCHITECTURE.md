# DERMA-X v2.0 — Clinical-First Scoring & Decision Support Architecture

**Phiên bản Thuật toán:** `DERMAX-CLINICAL-v2.0`  
**Tiêu chuẩn Y học:** Evidence-Based Medicine (EBM) Hierarchy (Level A – F)

---

## 1. Triết Lý Cốt Lõi (Core Principles)
Hệ thống tính điểm của DERMA-X tuân thủ nghiêm ngặt nguyên tắc **Clinical-First**:
```
USER INPUT
    ↓
CLINICAL ASSESSMENT (Đánh giá Lâm sàng Chuẩn hóa)
    ↓
STANDARDIZED CLINICAL CRITERIA (IGA, NRS, Phân loại Rào cản)
    ↓
CLINICAL PHENOTYPE (Kiểu hình Lâm sàng Đa chiều)
    ↓
3D VISUALIZATION ENGINE (Mô hình Da 3D Động Tương tác)
    ↓
RISK ENGINE (Mô hình Nguy cơ Kích ứng, Tải trọng & Nhạy cảm Quang học)
    ↓
RULE ENGINE (Quy tắc Lâm sàng Minh bạch theo Phân tầng Bằng chứng EBM)
    ↓
PERSONALIZED REGIMEN (Phác đồ Cá nhân hóa AM / PM)
    ↓
AI EXPLANATION (Trí tuệ Nhân tạo Diễn giải Sinh học)
```

> **TUYỆT ĐỐI KHÔNG SỬ DỤNG:**
> - Điểm số tổng quát giả tạo kiểu `Skin Health: 78/100` hoặc `skinScore += acne * 30`.
> - Trọng số tùy tiện không có cơ sở y văn.
> - LLM/AI tự ý bịa đặt điểm số bệnh lý hoặc kiểm soát trực tiếp giải phẫu học.

---

## 2. Các Phân Hệ Lâm Sàng Độc Lập (Standardized Clinical Domains)

### 2.1. Phân hệ Mụn trứng cá (Acne Module — IGA Scale)
- **Investigator's Global Assessment (IGA):**
  - `IGA 0 (Clear)`: Sạch mụn hoàn toàn, không có nhân mụn hoặc sẩn viêm.
  - `IGA 1 (Almost Clear)`: Gần như sạch, một vài nhân mụn rải rác, < 2 sẩn viêm nhỏ.
  - `IGA 2 (Mild)`: Mụn mức độ nhẹ, nhiều nhân mụn, vài sẩn viêm nông.
  - `IGA 3 (Moderate)`: Mụn viêm mức độ trung bình, nhiều sẩn mủ viêm, <= 1 nốt nang.
  - `IGA 4 (Severe)`: Mụn rất nặng, nhiều nốt nang bọc sâu, nguy cơ sẹo vĩnh viễn (Chỉ định chuyển tuyến).
- **Kiểu hình tổn thương cơ bản:** Comedones (Ẩn/Đầu đen), Papules (Sẩn viêm), Pustules (Mụn mủ), Nodules/Cysts (Nốt nang sâu).
- **Biến dạng sẹo:** Sẹo lõm Atrophic (Ice-pick, Boxcar, Rolling), Sẹo phì đại (Hypertrophic), Sẹo lồi (Keloid).

### 2.2. Phân hệ Hàng rào & Khô da (Barrier / Xerosis Module)
- **Phân loại cấp độ:** `Normal` | `Mild Impairment` | `Moderate Impairment` | `Severe Impairment`.
- **Dấu hiệu lâm sàng:** Châm chích khi bôi (Stinging), tróc vảy (Flaking), căng tức (Tightness), nóng rát (Burning).
- **Nguyên tắc:** Không suy diễn số liệu mất nước qua biểu bì (TEWL) khi chưa đo bằng thiết bị chuyên dụng tại phòng khám.

### 2.3. Phân hệ Viêm Da (Inflammation Module)
- **Phân loại:** `None` | `Mild` | `Moderate` | `Severe`.
- Dựa trên mức độ hồng ban cục bộ/lan tỏa, giãn vi mạch máu nông, cảm giác nóng rát và phù nề mô.

### 2.4. Phân hệ Cảm giác Ngứa (Pruritus Module — Numerical Rating Scale NRS)
- **Thang điểm:** `NRS 0–10` (0: Không ngứa, 10: Ngứa dữ dội không thể chịu đựng).
- Khi NRS >= 4, kích hoạt quy tắc bổ sung hoạt chất làm dịu thần kinh cảm giác (Colloidal Oatmeal, Madecassoside, PEA).

### 2.5. Phân hệ Sắc tố (Pigmentation Phenotype Module)
- Phân loại kiểu hình: `PIE (Hồng ban sau viêm)`, `PIH (Tăng sắc tố sau viêm)`, `Melasma (Nám má)`, `Solar Lentigines (Tàn nhang)`, `Màu da không đồng đều`.

### 2.6. Phân hệ Tác nhân Môi trường (Environmental Stress)
- Đánh giá chỉ số UV (1–12), nhiệt độ cao, độ ẩm thấp, ô nhiễm không khí và thói quen đeo khẩu trang.

---

## 3. Động Cơ Phân Tích Nguy Cơ (Treatment Risk Engine)
- **Irritation Risk (Nguy cơ kích ứng):** `LOW` | `MODERATE` | `HIGH` | `VERY_HIGH`.
- **Barrier Burden (Tải trọng rào cản):** Đánh giá tổng tần suất và cường độ của các hoạt chất bạt sừng (Retinoids, AHA, BHA, BPO).
- **Photosensitivity Risk (Nhạy cảm quang học):** Tính toán từ chỉ số UV môi trường, thói quen chống nắng và các hoạt chất nhạy cảm (Retinoid, Doxycycline).
- **Interaction Risk (Tương tác hoạt chất):** Cảnh báo khi dùng đồng thời >= 2 nhóm bạt sừng mạnh trong cùng một buổi.

---

## 4. Phân Tầng Bằng Chứng Y Học (Evidence Hierarchy A–F)
- **LEVEL A:** Hướng dẫn thực hành lâm sàng của hiệp hội da liễu uy tín (JAAD 2024, AAD, EDF, BAD).
- **LEVEL B:** Tổng quan hệ thống & Phân tích gộp (Cochrane, JAMA Dermatology).
- **LEVEL C:** Thử nghiệm lâm sàng ngẫu nhiên có đối chứng chất lượng cao (RCTs).
- **LEVEL D:** Nghiên cứu quan sát dọc thuần tập (Cohort).
- **LEVEL E:** Đồng thuận hội đồng chuyên gia quốc tế (Expert Consensus).
- **LEVEL F:** Giả thuyết AI tạo ra (Tuyệt đối không được phép ghi đè Level A–E).

---

## 5. Cảnh Báo Đỏ & Chuyển Tuyến Chuyên Khoa (Red Flags Engine)
- Ban da lan nhanh trong 24–48h, phù nề mặt/mi mắt cấp tính, loét niêm mạc, bóng nước, bội nhiễm vảy vàng chảy mủ, sốt toàn thân, mụn bọc nang nặng IGA 4.
- **Hành động:** Ưu tiên hướng dẫn thăm khám bác sĩ chuyên khoa da liễu trong vòng 24–48 giờ, ngưng toàn bộ hoạt chất treatment lột tẩy.
