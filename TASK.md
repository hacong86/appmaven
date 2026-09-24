# Task: Thêm ứng dụng ShiftCheck

- [x] 2026-09-15 — Codex: Sếp duyệt email hacong86@gmail.com và xuất bản StitchCount. Web commit 57e00ec, Pages success, kiểm nội dung live đạt tại /apps/stitchcount/ và /apps/stitchcount/privacy-policy.html.

## 2026-09-15 — StitchCount — Codex
- [x] Tạo landing en-US theo ASO và privacy theo Data Safety/code thực tế.
- [x] Chuyển 8 ảnh được chỉ định sang WebP, giữ nguồn PNG tại dự án app.
- [x] Nối app card, privacy index và sitemap; không thay Featured homepage.
- [x] Kiểm metadata/liên kết/ảnh và preview desktop/mobile, menu, FAQ, gallery, privacy.
- Trạng thái: hoàn tất local; chưa có yêu cầu commit/push. URL dự kiến `/apps/stitchcount/` và `/apps/stitchcount/privacy-policy.html` trên appmavenstudio.com. App vẫn dùng domain cũ; cần đồng bộ sau khi public. Hộp thư support và disclosure release cuối cần chủ app xác nhận.

## Checklist
- [x] Task 1: Cập nhật TASK.md, PROGRESS.md, DISCORD_SYNC.md
- [x] Task 2: Tạo trang `apps/shiftcheck/privacy-policy.html` (Nội dung tiếng Việt)
- [x] Task 3: Tạo trang `apps/shiftcheck/index.html` (Thiết kế Bento, SEO, tiếng Việt)
- [x] Task 4: Cập nhật `apps/index.html` thêm card ShiftCheck
- [x] Task 5: Cập nhật `privacy-policy.html` thêm link ShiftCheck
- [x] Task 6: Kiểm tra tổng thể các file và giao diện
- [x] Task 7: Tạo trang `apps/nhac-hoa-don/privacy-policy.html` (Sổ Đóng Tiền)
- [x] Task 8: Tạo trang `apps/nhac-hoa-don/index.html` (Sổ Đóng Tiền - Bento, SEO)
- [x] Task 9: Cập nhật `apps/index.html` thêm card Sổ Đóng Tiền
- [x] Task 10: Tạo trang `apps/chemlab/privacy-policy.html` (ChemLab)
- [x] Task 11: Tạo trang `apps/chemlab/index.html` (ChemLab - Bento, SEO)
- [x] Task 12: Viết bài viết SEO Blog cho ChemLab (`blog/chemlab-periodic-table-chemistry-app/`)
- [x] Task 13: Cập nhật `apps/index.html` và Homepage (`index.html`) thêm ChemLab
- [x] Task 14: Commit các thay đổi lên GitHub (9154963)

- **Đã xong gần đây:** Tái thiết kế trang ChemLab theo cấu trúc Bento cao cấp (Premium Bento Grid), đảm bảo tính đồng nhất 100% với các ứng dụng khác trên hệ thống. Đã commit và push lên repository GitHub.
- **Đang làm tiếp gì:** Chờ yêu cầu mới từ người dùng.
- **Updated at:** 2026-04-06 16:48 PM

- [x] [2026-08-18] Tạo `privacy-policy.html` + `terms-of-service.html` cho Gieo Quẻ Hỏi Việc (tiếng Việt)
- [x] [2026-08-18] Sửa trang giới thiệu Gieo Quẻ Hỏi Việc: gỡ toàn bộ khẳng định sai về Kinh Dịch, nguồn sách, "số 1 Việt Nam", "chuẩn xác nhất"; sửa số liệu 60+ → 64 chủ đề

- [x] [2026-08-23] Dung lai trang Gieo Que Hoi Viec - Xin Xam cho ban build moi: doi ten,
      logo moi, 8 anh chup moi, bo sung quang cao dai vao chinh sach bao mat
- [x] [2026-08-23] Go not "I Ching" con sot trong card o `apps/index.html`

## Assumption Log
- [2026-03-25] Icon: `Icon_ChPlay.png` tại thư mục ảnh ShiftCheck
- [2026-03-25] Ảnh màn hình: `Checklist01.png` đến `Checklist06.png`
- [2026-03-25] Package ID: `com.appmaven.shiftcheck`
- [2026-03-25] Thư mục: `apps/shiftcheck`
- [2026-03-29] Sổ Đóng Tiền: Folder `apps/nhac-hoa-don`, Icon `Icon_app_512.png`, Screenshots `nhac-hoa-don_01.png` to `05.png`
- [2026-04-06] ChemLab: Folder `apps/chemlab`, Icon `PlayStore_icon.webp`, Screenshots `S1.webp` to `S6.webp`
- [2026-04-06] Blog: `blog/chemlab-periodic-table-chemistry-app/` (English for International SEO)

---

# Task: Thêm ứng dụng Thư Viện Văn Khấn Cổ Truyền

