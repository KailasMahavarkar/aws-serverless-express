import cors from "cors";
import express, { Request, Response } from "express";
import compression from "compression";
import { getCurrentInvoke } from "@vendia/serverless-express";

const app = express();
const router = express.Router();

router.use(compression());
router.use(cors());
router.use(express.urlencoded({ extended: true }));
router.use(express.json({ limit: "10mb" }));

router.get("/ping", (req: Request, res: Response) => {
	return res.json({
		msg: "pong",
	});
});

app.use("/", router);

export { app };
