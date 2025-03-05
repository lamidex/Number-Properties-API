import express from "express";
import { numberHandler} from "../handler/number.handler.js";

const router = express.Router();

// Number properties endpoint
router.get('/:num', numberHandler);

export default router;