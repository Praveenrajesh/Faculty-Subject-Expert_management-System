import Department from "../models/DepartmentModel.js";
 
export const getDep = async (req, res) => {
    try {
        const departments= await Department.find();
        res.json(departments);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 
export const getDepById = async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);
        res.json(department);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
export const saveDep = async (req, res) => {
    const department = new Department(req.body);
    try {
        const inserteduser = await department.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        console.log("test")
        
        res.status(400).json({message: error.message});
      
    }
}
 
export const updateDep = async (req, res) => {
    try {
        const updateduser = await Department.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const deleteDep = async (req, res) => {
    try {
        const deleteduser = await Department.deleteOne({_id:req.params.id});
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}