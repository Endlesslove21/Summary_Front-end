Câu 1: thẻ meta được dùng để làm gì?

- Thẻ meta được dùng để báo trong trình duyệt về mô tả trang, tác giả, tập ký tự, các từ khóa...
- Luôn đi bên trong phần tử <head>
- Dữ liệu không được hiển thị trên trang
- Dùng để tối ưu hóa công cụ tìm kiếm

Ex:

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale = 1.0">
<meta name="description" content="HTML interview questions">
<meta name="author" content="Author Name">
<meta name="copyright" content="All Rights Reserved">

Câu 2: Khai báo DOCTYPE?

- Dùng để xác định loại văn bản của HTML. Nó cho phép trình duyệt biết tài liệu nên được diễn giải như thế nào, bằng cách chỉ ra phiên bản hoặc tiêu chuẩn của HTML (hoặc ngôn ngữ đánh dấu khác) đang được sử dụng.

Câu 3: Thuộc tính float trong CSS?

- Là một thuộc tính được sử dụng để chuyển một phần tử sang góc trái hoặc góc phải của không gian bao xung quanh nó.

Câu 4: Sự khác nhau giữa display inline, block và inline-block?

display: inline

- các item sẽ nằm trên cùng một dòng
- không thể set width, height
- có thể điều chỉnh margin, padding theo chiều ngang

display: block

- luôn được xuống dòng và chiếm toàn bộ width nếu width không được set

display: inline-block:

- giống inline nhưng sẽ có thể set được đủ

Câu 5: Điểm khác biệt giữa width: auto và width: 100% ?

- auto se đủ độ và sẽ trừ đi toàn độ rộng của border, margin, padding
- 100% sẽ set độ rộng bằng thẻ cha và tự động nới ra thêm nếu có các border, margin

Câu 6: Sự khác biệt giữa attribute và property trong HTML?

- document của HTML chỉ có kn attribute của thẻ và không có property của thẻ, DOM có cả attribute và property
- attribute của của DOM phản ánh attribute của HTML.
- property của DOM được quy định bởi JS

Câu 7: Mô tả ngắn gọn cách sử dụng chính xác các phần tử ngữ nghĩa HTML5 sau: <header>, <article>, <section>, <footer> ?

- header: định danh phần đầu của web, chứa thông tin giới thiệu , logo, tác giả...

- article: dùng để xác định nội dung độc lập có thể được sử dụng một cách độc lập với phần còn lại của trâng web

- section: dùng để chia web thành các phần khác nhau, dùng để đại diện cho một chương hoặc một chủ đề trong web, nhóm các nội dung liên quan đến nhau

- footer: đinh danh phần cuối của một trang web, chứa thông tin về tác giả hoặc thông tin bản quyền, bao gồm các liên kết đến các trang hoặc nguồn tài liệu khác

Câu 8: Character Encoding là gì ?

- Để hiển thị trang HTML một cách chính xác, trình duyệt web phải biết bộ ký tự nào sẽ sử dụng
<meta charset="UTF-8">
