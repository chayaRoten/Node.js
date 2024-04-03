const mongoose = require('mongoose');
const mongoDB = "mongodb://localhost:27017/yad2";
mongoose.set("strictQuery", false);
main().catch((err) => console.log(err));
async function main() {
    console.log(`mongodb on http://localhost:27017/yad2`)
    await mongoose.connect(mongoDB);
}

 module.exports = main;


