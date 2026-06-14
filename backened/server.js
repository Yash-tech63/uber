const app = require("./src/app")
const http = require("http")
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const connectDB = require("./src/db/db");
connectDB();

server.listen(port, () => {
    console.log("server is running on port" + port);
})