## Checklist
- [x] [2026-04-22] [Codex]: Đọc `TASK.md`, `PROGRESS.md`, tài liệu nguồn và xác nhận phạm vi triển khai
- [x] [2026-04-22] [Codex]: Tạo trang `apps/van-khan-co-truyen/privacy-policy.html`
- [x] [2026-04-22] [Codex]: Tạo trang `apps/van-khan-co-truyen/index.html`
- [x] [2026-04-22] [Codex]: Cập nhật `apps/index.html` thêm card ứng dụng mới
- [x] [2026-04-22] [Codex]: Cập nhật `privacy-policy.html` thêm link policy của ứng dụng
- [x] [2026-04-22] [Codex]: Kiểm tra tổng thể các file vừa tạo/sửa
- [x] [2026-04-22] [Codex]: Stage, commit và push các file website của `Thư Viện Văn Khấn Cổ Truyền` (`079dcd7`)
- [x] [2026-04-22] [Codex]: Bỏ metadata `Phiên bản 1.0` khỏi policy page của `Thư Viện Văn Khấn Cổ Truyền` và publish lại

## Assumption Log
- [2026-04-22] [Codex]: Dùng slug `apps/van-khan-co-truyen` để khớp với thư mục assets `assets/images/apps/van-khan-co-truyen`
- [2026-04-22] [Codex]: Dùng `doc/thuvienvankhan/Privacy Policy.md` làm nguồn chính cho policy page và `doc/thuvienvankhan/ASO_List.md` + screenshots làm nguồn cho app intro page

---

# Task: Thêm ứng dụng Sổ Xe - Chi Phí & Lãi Ròng

## Checklist
- [x] [2026-05-03] [Codex]: Đọc `TASK.md`, `PROGRESS.md`, tài liệu `doc/soxedv` và kiểm tra assets app mới
- [x] [2026-05-03] [Codex]: Tạo trang SEO `apps/quan-ly-xe-tai-xe-cong-nghe/index.html`
- [x] [2026-05-03] [Codex]: Tạo trang `apps/quan-ly-xe-tai-xe-cong-nghe/privacy-policy.html`
- [x] [2026-05-03] [Codex]: Cập nhật `apps/index.html` thêm card Sổ Xe
- [x] [2026-05-03] [Codex]: Cập nhật `privacy-policy.html` thêm link policy Sổ Xe
- [x] [2026-05-03] [Codex]: Cập nhật `sitemap.xml` cho app page và privacy page
- [x] [2026-05-03] [Codex]: Kiểm tra tổng thể các file vừa tạo/sửa

## Assumption Log
- [2026-05-03] [Codex]: Dùng slug `apps/quan-ly-xe-tai-xe-cong-nghe` để khớp thư mục assets và tối ưu từ khóa tiếng Việt
- [2026-05-03] [Codex]: Dùng `doc/soxedv/ASO_listing.md` làm nguồn chính cho SEO page và `doc/soxedv/Privacy Policy.md` làm nguồn chính cho privacy page
- [2026-05-03] [Codex]: Không hiển thị metadata `Phiên bản chính sách 1.0` trên privacy page để tránh phải cập nhật policy theo mỗi lần tăng version app

---

# Task: Cập nhật Privacy Policy Sổ Xe cho tính năng IAP

## Checklist
- [x] [2026-05-03] [Codex]: Đọc `TASK.md`, `PROGRESS.md`, nguồn `doc/soxedv/Privacy Policy.md` và trang HTML hiện tại
- [x] [2026-05-03] [Codex]: Cập nhật `apps/quan-ly-xe-tai-xe-cong-nghe/privacy-policy.html` bổ sung Google Play Billing/IAP
- [x] [2026-05-03] [Codex]: Kiểm tra lại nội dung HTML, đảm bảo không hiển thị metadata phiên bản chính sách
- [x] [2026-05-03] [Codex]: Stage, commit và push bản cập nhật policy IAP cho Sổ Xe lên `origin/main`

## Assumption Log
- [2026-05-03] [Codex]: Chỉ cập nhật app-specific policy page của Sổ Xe; không sửa root `privacy-policy.html` vì trang root chỉ là danh sách/link tổng hợp.

---

# Task: Tối ưu giao diện mobile trang SEO Sổ Xe

## Checklist
- [x] [2026-05-03] [Codex]: Dùng skill `senior-frontend`, đọc `TASK.md`, `PROGRESS.md` và trang SEO Sổ Xe hiện tại
- [x] [2026-05-03] [Codex]: Sửa responsive layout hero trên mobile để tránh text bị ép hẹp
- [x] [2026-05-03] [Codex]: Kiểm tra diff, mobile viewport 390px và trạng thái Git sau khi sửa
- [x] [2026-05-03] [Codex]: Stage, commit và push bản tối ưu mobile SEO Sổ Xe lên `origin/main`

## Assumption Log
- [2026-05-03] [Codex]: Chỉ sửa CSS/markup responsive trong `apps/quan-ly-xe-tai-xe-cong-nghe/index.html`, không đổi nội dung SEO chính hoặc các trang app khác.

---

# Task: Tạo trang Chính sách bảo mật Rune Bounce

## Checklist
- [x] Đọc `TASK.md`, `PROGRESS.md`, file nguồn `doc/RuneBounce/Privacy Policy.md` và mẫu policy hiện có
- [x] Tạo trang `apps/rune-bounce/privacy-policy.html` theo nội dung nguồn Rune Bounce
- [x] Cập nhật `privacy-policy.html` thêm link chính sách bảo mật Rune Bounce
- [x] Cập nhật `sitemap.xml` thêm URL policy Rune Bounce
- [x] Kiểm tra HTML/link nội bộ và trạng thái thay đổi

## Assumption Log
- [2026-06-01] Dùng slug `apps/rune-bounce` cho Rune Bounce vì tên game là Rune Bounce và package là `com.appmaven.runebounce`.

