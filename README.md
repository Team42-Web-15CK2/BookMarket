# BookMarket
Thành viên:

1560262 - Võ Lê Bảo Khiêm
1560264 - Đỗ Đăng Khoa
1560263 - Bùi Đăng Khoa

API SERVER

Cài dependency:

npm install          // dành cho môi trường window

Cài đặt database:

B1: Tạo database bookmarket trong mysql server với collation 

B2: Chỉnh config database (user,password) trong /config/config.json:

 "development": {
    "username": "root",
    "password": null,
    "database": "book_marker",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  
  B3: Chạy migrate
  
  node_modules/.bin/sequelize db:migrate
  
  B4: Chạy script khởi tạo dữ liệu
  - Vào phpmyadmin
  - Chọn database bookmarket
  - Import file database/database.sql
  Hoặc
  - Copy nội dung file database/database.sql 
  - Chọn SQL 
  - Dán toàn bộ nội dung vừa copy vào
  - Nhấn GO


Run server port 3000 (expressjs)

npm run dev


Client
client sử dụng reatcjs chạy ở port 3000 và được proxy sang port 3001

cd views
npm start
