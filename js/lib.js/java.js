const products=[
{
    id:"sp01",
    name: "Chó cỏ",
    price: 1000000,
    description: "Biết giữ nhà, biết sủa, ăn ngày 3 chén cơm, tối ngủ",
    detail:"Chó cỏ Việt Nam rất trung thành, dễ nuôi, dễ trúng thưởng và thích hợp làm chó giữ nhà. Đặc biệt phải tiêm phòng hàng tháng hihi",
    image: "../assets/images/dog.jpg",
    link: "chitiet.html" // Đã sửa: Thêm giá trị hợp lệ ở đây thay vì để trống
},
 {
    id:"sp02",
    name: "Con mèo cute phô mai que",
    price: 2500000,
    description: "Meo meo tối ngày",
    detail:"Một bé mèo dễ thương với bộ lông mềm mại và đôi mắt tinh nghịch. Bé thích được vuốt ve, ngủ ở những nơi ấm áp và đôi khi sẽ đòi ăn bằng những tiếng meo meo đáng yêu.",
    image: "../assets/images/meo.jfif",
    link: "chitiet.html" // Đã sửa: Thêm giá trị hợp lệ ở đây thay vì để trống
},
{
    id:"sp03",
    name: "Một con capybara",
    price: 10000,
    description: "Capy chỉ biết ngủ rồi ăn",
    detail: "Capybara là loài gặm nhấm lớn nhất thế giới. Chúng nổi tiếng với tính cách điềm tĩnh, thân thiện với các loài động vật khác và thích ngâm mình trong nước để thư giãn.",
    image: "../assets/images/capy.jfif",
    link: "chitiet.html" // Đã sửa: Thêm giá trị hợp lệ ở đây thay vì để trống
},
{
    id:"sp04",
    name: "Bunny cuteeeee",
    price: 150000,
    description: "Nhảy lăng xăng",
    detail: "Chú thỏ với đôi tai dài và bộ lông mềm mượt luôn thích chạy nhảy khắp nơi. Bé rất thích cà rốt, rau xanh và những góc nhỏ yên tĩnh để nghỉ ngơi.",
    image: "../assets/images/bunny.jfif",
    link: "chitiet.html" // Đã sửa: Thêm giá trị hợp lệ ở đây thay vì để trống
},
];

function createItem(obj) {
    // 1. Xác định khung chứa 
    const listProducts = document.getElementById("products-list");
    if (!listProducts) return; // Bảo vệ code nếu không tìm thấy thẻ HTML


    // 2. Tạo container cha có class là item
    const item = document.createElement("div");
    item.setAttribute("class", "item");
    item.style.backgroundColor="rgba(147, 226, 100, 0.2)";

    item.style.padding = "20px";
    item.style.borderRadius = "10px";
    item.style.boxSizing = "border-box";
    // Flexbox cho chính item để đẩy nút "Xem chi tiết" luôn nằm dưới đáy bằng nhau
    item.style.display = "flex";
    item.style.flexDirection = "column";
    item.style.justifyContent = "space-between"; 
    item.style.alignItems = "center";
    item.style.textAlign = "center";
    item.style.flex = "1 1 calc(25% - 40px)"; // Chia đều 4 cột (trừ đi khoảng cách gap)
    item.style.minWidth = "220px"; // Đảm bảo trên màn hình nhỏ không bị quá bóp nghẹt

    // 3. Tạo khung chứa ảnh (Đã sửa class thành "image-box")
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "image-box");

    // Tạo ảnh
    const img = document.createElement("img");
    img.setAttribute("src", obj.image);
    img.setAttribute("alt", "ảnh con chó");
    img.setAttribute("style", "width: 100%; max-width: 150px; border-radius: 50%");
    img.setAttribute("style", "width: 120px; height: 120px; object-fit: cover; border-radius: 50%");
    
    // Đưa ảnh vào khung chứa ảnh
    containerImage.appendChild(img);

    // 4. Tạo container chứa thông tin sản phẩm (class="info")
    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "info");

    containerInfo.style.display = "flex";
    containerInfo.style.flexDirection = "column";
    containerInfo.style.flexGrow = "1"; // Giúp phần thông tin tự giãn đều
    containerInfo.style.justifyContent = "space-between";
    containerInfo.style.width = "100%";

    // Tạo <p> chứa tên sản phẩm
    const name = document.createElement("p");
    name.innerHTML = obj.name;

    // Tạo <p> chứa giá sản phẩm (Thêm format VNĐ cho đẹp)
    const price = document.createElement("p");
    price.innerHTML = obj.price.toLocaleString('vi-VN') + " đ";

    // Tạo <p> chứa mô tả
    const description = document.createElement("p");
    description.innerHTML = obj.description;

    // Tạo <a> chứa link chi tiết sản phẩm
    const linkProduct = document.createElement("a");
    linkProduct.innerHTML = "Xem chi tiết";
    linkProduct.innerText = " Xem chi tiết";
    linkProduct.href = `${obj.link}?masp=${obj.id}`;
    
    // Dùng luôn thuộc tính link từ object
    linkProduct.setAttribute("class", "btn btn-info");
    
    // Gán các thẻ con vào khung chứa info
    containerInfo.appendChild(name);
    containerInfo.appendChild(price);
    containerInfo.appendChild(description);
    containerInfo.appendChild(linkProduct);

    // 5. Thêm khung ảnh và khung info vào item cha
    item.appendChild(containerImage);
    item.appendChild(containerInfo);

    // 6. Thêm item vào list-product trên giao diện
    listProducts.appendChild(item);
}

// 7. Gọi hàm để hiển thị sản phẩm ra màn hình

function loadAllProducts(objArray)
{
    const listProducts = document.getElementById("products-list");

    listProducts.style.display= "flex";
    listProducts.style.gap= "40px";
    listProducts.style.flexWrap= "wrap";

    let i;
    for(i = 0; i<objArray.length; i++)
    {
        createItem (objArray[i]);
    }

}