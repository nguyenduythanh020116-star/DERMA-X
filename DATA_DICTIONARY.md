# DERMA-X Product Database & Clinical Entities — Data Dictionary (v2.0 Schema)

## 1. Danh Mục Biến Số Lâm Sàng (Clinical Variables)

| Tên biến số | Kiểu dữ liệu | Giá trị hợp lệ | Định nghĩa Y khoa |
| :--- | :--- | :--- | :--- |
| `acne_iga` | Integer | `0, 1, 2, 3, 4` | Thang điểm đánh giá mụn toàn cầu IGA (JAAD Criteria). |
| `fitzpatrick` | Integer | `1, 2, 3, 4, 5, 6` | Phân loại tuýp da theo Fitzpatrick (Độ nhạy cảm ánh sáng & sắc tố). |
| `barrier` | String | `normal, mild, moderate, severe` | Cấp độ toàn vẹn hàng rào lipid biểu bì (Stratum Corneum). |
| `symptoms` | Array[String] | `stinging, flaking, tightness, burning` | Triệu chứng cơ năng suy yếu hàng rào. |
| `phenotypes` | Array[String] | `comedonal, papular, pustular, nodular` | Kiểu hình tổn thương mụn cơ bản. |
| `scarring_type` | String | `none, atrophic_icepick, atrophic_boxcar, atrophic_rolling, hypertrophic, keloid` | Biến dạng sẹo thực thể. |
| `pregnancy` | String | `none, pregnant, lactation, planning` | Trạng thái thai kỳ & cho con bú (Gatekeeper an toàn). |
| `actives` | Array[String] | `adapalene, bha, aha, bpo, azelaic, tretinoin, retinol, vit_c...` | Hoạt chất đang sử dụng trong chu trình hiện tại. |
| `red_flags` | Array[String] | `acute_rash, systemic_fever, mucosal_ulcer, nodulocystic_rapid...` | Dấu hiệu cảnh báo đỏ y khoa. |

---

## 2. Cấu Trúc Trường Cơ Sở Dữ Liệu Sản Phẩm (26 Trường Chuẩn Hóa)

| STT | Tên Trường (Field) | Kiểu Dữ Liệu | Mô Tả & Tiêu Chuẩn Lâm Sàng |
| :--- | :--- | :--- | :--- |
| 1 | `stt` | String | Số thứ tự định danh sản phẩm (1 – 80). |
| 2 | `product_id` | String | Mã định danh duy nhất (VD: `BIODERMA_SENSIBIO_H2O`). |
| 3 | `product_name` | String | Tên thương mại chính xác của sản phẩm. |
| 4 | `brand` | String | Thương hiệu sản xuất. |
| 5 | `origin` | String | Quốc gia xuất xứ (Pháp, Mỹ, Hàn Quốc, Đức...). |
| 6 | `category` | String | Phân loại chính (Cleanser, Treatment, Moisturizer, Sunscreen). |
| 7 | `subcategory` | String | Phân nhóm chi tiết (Micellar Water, Gel Cleanser, BHA Liquid...). |
| 8 | `price_tier` | String | Phân khúc giá (Drugstore, Dermocosmetics, High-end, Prescription). |
| 9 | `price_min` | String | Giá tối thiểu tham khảo tại thị trường Việt Nam (VNĐ). |
| 10 | `price_max` | String | Giá tối đa tham khảo tại thị trường Việt Nam (VNĐ). |
| 11 | `price_raw` | String | Chuỗi hiển thị dung tích & mức giá đầy đủ. |
| 12 | `key_actives` | String | Danh sách hoạt chất chính kèm nồng độ định lượng. |
| 13 | `formulation_source_type`| String | Nguồn trích xuất công thức (Brand Dossier, SmPC, CosIng, FDA). |
| 14 | `formulation_source_url` | String | Link tham chiếu nguồn công thức hoặc đơn vị phân phối. |
| 15 | `manufacturer_claim` | String | Tuyên bố hiệu quả chính thức từ nhà sản xuất. |
| 16 | `clinical_evidence` | String | Dữ liệu thử nghiệm lâm sàng In Vivo / In Vitro có đối chứng. |
| 17 | `verified_source_tier` | String | Phân tầng nguồn chứng cứ (Tier 1, Tier 2, Tier 3). |
| 18 | `verification_date` | String | Ngày kiểm định dữ liệu (YYYY-MM-DD). |
| 19 | `data_confidence` | String | Thang điểm tin cậy dữ liệu (High, Medium, Low). |
| 20 | `evidence_level` | String | Cấp bậc bằng chứng lâm sàng (Level A, B, C, D). |
| 21 | `irritation_risk` | String | Mức độ nguy cơ kích ứng (Low, Medium, High). |
| 22 | `barrier_support` | String | Khả năng hỗ trợ & phục hồi hàng rào lipid (High, Medium, Low). |
| 23 | `inci_breakdown` | String | **[MỚI]** Phân tích hệ nền, chất hoạt động bề mặt & hệ bảo quản. |
| 24 | `mechanism_of_action` | String | **[MỚI]** Cơ chế tác động dược lý tế bào và lâm sàng (MoA). |
| 25 | `comedogenic_index` | Integer | **[MỚI]** Chỉ số bít tắc lỗ chân lông (Thang 0 – 5). |
| 26 | `barrier_tolerance` | String | **[MỚI]** Mức độ dung nạp rào cản sinh học (Cao / Trung bình / Cẩn trọng). |
