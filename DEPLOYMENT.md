# Hướng Dẫn Kích Hoạt Tên Miền (Custom Domain)

Để trang web hoạt động tại địa chỉ `appmavenstudio.com`, bạn cần thực hiện 2 bước chính: Cấu hình DNS tại nhà cung cấp tên miền và cài đặt trên GitHub.

## 1. Cấu Hình DNS (Domain Name System)
Đăng nhập vào trang quản lý tên miền của bạn (ví dụ: MatBao, Tenten, GoDaddy, Namecheap...) và tìm mục **DNS Management** (Quản lý DNS).

Thêm các bản ghi (Records) sau đây:

### 1.1 Trỏ tên miền chính (@) về GitHub
Tạo **4 bản ghi A** với các giá trị IP sau của GitHub:

| Type | Host / Name | Value / IP Address | TTL |
|------|-------------|--------------------|-----|
| A    | @           | `185.199.108.153`  | 3600 |
| A    | @           | `185.199.109.153`  | 3600 |
| A    | @           | `185.199.110.153`  | 3600 |
| A    | @           | `185.199.111.153`  | 3600 |

*(Lưu ý: Nếu có bản ghi A cũ nào khác trỏ vào hosting cũ, hãy xóa chúng đi)*

### 1.2 Trỏ tên miền phụ (www)
Tạo **1 bản ghi CNAME** để hỗ trợ `www.appmavenstudio.com`:

| Type  | Host / Name | Value / Destination          | TTL |
|-------|-------------|------------------------------|-----|
| CNAME | www         | `USERNAME.github.io`         | 3600 |

*(Thay `USERNAME` bằng tên tài khoản GitHub của bạn, ví dụ: `hacong86.github.io`)*

---

## 2. Xác Nhận Trên GitHub
Do trong mã nguồn tôi đã tạo sẵn file `CNAME` chứa `appmavenstudio.com`, nên khi bạn đẩy code lên (Push), GitHub thường sẽ tự động nhận diện.

Tuy nhiên, để chắc chắn và kích hoạt HTTPS (Khóa bảo mật SSL), hãy làm bước này:

1. Vào trang Repository trên GitHub > **Settings**.
2. Chọn mục **Pages** ở cột bên trái.
3. Tại phần **Custom domain**:
   - Kiểm tra xem đã có `appmavenstudio.com` chưa.
   - Nếu chưa, nhập `appmavenstudio.com` và nhấn **Save**.
4. Chờ khoảng 15-30 phút (DNS cần thời gian cập nhật).
5. Khi thấy ô **Enforce HTTPS** sáng lên, hãy tích chọn nó để web có biểu tượng ổ khóa an toàn 🔒.

---

## 3. Kiểm Tra
Sau khi hoàn tất, truy cập:
- `http://appmavenstudio.com` -> Sẽ tự chuyển sang HTTPS.
- `https://www.appmavenstudio.com` -> Sẽ tự chuyển về không có www (hoặc ngược lại tùy GitHub xử lý).

Chúc bạn thành công!
