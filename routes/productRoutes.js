const controller =require("../controllers/productController")
const upload=require("../middlewares/imageMiddleware")
const protected=require("../middlewares/adminMiddleware")
const searchController=require("../controllers/searchController")

const express=require("express")
const router=express.Router()

router.post("/add-product",protected.adminMiddleware,upload.single("image"),controller.createProduct)
router.get("/show-products",controller.getProducts)
router.get("/search",searchController.searchProducts)
router.get("/:id",controller.productById)


module.exports=router