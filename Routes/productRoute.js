
const express = require('express');
const {authenticateUser,authorizePermissions} = require('../middleware/authentication')
const router = express.Router();
const {
    getAllProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
}= require('../controllers/productController');

// only admin can use these routes.
router.get('/',[authenticateUser, authorizePermissions('admin')], getAllProducts);
router.get('/:id',[authenticateUser, authorizePermissions('admin')], getSingleProduct);
router.post('/', [authenticateUser, authorizePermissions('admin')],createProduct);
router.patch('/:id',[authenticateUser, authorizePermissions('admin')], updateProduct);
router.delete('/:id',[authenticateUser, authorizePermissions('admin')], deleteProduct);

module.exports = router;