---

# Task: Cập nhật legal pages Rune Bounce

## Checklist
- [x] Đọc `TASK.md`, `PROGRESS.md`, policy nguồn mới và Terms nguồn Rune Bounce
- [x] Cập nhật `apps/rune-bounce/privacy-policy.html` theo policy nguồn mới
- [x] Sửa layout package ID để không tràn khỏi khung
- [x] Tạo trang `apps/rune-bounce/terms-of-service.html`
- [x] Cập nhật `terms-of-service.html` và `sitemap.xml` để có link Terms Rune Bounce
- [x] Kiểm tra nội dung/link responsive và push các file public lên GitHub

## Assumption Log
- [2026-06-01] Terms URL dùng `apps/rune-bounce/terms-of-service.html` để đồng bộ với policy URL hiện có.

---

# Task: Cập nhật Privacy Policy Rune Bounce - Analytics consent riêng

## Checklist
- [x] Đọc `TASK.md`, `PROGRESS.md`, nội dung đính kèm và trang `apps/rune-bounce/privacy-policy.html` hiện tại
- [x] Cập nhật mô tả Unity Analytics theo nội dung mới
- [x] Cập nhật phần consent/Privacy options để tách advertising consent và analytics switch
- [x] Kiểm tra nội dung HTML và trạng thái Git

## Assumption Log
- [2026-06-01] Chỉ cập nhật trang `apps/rune-bounce/privacy-policy.html`; không sửa Terms vì nội dung đính kèm là Privacy Policy.

---

# Task: Tạo trang giới thiệu SEO Rune Bounce

## Checklist
- [x] [2026-06-09] [AGENTS Code]: Đọc `TASK.md`, `PROGRESS.md`, `doc/RuneBounce/ASO.md` và kiểm tra ảnh screenshot Rune Bounce
- [x] [2026-06-09] [AGENTS Code]: Tạo trang SEO `apps/rune-bounce/index.html` dùng ảnh gameplay và nội dung ASO
- [x] [2026-06-09] [AGENTS Code]: Cập nhật `apps/index.html` thêm card Rune Bounce vào danh sách game
- [x] [2026-06-09] [AGENTS Code]: Cập nhật `sitemap.xml` thêm URL giới thiệu Rune Bounce
- [x] [2026-06-09] [AGENTS Code]: Kiểm tra HTML, link ảnh, link Google Play, Privacy Policy và Terms of Service

## Assumption Log
- [2026-06-09] [AGENTS Code]: Dùng slug `apps/rune-bounce/` cho trang giới thiệu chính vì legal pages hiện đã nằm trong cùng thư mục này.
- [2026-06-09] [AGENTS Code]: Dùng `assets/images/apps/rune-bounce-magic-defense/RuneBounce_Feature_graphic.webp` làm hero chính vì ảnh có logo game và gameplay rõ nhất.

---

# Task: Tạo Privacy Policy + Terms of Service cho game Trap Tower

## Checklist
- [x] [2026-06-15] Claude Code: Đọc `TASK.md`, `PROGRESS.md`, nguồn `doc/TrapTower/Privacy Policy.md`, `Terms of Service.md`, `ASO.md` và mẫu legal page hiện có (Rune Bounce)
- [x] [2026-06-15] Claude Code: Tạo trang `apps/trap-tower/privacy-policy.html` theo nội dung nguồn (free + AdMob, không IAP, không Unity, lưu local)
- [x] [2026-06-15] Claude Code: Tạo trang `apps/trap-tower/terms-of-service.html` theo nội dung nguồn; thay placeholder `YOUR-PRIVACY-URL` bằng link thật
- [x] [2026-06-15] Claude Code: Cập nhật `privacy-policy.html` (root) thêm link Trap Tower
- [x] [2026-06-15] Claude Code: Cập nhật `terms-of-service.html` (root) thêm link Trap Tower
- [x] [2026-06-15] Claude Code: Cập nhật `sitemap.xml` thêm 2 URL legal Trap Tower
- [x] [2026-06-15] Claude Code: Kiểm tra render desktop + mobile bằng browser; không còn placeholder; link nội bộ đúng
- [ ] [2026-06-15] Claude Code: Commit/push các file public lên `origin/main` (không đưa `doc/` lên remote)

## Assumption Log
- [2026-06-15] Claude Code: Dùng slug `apps/trap-tower` khớp package `com.traptower.game`; legal pages đặt cùng thư mục để link đồng bộ.
- [2026-06-15] Claude Code: Effective/Last updated = June 15, 2026 theo file nguồn; theme đỏ/hổ phách hợp chủ đề rage/troll của game.
- [2026-06-15] Claude Code: Lỗi favicon 404 (`/assets/images/logo/favicon.png` không tồn tại) là vấn đề chung của toàn site, không phát sinh từ trang mới → ngoài phạm vi task này.

---

# Task: Tạo trang giới thiệu SEO (tiếng Anh) cho game Trap Tower

