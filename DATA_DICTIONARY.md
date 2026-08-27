# DERMA-X v2.0 — Data Dictionary & Entity Specifications

## 1. Clinical Entities & Variables

| Tên biến số | Kiểu dữ liệu | Giá trị hợp lệ | Định nghĩa y khoa |
| :--- | :--- | :--- | :--- |
| `acne_iga` | Integer | `0, 1, 2, 3, 4` | Thang đo mức độ nặng mụn trứng cá toàn cầu (Investigator's Global Assessment). |
| `phenotypes` | Array<String> | `comedonal, papular, pustular, nodular` | Kiểu hình tổn thương cơ bản quan sát được trên lâm sàng. |
| `scarring_type` | String | `none, atrophic_icepick, atrophic_boxcar, atrophic_rolling, hypertrophic, keloid` | Biến dạng sẹo trung bì thực thể. |
| `barrier` | String | `normal, mild, moderate, severe` | Cấp độ suy yếu tính toàn vẹn của lớp sừng (Stratum Corneum). |
| `inflammation` | String | `none, mild, moderate, severe` | Mức độ phản ứng viêm, hồng ban và giãn vi mạch máu nông. |
| `sebum` | String | `low, normal, moderate, high` | Xu hướng hoạt động và tiết bã nhờn của tuyến bã. |
| `itch_nrs` | Integer | `0 – 10` | Thang đo cường độ cảm giác ngứa (Numerical Rating Scale). |
| `pigment` | String | `none, pie, pih, melasma, lentigines, uneven` | Kiểu hình rối loạn sắc tố hoặc hồng ban mạch máu sau viêm. |
| `uv` | Integer | `1 – 12` | Chỉ số bức xạ cực tím môi trường thực tế. |
| `pregnancy` | String | `none, pregnant, lactation, planning` | Cổng kiểm soát an toàn thai kỳ & cho con bú (Gatekeeper). |
| `medication` | String | `none, iso, doxy, spiro, corticoid_sys` | Thuốc da liễu toàn thân đang điều trị đồng thời. |

---

## 2. Product Database Fields

- `product_id`: Mã định danh sản phẩm duy nhất.
- `product_name`: Tên thương mại chính xác của sản phẩm.
- `brand` & `origin`: Thương hiệu và quốc gia xuất xứ.
- `category` & `subcategory`: Phân nhóm chức năng (Cleanser, Treatment, Moisturizer, Sunscreen).
- `key_actives`: Thành phần hoạt chất chính kèm nồng độ định lượng.
- `inci_breakdown`: Phân tích hệ nền, chất hoạt động bề mặt và hệ bảo quản.
- `mechanism_of_action`: Cơ chế tác động dược lý tế bào (MoA).
- `evidence_level`: Cấp bậc bằng chứng lâm sàng (Level A / B / C / D).
- `comedogenic_index`: Chỉ số gây bít tắc mụn (0–5).
- `barrier_tolerance`: Mức độ dung nạp rào cản sinh học.
