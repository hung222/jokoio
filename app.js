var express = require("express");
var app = express();
app.set("view engine", "pug");
app.set("views", "./views");
app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running on port ${process.env.PORT}`);
})

app.get("/", function(req, res){
    res.render("trangchu");
});
