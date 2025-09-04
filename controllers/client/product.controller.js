module.exports.index=(req, res) => {
    res.render("client/pages/products/index.pug", {
        title: "Trang Danh Sách Sản Phẩm"
    });
}