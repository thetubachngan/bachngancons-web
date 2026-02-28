---
description: Workflow để cập nhật Hero Section theo mẫu xaydunglaco.vn
---
# Workflow Cập Nhật Hero Section

Quy trình chuẩn để thay đổi trang tiêu đề (Hero Section) lấy cảm hứng từ xaydunglaco.vn.

## 1. Planning (Lập Kế Hoạch)
- Phân tích nội dung và thông điệp từ trang web xaydunglaco.vn.
- Lên danh sách các thay đổi cần thiết trong file `src/sections/Hero.jsx`.
- Xác định cấu trúc UI, font chữ, màu sắc (dựa vào file `index.css` và biến CSS Tailwind có sẵn/Design System của Bách Ngân).
- Viết tài liệu Kế hoạch Triển khai (`implementation_plan.md`).

## 2. Execution (Thực Thi)
- Cập nhật JSX trong `src/sections/Hero.jsx` với nội dung mới ("Xây Nhà Trọn Gói Tiêu Chuẩn Nhật, Giá Việt Nam").
- Điều chỉnh các class Tailwind CSS để hiển thị đẹp mắt và responsive.
- Thay thế các đoạn văn bản mô tả, thống kê số liệu cho phù hợp.
- Đảm bảo animation (framer-motion, CSS) hoạt động mượt mà.

## 3. Verification (Kiểm Tra Chéo)
- Khởi chạy server kiểm tra cục bộ bằng lệnh `npm run dev`.
- Mở `http://localhost:9995` để xem Hero component.
- Kiểm thử responsive trên các kích thước màn hình (mobile, tablet, desktop).
- Ghi chú lại kết quả kiểm tra vào `walkthrough.md`.