## Checklist
- [x] [2026-06-16] Claude Code: Đọc `doc/TrapTower/ASO.md`, xem 6 screenshot + feature graphic + logo trong `assets/images/apps/trap-tower`, tham chiếu mẫu Rune Bounce
- [x] [2026-06-16] Claude Code: Tạo trang `apps/trap-tower/index.html` (hero feature graphic, 6 feature tiles, gallery 6 screenshot có caption, wide feature no-death, FAQ, CTA, JSON-LD WebPage/MobileApplication/FAQPage)
- [x] [2026-06-16] Claude Code: Thêm card Trap Tower vào `apps/index.html` (Google Play + App Store "Soon")
- [x] [2026-06-16] Claude Code: Thêm URL `/apps/trap-tower/` vào `sitemap.xml`
- [x] [2026-06-16] Claude Code: Kiểm tra browser desktop 1366px + mobile 390px → render đúng, 0 lỗi console, card Apps hiển thị đúng
- [ ] [2026-06-16] Claude Code: Commit/push các file public lên `origin/main`

## Assumption Log
- [2026-06-16] Claude Code: Google Play link `https://play.google.com/store/apps/details?id=com.traptower.game`; iOS "Coming soon".
- [2026-06-16] Claude Code: Nội dung điều khiển (touch joystick + full keyboard Arrows/WASD/Space trên Chromebook & PC) lấy theo ASO.md; theme đỏ/hổ phách trên nền navy khớp art game.
- [2026-06-16] Claude Code: Không thêm Trap Tower vào trang chủ (homepage là danh sách app tuyển chọn — Rune Bounce cũng không có), chỉ thêm vào trang Apps.

---

# Task: Tạo trang Privacy Policy Monster Survivor

## Checklist
- [x] [2026-07-02] [AGENTS Code]: Đọc `TASK.md`, `PROGRESS.md`, nguồn `doc/monster-survivor/Privacy Policy.md` và mẫu legal page hiện có
- [x] [2026-07-02] [AGENTS Code]: Tạo trang `apps/monster-survivor/privacy-policy.html` theo nội dung nguồn, không để lại placeholder
- [x] [2026-07-02] [AGENTS Code]: Cập nhật `privacy-policy.html` thêm link Monster Survivor
- [x] [2026-07-02] [AGENTS Code]: Cập nhật `sitemap.xml` thêm URL policy Monster Survivor
- [x] [2026-07-02] [AGENTS Code]: Kiểm tra HTML/link nội bộ, không còn placeholder và không stage `doc/`
- [x] [2026-07-02] [AGENTS Code]: Commit và push các file public lên `origin/main`

## Assumption Log
- [2026-07-02] [AGENTS Code]: Dùng slug `apps/monster-survivor` theo tên game và package `com.appmaven.monstersurvivor`.
- [2026-07-02] [AGENTS Code]: Điền các placeholder public bằng `AppMaven`, `Vietnam`, URL `https://appmavenstudio.com/apps/monster-survivor/privacy-policy.html`, Effective/Last updated `July 2, 2026`.

---

# Task: Cập nhật Privacy Policy Monster Survivor khớp bản Markdown

## Checklist
- [x] Đọc `TASK.md`, `PROGRESS.md`, file nguồn `doc/monster-survivor/Privacy Policy.md` và trang HTML hiện tại
- [x] Bổ sung các đoạn policy còn bị rút gọn trong `apps/monster-survivor/privacy-policy.html`
- [x] Kiểm tra lại các cụm nội dung quan trọng sau khi sửa
- [x] Cập nhật `TASK.md` và `PROGRESS.md` trước khi kết thúc

## Assumption Log
- [2026-07-06] Chỉ cập nhật trang app-specific `apps/monster-survivor/privacy-policy.html`; không sửa tài liệu nguồn `doc/` vì file Markdown đang là bản chuẩn.

---

# Task: Tạo bài blog SEO tiếng Anh cho Monster Survivor

## Checklist
- [x] [2026-07-11] [AGENTS Code]: Đọc `TASK.md`, `PROGRESS.md`, nguồn `doc/monster-survivor/ASO.md`, kiểm tra 8 screenshot và icon
- [x] [2026-07-11] [AGENTS Code]: Tạo `blog/monster-survivor-pet-rpg/index.html` với nội dung tiếng Anh, metadata SEO, Open Graph và BlogPosting schema
- [x] [2026-07-11] [AGENTS Code]: Dùng ảnh gameplay thật, gắn Google Play đúng package và hiển thị iOS Coming Soon
- [x] [2026-07-11] [AGENTS Code]: Thêm card vào `blog/index.html` và URL vào `sitemap.xml`
- [x] [2026-07-11] [AGENTS Code]: Kiểm tra HTML, link, ảnh, responsive; commit và push `origin/main`

## Assumption Log
- [2026-07-11] [AGENTS Code]: Dùng slug `blog/monster-survivor-pet-rpg/` để bám từ khóa tên game và thể loại; iOS chỉ hiển thị Coming Soon, không tạo link giả.

---

# Task: Tạo Privacy Policy cho Tạo Hóa Đơn & Quản Lý Shop

## Checklist
- [x] [2026-08-06] [AGENTS Code]: Đọc `TASK.md`, `PROGRESS.md`, tài liệu trong `doc/tao-hoa-don`, trang Google Play và mẫu legal page hiện có
- [x] [2026-08-06] [AGENTS Code]: Tạo `apps/invoice-studio/privacy-policy.html` bám sát `doc/tao-hoa-don/chinh-sach-bao-mat.md`
- [x] [2026-08-06] [AGENTS Code]: Cập nhật link policy tại trang app, trang privacy tổng và `sitemap.xml`
- [x] [2026-08-06] [AGENTS Code]: Kiểm tra HTML, metadata, liên kết, nội dung bắt buộc và Git diff
- [x] [2026-08-06] [AGENTS Code]: Commit, push `origin/main` và xác minh commit trên remote

