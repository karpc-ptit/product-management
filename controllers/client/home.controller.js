module.exports.index=(req, res) => {
    res.render("client/pages/home/index.pug", { // chọn file sẽ render
        title: "Trang chủ"
    });
}