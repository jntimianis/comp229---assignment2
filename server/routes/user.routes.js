import express from 'express'
 import userCtrl from '../controllers/user.controller.js'
 import supplementController from '../controllers/supplement.controller.js' 
 const router = express.Router()
 // router.route('/api/users').post(userCtrl.create)
 // router.route('/api/users').get(userCtrl.list)
 // router.param('userId', userCtrl.userByID)
 // router.route('/api/users/:userId').get(userCtrl.read)
 // router.route('/api/users/:userId').put(userCtrl.update)
 // router.route('/api/users/:userId').delete(userCtrl.remove)

 // assignment code
 router.param('_id', supplementController.supplementById)
 router.route('/store/supplements').get(supplementController.list)
 router.route('/store/supplements/:_id').get(supplementController.read)
 router.route('/store/supplements').post(supplementController.create)
 router.route('/store/supplements').delete(supplementController.removeAll)
 router.route('/store/supplements/:_id').delete(supplementController.remove)
 export default router


// localhost:3000/api/users
// GET, POST, PUT, PATCH, DELETE


// localhost:3000/api/users POST
// localhost:3000/api/createUser localhost:3000/api/users POST
// localhost:3000/api/getUsers -> localhost:3000/api/users GET
// localhost:3000/api/getUserById -> localhost:3000/api/users/12 GET
// localhost:3000/api/updateUser
// localhost:3000/api/deleteUsers
// localhost:3000/api/deleteUserById

// router.route('/store/supplements').

// localhost:3000/api/clients