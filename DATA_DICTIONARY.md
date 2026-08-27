# DERMA-X Product Database — Data Dictionary (v0.6.0 Schema)

## 1. Mục Đích & Nguyên Tắc Phương Pháp Luận
Cơ sở dữ liệu sản phẩm của DERMA-X được thiết kế cho hệ thống hỗ trợ ra quyết định lâm sàng da liễu (*Clinical Decision-Support System*), tuân thủ các nguyên tắc y khoa khắt khe:
- **Tách biệt cấp độ chứng cứ (*Evidence Separation*)**: Phân biệt tuyệt đối giữa chứng cứ cho hoạt chất (*ingredient-level*) và thử nghiệm lâm sàng trên thành phẩm thương mại (*product-level*).
- **Phân tầng dữ liệu thật (*Data Confidence Tiering*)**: Không tự động gán nhãn "High", đánh giá dựa trên tiêu chí nguồn có DOI/PMID và nồng độ công bố chính thức.
- **Nguồn dữ liệu xác thực (*Verified Source Hierarchy*)**:
  - **Tier 1 (High)**: FDA NDA, EMA SmPC, thử nghiệm lâm sàng đối chứng ngẫu nhiên (RCT) có DOI/PMID, dược điển / nhãn thuốc chính thức.
  - **Tier 2 (Medium)**: Hồ sơ công bố chính thức của hãng (*Brand Dossier*), cơ sở dữ liệu CosIng (EU), INCI chính ngạch.
  - **Tier 3 (Low)**: Nhãn bao bì bán lẻ (*Retail description*), tuyên bố tiếp thị chưa kiểm chứng (*unverified: true*).
- **Chống bịa số liệu (*No Speculation Principle*)**: Nếu nồng độ hoạt chất không được công bố chính thức trong hồ sơ/nhãn thuốc, bắt buộc ghi .

---

## 2. Cấu Trúc Trường Dữ Liệu (Schema Definition)

| Tên Trường (Field) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả & Tiêu Chuẩn Lâm Sàng |
| :--- | :--- | :--- | :--- |
|  | Integer | Có | Số thứ tự định danh trong database. |
|  | String | Có | Mã định danh duy nhất (VD: ). |
|  | String | Có | Tên thương mại đầy đủ của sản phẩm. |
|  | String | Có | Thương hiệu sản xuất & tập đoàn chủ quản. |
|  | String | Có | Xuất xứ / Quốc gia sản xuất. |
|  | String | Có | Phân loại chính: , , , , , . |
|  | String | Có | Phân loại chi tiết (Micellar Water, Barrier Cream, Prescription Retinoid...). |
|  | String | Có | 4 Phân khúc giá: , , , . |
|  /  | Integer | Có | Khoảng giá tham khảo tại thị trường Việt Nam (VNĐ). |
|  | Array[Object] | Có | Danh sách hoạt chất chính: . Nồng độ ghi rõ % hoặc . |
|  | String | Có | **[MỚI]** Nguồn trích xuất INCI/công thức (SmPC, FDA, CosIng, Brand Dossier). |
|  | Object | Có | **[MỚI]** Tuyên bố của hãng: . |
|  | Array[Object] | Có | **[MỚI]** Bằng chứng lâm sàng có DOI/PMID kèm  ( hoặc ). |
|  | String/Null | Có | **[MỚI]** Link DOI hoặc PubMed ID trực tiếp đến nghiên cứu gốc. |
|  | String | Có | **[MỚI]** Phân cấp nguồn: , , . |
|  | String | Có | **[MỚI]** Ngày kiểm định dữ liệu (YYYY-MM-DD). |
|  | String | Có | Thang điểm tin cậy: , , . |
|  | String | Có | Mô tả cấp độ bằng chứng thực tế. |
|  | String | Có | Nguy cơ kích ứng: , , . |
|  | String | Có | Mức độ hỗ trợ hàng rào lipid: , , . |
|  | String | Có | Mức độ tương thích da mụn: , , . |
| | String | Có | An toàn sau xâm lấn / peel / laser:  / . |
