import express from "express";
import { 
    getUsers, 
    getUserById,
    saveUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js";
import { 
    getStu,
    getStuById,
    saveStu,
    updateStu,
    deleteStu,
    getSearch
    
    } from "../controllers/StudentController.js";

import { getDep,
        getDepById,
        saveDep,
        updateDep,
        deleteDep
    } from "../controllers/DepartmentController.js"
 
const router = express.Router();
 
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', saveUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.get('/subject', getStu);
router.get('/subject/:id', getStuById);
router.get('/subject/search/:fid', getSearch);
router.post('/subject', saveStu);
router.patch('/subject/:id', updateStu);
router.delete('/subject/:id', deleteStu);
router.get('/department', getDep);
router.get('/department/:id', getDepById);
router.post('/department', saveDep);
router.patch('/department/:id', updateDep);
router.delete('/department/:id', deleteDep);
 
export default router;