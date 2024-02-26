import express from 'express';
import  upload  from '../upload.js';
import { postImage,getAllImages} from '../controller/imagecontroller.js';

const router = express.Router();

router.post('/postimage', upload.single('image'), postImage);
router.get('/getimage', getAllImages);



export default router;
