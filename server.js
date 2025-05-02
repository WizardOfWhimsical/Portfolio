import express from "express";
import morgan from "morgan";
import config from "#config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static("./public"));

app.listen(config.port, () => {
    console.log(`Listenin @ ${config.port}`)
})


app.use((req, res, next) => {
    res.status(404).send("404: Page Not Found, Sorry")
})