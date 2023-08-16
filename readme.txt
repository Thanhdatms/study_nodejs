for (let word of ["zero", "one", "two"]) {
    setTimeout(() => console.log(word), 1000);
}

khi dùng let hoặc const sẽ tạo ra một instance cho từng block được thực thi
còn var thì tất cả trỏ về block được thực thi cuối cừng đều trỏ về instance cuối cùng






BUILT_IN MODULES
    OS
    PATH
    FS
    HTTP

FS
Về vấn đề read file
có hai dạng read file: 
    1. readFileSync: là phương thức tuần tự gọi là phương thức 
        đồng bộ => sẽ đọc tuần tự 
    2. readFile: là phương thức bất đồng bộ => cần thêm hàm callback
    để xử lí dữ liệu khi đã được đọc xong


About NPM
packet.json: store important information info about the project
npm init: step by step, press enter to skip
npm init -y : default you can come and change it later


dependencies trong file json cho phép để lưu trữ những thư viện ngoài
có thể là những thư viện mã nguồn mở như lodash  hay bootstrap


khi clone folder về máy sẽ xay ra trường hợp thiếu các thư viện được download
về khi đó dùn npm install
Bởi vì khi share node_modules sẽ có thế xảy ra lỗi

nodemon restart my app 



            PROMISE được sinh ra thì bản ES6

Promise nhận hai tham số resolve và reject
promise có 3 trạng thái 
1. Pending
2. Fulfilled
3. reject

// Promise => trả về ba phương thức
// khi results = > then
// khi reject => catch
// khi một trong hau thì finally cũng đc gọi


------------HTML DOM--------------
Gồm 3 thành phần cũng được gọi là các Node Document Oject Model
    1. Element: các thành phần trong 
    2. Attribute: các thuộc tính nằm trong thẻ ví dụ src =" "
    3. Text

-- 1 Element
    ID, class, tag name, CSS selector, HTML selection
    getElementById           tra ve elemrnt
    getElementsByClassName  html colection
    getElementsByTagName    html colection
    querySelector          => tra ve element
    querySelectorAll       nodelist

==> để giải quyết hiện tượng bất đồng bộ cung cấp hai phướng thức
    promise async/await

    async là một từ khóa trong javascript được sử dụng định nghĩa một hàm 
    bất đồng bộ async tạo ra một hàm trả về một Promise cho phép sử dụng await để 
    chờ Promise 

    Có nghĩa khi gọi tới hàm async dùng awite sẽ dùng việc thực thi của hàm async
    cho đến khi nhận được promise


util để chuyển đổi các hàm bất đồng bộ thành promise



----------STREAMS--------------
    Streams vaf buffer sex chia dữ liệ thành từng phần khác nhau để đọc hoặc ghi
    có thể modifier dữ liệu bằng cách định nghĩa highMarkWater 
1. writeable
2.Readable
3. duplex
4. Transform