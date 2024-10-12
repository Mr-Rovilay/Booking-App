import express from 'express';
import { forgotPassword, login, logout, resetPassword, signup, verifyEmail } from '../controllers/authControllers.js';
const router = express.Router();
import multer from 'multer';


const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
})

const upload = multer({ storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // Limit file size to 2MB
	fileFilter: (req, file, cb) => {
		const filetypes = /jpeg|jpg|png|gif/; // Allowed file types
		const mimetype = filetypes.test(file.mimetype);
		if (mimetype) {
			return cb(null, true);
		}
		cb(new Error("Invalid file type. Only JPEG, JPG, PNG, and GIF are allowed."));
	}
 });


router.post("/register",upload.single("profileImage"), signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

export default router