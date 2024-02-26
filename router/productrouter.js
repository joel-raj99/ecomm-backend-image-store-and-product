import express,{Router} from'express';
import { createProduct, getProduct, getProducts ,updateProduct, deleteProduct} from '../controller/productController.js';

const router = Router();

// create all product

router.route('/createProduct').post(createProduct);

// get all products 
router.route('/getProducts').get(getProducts);
// get single product

router.route('/getProduct/:id').get(getProduct);

// update product
router.route('/updateProduct/:id').put(updateProduct);

// delete product
router.route('/deleteProduct/:id').delete(deleteProduct);

export default router