## Assumption Log
- [2026-08-06] [AGENTS Code]: Dùng URL `https://appmavenstudio.com/apps/invoice-studio/privacy-policy.html` vì trang public hiện có của package `com.appmaven.taohoadon` nằm tại `apps/invoice-studio/`.
- [2026-08-06] [AGENTS Code]: Giữ `doc/` làm tài liệu nguồn nội bộ và không stage thư mục này; chỉ publish HTML cùng các liên kết bắt buộc.

---

# Task: Tạo lại Privacy Policy cho Square Race MAX

## Checklist
- [x] [2026-08-06] [AGENTS Code]: Đối chiếu file nguồn, mã nguồn Unity, SDK thực tế, trang Google Play và yêu cầu Data Safety
- [x] [2026-08-06] [AGENTS Code]: Tạo `apps/square-race-max/privacy/index.html` song ngữ với nội dung khớp SDK hiện tại
- [x] [2026-08-06] [AGENTS Code]: Cập nhật link policy tại trang game, trang privacy tổng và `sitemap.xml`
- [x] [2026-08-06] [AGENTS Code]: Kiểm tra HTML, nội dung, liên kết và giao diện desktop/mobile
- [x] [2026-08-06] [AGENTS Code]: Commit, push `origin/main` và xác minh URL công khai

## Assumption Log
- [2026-08-06] [AGENTS Code]: Dùng URL `https://appmavenstudio.com/apps/square-race-max/privacy/` đúng theo cấu trúc file nguồn và hướng dẫn triển khai trong dự án trò chơi.
- [2026-08-06] [AGENTS Code]: Chính sách public phải phản ánh disclosure hiện hành của Unity Ads/LevelPlay, kể cả vị trí gần đúng suy ra từ IP và mã định danh do SDK xử lý; phần Data Safety trong Play Console cần được rà soát lại cho đồng bộ.

---

# Task: Tạo lại Privacy Policy cho Trial Shield

## Checklist
- [x] [2026-08-06] [AGENTS Code]: Đọc tài liệu nguồn, mã nguồn Kotlin, SDK thực tế và trang Google Play
- [x] [2026-08-06] [AGENTS Code]: Tạo `apps/trial-shield/privacy-policy.html` theo tài liệu `Privacy Policy .md`
- [x] [2026-08-06] [AGENTS Code]: Sửa các claim tuyệt đối không còn khớp AdMob/Android backup trên trang Trial Shield
- [x] [2026-08-06] [AGENTS Code]: Cập nhật link policy tại trang app, trang privacy tổng và `sitemap.xml`
- [x] [2026-08-06] [AGENTS Code]: Kiểm tra HTML, nội dung, liên kết và giao diện desktop/mobile
- [x] [2026-08-06] [AGENTS Code]: Commit, push `origin/main` và xác minh URL công khai

## Assumption Log
- [2026-08-06] [AGENTS Code]: Dùng URL `https://appmavenstudio.com/apps/trial-shield/privacy-policy.html` theo slug public hiện có của package `com.appmaven.trialshield`.
- [2026-08-06] [AGENTS Code]: Giữ nguyên tài liệu nguồn ở ổ J; bản public thay link liên hệ Blogger đã mất bằng `https://appmavenstudio.com/support/` và ghi ngày cập nhật mới.

---

# Task: Cải thiện giao diện AppMaven Studio

## Checklist
- [x] [2026-08-06] [AGENTS Code]: Audit giao diện live, ảnh người dùng gửi, CSS hiện tại và đo desktop/mobile bằng trình duyệt thật
- [x] [2026-08-06] [AGENTS Code]: Làm mới hero trang chủ bằng nội dung rõ ràng và ảnh sản phẩm thật
- [x] [2026-08-06] [AGENTS Code]: Sắp xếp lại lưới ứng dụng, khu vực Trust và CTA để giảm khoảng trống, tăng phân cấp thị giác
- [x] [2026-08-06] [AGENTS Code]: Bỏ khung lồng/padding kép của nội dung pháp lý trên mobile mà không ảnh hưởng card toàn website
- [x] [2026-08-06] [AGENTS Code]: Kiểm tra responsive 320/390/768/1024/1440, menu, liên kết, console và accessibility
- [x] [2026-08-06] [AGENTS Code]: Commit, push `origin/main` và xác minh giao diện công khai

## Assumption Log
- [2026-08-06] [AGENTS Code]: Giữ nhận diện dark navy hiện tại nhưng giảm glassmorphism lặp lại; dùng ảnh app đã có trong repo, không thêm dependency hoặc tạo asset mới.
- [2026-08-06] [AGENTS Code]: Phạm vi là trang chủ cùng mẫu `.legal-content > .glass-card` trên mobile; không sửa nội dung pháp lý, URL, metadata hoặc các trang app không dùng mẫu này.

---

# Task: Xuất bản Privacy Policy và Terms of Service cho FocusOne

