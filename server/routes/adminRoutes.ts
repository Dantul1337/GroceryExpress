import express from "express"
import admin from "../middleware/admin.js"
import auth from "../middleware/auth.js"
import { assignDeliveryPartner, createDeliveryPartner, getAdminStats, getDeliveryPartners, updateDeliveryPartner } from "../controllers/adminController.js"
import { updateOrderStatus } from "../controllers/orderController.js"

const adminRouter = express.Router()

adminRouter.get('/stats', auth, admin, getAdminStats)
adminRouter.get('/delivery-partners', auth, admin, getDeliveryPartners)
adminRouter.post('/delivery-partners', auth, admin, createDeliveryPartner)
adminRouter.put('/delivery-partners/:id', auth, admin, updateDeliveryPartner)
adminRouter.put('/orders/:id/assign', auth, admin, assignDeliveryPartner)
adminRouter.put("/orders/:id/status", auth, admin, updateOrderStatus);

export default adminRouter