import Student from "../models/StudentModel.js";
 
export const getStu = async (req, res) => {
    try {
        const students= await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 
export const getStuById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.json(student);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
export const getSearch = async (req, res) => {
    try {
        const student = await Student.findOne({'fid':req.params.fid});
        res.json(student);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
export const saveStu = async (req, res) => {
    const student = new Student(req.body);
    try {
        const inserteduser = await student.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        console.log("test")
        
        res.status(400).json({message: error.message});
      
    }
}
 
export const updateStu = async (req, res) => {
    try {
        const updateduser = await Student.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const deleteStu = async (req, res) => {
    try {
        const deleteduser = await Student.deleteOne({_id:req.params.id});
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}