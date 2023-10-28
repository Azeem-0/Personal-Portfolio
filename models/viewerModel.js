require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.DB).then(() => {
    console.log("Connected!");
});
const viewerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    messages: [{
        message: String
    }]
});
viewerSchema.set('timestamps', true);
const viewerModel = mongoose.model("viewersResponse", viewerSchema);

module.exports = viewerModel;