## Checklist
- [x] [2026-08-06] [AGENTS Code]: Kiểm tra các file FocusOne đã được người dùng tạo và xác định đúng phạm vi thay đổi
- [x] [2026-08-06] [AGENTS Code]: Nối Privacy Policy và Terms of Service từ trang FocusOne, trang legal tổng và `sitemap.xml`
- [x] [2026-08-06] [AGENTS Code]: Kiểm tra HTML, metadata, canonical, liên kết, placeholder và giao diện desktop/mobile
- [x] [2026-08-06] [AGENTS Code]: Commit, push `origin/main`, chờ GitHub Pages và xác minh URL công khai

## Assumption Log
- [2026-08-06] [AGENTS Code]: Dùng URL `https://appmavenstudio.com/apps/focusone/privacy-policy.html` và `https://appmavenstudio.com/apps/focusone/terms-of-service.html` theo đúng canonical trong hai file người dùng đã tạo.
- [2026-08-06] [AGENTS Code]: Giữ nguyên nội dung pháp lý FocusOne; task này chỉ xác minh và xuất bản website, không đối chiếu disclosure với mã nguồn Android ngoài repo.
- [2026-08-06] [AGENTS Code]: Không stage thư mục `doc/` hoặc bất kỳ file ngoài phạm vi FocusOne/legal navigation.

---

## Checklist
- [x] Tạo skill `appmaven-publish` (global, `~/.claude/skills/appmaven-publish/`) để xuất bản trang app/privacy/terms/blog ngay từ thư mục dự án app/game, không phải copy tài liệu vào `doc/`
- [x] Viết 4 script hỗ trợ: `intake_scan.py`, `to_webp.py`, `verify_pages.py`, `repo_webp_cleanup.py`
- [x] Kiểm tra đối kháng skill (5 nhóm audit + phản biện từng phát hiện) — 31 lỗi xác nhận, đã sửa hết
- [x] Dọn ảnh PNG/JPG trong `assets/images/` sang WebP — 42.6 MB (78 file) → 3.9 MB (57 file), có backup đầy đủ
- [x] Tạo 3 file ảnh còn thiếu từ logo thật: `logo/favicon.png` (96×96), `logo/logo.png` (512×512), `og-image.png` (1200×630) — sửa 93 tham chiếu gãy mà không phải sửa 1 dòng HTML nào
- [x] Sửa 31 thẻ `og:image`/`twitter:image` trong 16 trang sang URL tuyệt đối
- [x] Sửa bộ đếm `All Apps (19)` → `(20)` trong `apps/index.html`
- [x] Thêm thẻ `canonical` cho 22 trang còn thiếu (SEO)
- [x] Sửa FAQ trong JSON-LD của Trap Tower cho khớp nội dung hiển thị (tránh vi phạm structured data)
- [x] Xoá `assets/screenshots/` (1.9 MB, 4 file trùng lặp y hệt lich-am-2026, không trang nào tham chiếu)
- [ ] Nén lại ~19 MB file WebP cũ (dino-drop-master 1 MB/ảnh, lich-am 630 KB/ảnh) — chờ user duyệt vì có đánh đổi chất lượng
- [ ] Bổ sung 6 trang app còn thiếu trong `sitemap.xml` (chemlab, pictura, shiftcheck, smartsscanner, nhac-hoa-don, van-khan-co-truyen)


## Assumption Log
- [2026-08-14] [Claude Code]: Skill đặt ở phạm vi global (`~/.claude/skills/`) chứ không phải trong repo web, vì nó phải chạy được từ thư mục dự án game bất kỳ → User chốt: đúng ý (yêu cầu gốc là "làm từ thư mục khác").
- [2026-08-14] [Claude Code]: Skill DỪNG trước khi commit/push, chờ user duyệt → User chọn: "Dừng lại cho tôi duyệt trước".
- [2026-08-14] [Claude Code]: Ngôn ngữ trang do skill tự quyết theo thị trường app (EN cho app toàn cầu, VI cho app Việt) và phải báo lại lựa chọn → User chọn: "Tự quyết theo thị trường app".
- [2026-08-14] [Claude Code]: Ảnh chỉ lưu `.webp`, tự resize (icon 512 / screenshot 1080 / feature 1920), không copy file gốc → User chọn cả 3 mục.
- [2026-08-14] [Claude Code]: Bộ trang mặc định gồm 4 loại: giới thiệu app + privacy + terms + blog SEO → User chọn cả 4.
- [2026-08-14] [Claude Code]: Chưa chạy `repo_webp_cleanup.py --apply` trên repo thật; mới chỉ chạy trên bản sao trong thư mục tạm để kiểm chứng an toàn.

---

## Checklist
- [x] [2026-08-14] Xuất bản bộ trang cho ứng dụng **Lợi Nhuận** (`com.appmaven.giaban.phisan`): trang giới thiệu, chính sách bảo mật, điều khoản dịch vụ, bài blog SEO — bằng skill `appmaven-publish`
- [x] Nối trang mới vào 6 điểm bắt buộc: card ở `apps/index.html` + bộ đếm 20→21, `sitemap.xml` (+4 URL), `privacy-policy.html` gốc, `terms-of-service.html` gốc, `blog/index.html`
- [x] Chuyển 6 ảnh sang `.webp` trong `assets/images/apps/loi-nhuan/`
- [x] Kiểm bằng mắt desktop 1440 + mobile 390 cho cả 4 trang, sửa 3 lỗi giao diện phát hiện được

