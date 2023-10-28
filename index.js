require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const viewerModel = require("./models/viewerModel");
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname + "/public")));
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname + "/public/views"));
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", async (req, res) => {
    res.render("index");
});

app.get("/about", async (req, res) => {
    res.render("about");
});

app.get("/projects", async (req, res) => {
    res.render("projects");
});

app.get("/skills", async (req, res) => {
    res.render("skills");
});

app.get("/tempSkills", async (req, res) => {
    res.render("tempSkills");
})

app.post("/", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const user = await viewerModel.findOne({ email: email });
        if (!user) {
            const newViewer = new viewerModel({
                name: name,
                email: email,
                messages: [{ message: message }]
            });
            newViewer.save();
        }
        else {
            await viewerModel.updateOne({ email: email }, { $push: { messages: { message: message } } });
        }
    }
    catch (error) {
        console.log(error.message);
    }
    res.redirect("/");
})
app.listen(port, () => {
    console.log("Listening!");
})