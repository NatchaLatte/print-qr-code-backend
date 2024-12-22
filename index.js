import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import sequelize from "./models/connect.js";
import StickerSizeRoutes from "./controllers/c_sticker_size.js";
import ProductionLineRoutes from "./controllers/c_production_line.js";
import ProductionProcessesRoutes from "./controllers/c_production_processes.js";
import dayjs from "dayjs";

const app = express();
const port = process.env.PORT || 3000;

const whitelist = ["http://localhost:3000"];
let corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST"],
  credentials: true,
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(compression());
app.use(express.json());
app.disable("x-powered-by");

app.use("/api", StickerSizeRoutes);
app.use("/api", ProductionLineRoutes);
app.use("/api", ProductionProcessesRoutes);

app.get("/api/health", (req, res) => {
  res.status(200).send({
    status: "OK",
    timestamp: dayjs().format(),
  });
});

const server = app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Connection has been established successfully.");
    console.log(
      `[server] Server is running at http://localhost:${port} when ${dayjs().format(
        "YYYY-MM-DD"
      )}`
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
});

const gracefulShutdown = async (signal) => {
  console.log(`${signal} signal received: closing HTTP server`);
  await sequelize.close();
  server.close(() => {
    console.log("HTTP server closed");
  });
};

process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT", () => gracefulShutdown("SIGINT"));