## Assumption Log
- [2026-08-14] [Claude Code]: Ngôn ngữ trang chọn **tiếng Việt** (`lang="vi"`) vì ứng dụng chỉ nhắm thị trường Việt Nam (phí Shopee/TikTok Shop/Lazada, thuế theo Nghị định 252/2026) — theo Bước 2 của skill, tự quyết theo thị trường app.
- [2026-08-14] [Claude Code]: CÓ tạo Terms of Service dù ứng dụng miễn phí và không có mua trong ứng dụng, vì ứng dụng hiển thị quảng cáo AdMob và đưa ra con số phí/thuế cần điều khoản miễn trừ trách nhiệm.
- [2026-08-14] [Claude Code]: Mọi khai báo trong chính sách bảo mật đều đối chiếu mã nguồn thật của dự án Flutter (AdMob + UMP, không Firebase, không Billing, không quyền hệ thống nào trong `AndroidManifest.xml`).

- [x] [2026-08-14] Gỡ mọi nội dung nói về bảng hỏi ý kiến quảng cáo (UMP) khỏi 3 trang Lợi Nhuận — chủ ứng dụng chốt chỉ phát hành tại Việt Nam nên app không còn tính năng đó

## Assumption Log
- [2026-08-14] [Claude Code]: Bỏ hẳn mục "11. Cơ sở pháp lý (châu Âu, Anh và Thuỵ Sĩ)" trong chính sách thay vì để lại một mục rỗng, rồi đánh lại số 12–19 thành 11–18 để không thủng số thứ tự. Không thay bằng bảng cơ sở pháp lý theo luật Việt Nam vì chưa kiểm chứng được điều khoản cụ thể — không bịa nội dung pháp lý.
- [2026-08-18] [Claude Code]: Trang Gieo Quẻ Hỏi Việc dùng **tiếng Việt** (`lang="vi"`) — ứng dụng chỉ phát hành tại Việt Nam. CÓ tạo Điều khoản vì ứng dụng có quảng cáo AdMob. Giữ lại phần nói về bảng hỏi ý kiến quảng cáo cho người dùng ở châu Âu, vì ứng dụng vẫn chạy cơ chế đó ngầm (người dùng Việt Nam không thấy gì, người đang ở châu Âu vẫn được hỏi đúng luật) — khác với cách xử lý của app Lợi Nhuận trước đây.

---

## [2026-08-28] Trang Hướng dẫn sử dụng cho Tạo Hóa Đơn & Quản Lý Shop

## Checklist
- [x] Chụp 13 ảnh màn hình thật từ máy ảo Android (app bản 1.1.1, dữ liệu mẫu tiếng Việt có dấu), chuyển sang `.webp` (2463 KB → 710 KB, tiết kiệm 71%)
- [x] Dựng `apps/invoice-studio/huong-dan-su-dung.html` — 14 mục, mục lục, bảng so sánh 3 loại chứng từ, 8 câu hỏi thường gặp
- [x] Nối vào site: `sitemap.xml` (+1 URL), thẻ "Bảo Mật & Riêng Tư" và cột "Pháp Lý" ở `apps/invoice-studio/index.html`
- [x] Sửa favicon gãy `/assets/images/logo/favicon.png` → `appmaven_logo.png` ở `apps/invoice-studio/index.html`
- [x] Sửa nhãn ngày trong `apps/invoice-studio/privacy-policy.html` để qua `verify_pages.py` (Ngày hiệu lực + Cập nhật lần cuối) — không đổi một chữ nào trong nội dung chính sách
- [x] `verify_pages.py` PASS (3 cảnh báo cũ, không phải lỗi mới)
- [x] Kiểm bằng mắt: desktop 1440 (Claude in Chrome) + mobile 390 (Playwright, do resize Chrome không ăn khi cửa sổ maximize)
- [ ] Chờ chủ dự án duyệt rồi mới commit + push

## Assumption Log
- [2026-08-28] [Claude Code]: Ngày "Cập nhật lần cuối 06/08/2026" trong chính sách bảo mật lấy từ ngày commit thật của file (`git log` — commit duy nhất 2026-08-06), không phải ngày tự đặt.
- [2026-08-28] [Claude Code]: Ảnh minh hoạ dùng dữ liệu cửa hàng GIẢ (Cửa hàng Minh Anh, 3 khách hàng, 8 sản phẩm) nạp thẳng vào SQLite của máy ảo, vì `adb input text` không gõ được tiếng Việt có dấu. Không có dữ liệu thật của người dùng nào trong ảnh.
- [2026-08-28] [Claude Code]: Ảnh màn hình Nâng cấp Pro bị CẮT phần dưới, vì máy ảo không kết nối được Google Play nên hiện thông báo lỗi kết nối — giữ lại đúng phần danh sách quyền lợi.

## [2026-08-29] Mã khuyến mãi Pro trên bài hướng dẫn

## Checklist
- [x] Đăng 30 mã dùng thử Pro (10 mã 90 ngày + 20 mã 30 ngày) vào mục mới "Mã dùng thử Pro miễn phí"
- [x] Ghi rõ 3 cảnh báo: mã dùng một lần, hết dùng thử tự gia hạn có tính tiền, hạn 30/11/2026
- [x] Thêm số điện thoại hỗ trợ 0972 865 336 vào mục Liên hệ
- [x] `verify_pages.py` PASS · kiểm mắt desktop 1440 + mobile 390 · push `f84473a` · xác minh live

