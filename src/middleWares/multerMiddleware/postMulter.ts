import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({});

export const postUpload = multer({
  storage: storage,
});
