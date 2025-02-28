# ❗Hướng dẫn cài đặt dự án:

### Mở terminal chạy các câu lệnh sau:

### 1. `git clone https://github.com/anhnhph33991/alpha-cinema.git`

`    - Mặc định git clone là clone nhánh master
`

### 2. `cd alpha-cinema`

### 3. `npm i`

### 4. `copy .env.example .env`

`    - Checkout qua nhánh của mình, pull code từ develop về
`

### 5. `npm run dev`

# ❗Cấu hình .env

### Chú Thích:

    <APP_URL>: đường dẫn backend

### Giá trị thay đổi:

    NUXT_API_URL=<APP_URL>/api
    NUXT_URL_ADMIN=<APP_URL>/admin

#

# ❗Cấu trúc thư mục

```
📦 ALPHA-CINEMA/
├── 📂 .nuxt/                # Thư mục build của Nuxt (tự động tạo)
├── 📂 .output/              # Thư mục output sau khi build
├── 📂 assets/               # Chứa file tĩnh như CSS, SCSS, ảnh, fonts
├── 📂 components/           # Chứa các component tái sử dụng
├── 📂 composables/          # Chứa các composables (tương tự Vue Composables)
├── 📂 constants/            # Chứa các hằng số được sử dụng trong dự án
├── 📂 layouts/              # Chứa các layout chính của ứng dụng
├── 📂 middleware/           # Chứa middleware
├── 📂 pages/                # Chứa các trang chính (file-based routing)
├── 📂 plugins/              # Chứa các plugin Vue/Nuxt
├── 📂 public/               # Chứa các file tĩnh (ảnh, favicon, robots.txt, v.v.)
├── 📂 schema/               # Chứa các file schema hoặc model
├── 📂 server/               # Chứa API server-side (Nitro API)
├── 📂 services/             # Chứa các file service xử lý call api
├── 📂 stores/               # Chứa Pinia stores (state management)
├── 📂 utils/                # Chứa các hàm helper
├── 📄 .env                  # File cấu hình biến môi trường
├── 📄 .env.example          # File cấu hình biến môi trường
├── 📄 .gitignore            # File ignore Git
├── 📄 app.vue               # File root của ứng dụng
├── 📄 nuxt.config.ts        # File cấu hình Nuxt
├── 📄 package.json          # File khai báo dependencies
├── 📄 package-lock.json     # File lock phiên bản package
```