## Assumption Log
- [2026-08-29] [Claude Code]: KHÔNG đăng mã tặng Pro trọn đời 100% lên trang — mã đó dành riêng cho một khách hàng, chủ dự án tự gửi.
- [2026-08-29] [Claude Code]: Google Play không tạo được mã giảm 50%/30% (mã sản phẩm mua đứt luôn 100%, mã thuê bao chỉ có số ngày dùng thử). Chủ dự án chốt thay bằng mã dùng thử miễn phí.


## [2026-09-01] Dựng lại 3 trang cho Photo Prompt (com.appmaven.promptmaster)

## Checklist
- [x] Chuyển 8 ảnh sang WebP: 6.749KB → 499KB (tiết kiệm 93%)
- [x] Dựng lại `apps/prompt-master-ai/index.html` — bản cũ còn quảng cáo "thư viện 900 prompt" đã bị xoá khỏi app, và dùng tên app cũ
- [x] Tạo mới `apps/prompt-master-ai/privacy-policy.html` — trang này **chưa từng tồn tại**
- [x] Tạo mới `apps/prompt-master-ai/terms-of-service.html`
- [x] Sửa link sai ở `privacy-policy.html` gốc: đang trỏ sang trang giới thiệu, Play Console sẽ từ chối
- [x] Thêm link ToS vào `terms-of-service.html` gốc; thêm 2 URL vào `sitemap.xml`; cập nhật card ở `apps/index.html`
- [x] Sửa 6 lỗi tự gây do dựng sai mẫu (xem PROGRESS.md cùng ngày)
- [x] `verify_pages.py` PASS 0 cảnh báo · soi mắt desktop 1440 + mobile 390
- [x] Chủ dự án duyệt "đẩy lên" → commit + push + xác minh live

## Assumption Log
- [2026-09-01] [Claude Code]: Giữ slug `prompt-master-ai` dù app đã đổi tên thành Photo Prompt — ba chỗ trong site đang trỏ tới đường dẫn này và URL có thể đã nằm trong Play Console. Đổi slug là làm gãy link cũ.
- [2026-09-01] [Claude Code]: KHÔNG làm icon mới theo yêu cầu chủ dự án (bản cũ đã có). Đã hoàn nguyên `icon.webp` sau khi lỡ ghi đè; trang dùng `icon-new.webp` sẵn có.
- [2026-09-01] [Claude Code]: GIỮ 5 ảnh cũ không còn trang nào dùng (256KB) — chờ chủ dự án quyết, không tự xoá.

## AppMaven pages — 2026-09-12
- [ ] Rebuild Photo Prompt introduction and privacy policy from current 4.0.0+8 evidence.
- [ ] Convert the six supplied screenshots to WebP; preserve originals and existing icon.
- [ ] Verify page structure, links, responsive layout and publication status.
- Scope: two existing AppMaven pages, related app directory and sitemap; no IAP/UMP behavior changes, no unrelated cleanup.
- Assumption: keep existing AppMaven slug and English locale. User confirms GDPR configured in a different AdMob account; this is not a new runtime consent test.
- User experience: explain templates, external AI workflow and data handling; supplied screenshots show an earlier catalogue and will be labelled accordingly.

### AppMaven verification — 2026-09-12
- [x] Rebuilt introduction and privacy for 4.0.0+8; retained existing URLs and icon.
- [x] Converted exactly six supplied PNG screenshots to 1080x1920 WebP (6,180 KB to 588 KB, about 90% smaller); originals unchanged.
- [x] Verified 132 templates / 12 categories / 50 free / 82 PRO against current JSON.
- [x] verify_pages.py passed with 0 warnings; mobile 390 and desktop 1440 inspected; no horizontal overflow, menu/FAQ/privacy link work, all six gallery images loaded.
- [ ] Verify the new content on the public site after publishing.
- Publication scope: existing introduction, privacy, six WebP assets, related app-directory description and sitemap. User requests web pages for new links and WebP when placed on the website; no Play Console changes or app behavior edits.

### AppMaven completed — 2026-09-12
- [x] Introduction and privacy rebuilt and published: commit d54fed85ee6e59c12dd1843cdfc65bab2ce134df.
- [x] GitHub Pages deployment 34699946755 completed successfully; both live pages opened and new content verified; all six WebP screenshots loaded at 1080x1920.
- [x] Local structure/link checks, responsive desktop/mobile and gallery/menu/FAQ checks passed.
- Introduction: https://appmavenstudio.com/apps/prompt-master-ai/
- Privacy: https://appmavenstudio.com/apps/prompt-master-ai/privacy-policy.html
- Remaining separate work: replace the old privacy URL in lib/core/widgets/legal_links.dart and Play Console/AdMob configuration when adopting this URL. No app code or Console settings changed in this website task. IAP/consent runtime findings from the earlier audit remain unresolved.

### [2026-09-24 15:45] Claude Code — WoodShop Toolkit + sửa StitchCount
- [x] Xuất bản trang WoodShop Toolkit (giới thiệu + privacy + terms) từ J:\Apps\Flutter\WoodShop — package com.appmaven.woodshop
- [x] Sửa chữ danh sách trắng trên nền kem ở StitchCount (index + privacy dùng chung stitchcount.css)
- [ ] Sau khi app có trên Google Play: thêm nút Google Play vào card /apps/ và trang giới thiệu WoodShop
- [x] [2026-09-24] Claude Code — card WoodShop + StitchCount ở /apps/ dùng nút Google Play + App Store Soon như các app khác (Sếp yêu cầu)
