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
const mongoAtlasUri = "mongodb+srv://anhtbok:87654321@cluster0.i6xzm.mongodb.net/my_database?retryWrites=true&w=majority";

try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        mongoAtlasUri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose blog mindx is connected")
    );
} catch (e) {
    console.log("could not connect");
}
