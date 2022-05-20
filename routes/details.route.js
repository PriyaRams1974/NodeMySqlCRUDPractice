const express = require('express');
const { Op } = require('sequelize');
const router = express.Router()
const details = require('../models/mysql.model')


router.post("/addTheDetails",async(req,res)=>{
   try {
       console.log("addTheDetails");
    //    const datas = new details(req.body);
    //    const data = await datas.save();
       const result = await details.create(req.body);
    return res.json({"status":"success", "message":"details added successfully!!!","data":result});
   }catch(error){
    return res.json({"status":"failure", "message":"failed to add details"})
   }
})
//get all details
router.get("/fetchDetails",async(req,res)=>{
    try {
        const datas = await details.findAll();
        if (datas.length > 0) {
           return res.json({"status":"success", "message":"details fetched successfully!!!","data":datas});
        }else{
            return res.json({"status":"failure", "message":"No details found"})
 
        }
    }catch(error){
     return res.json({"status":"failure", "message":"failed to add details"})
    }
 })

 //get the details based on Primary key
router.get("/fetchTheDetailsBasedPK",async(req,res)=>{
    try {
        const datas = await details.findByPk(req.query.id);
        console.log("Individual data",datas.dataValues)
        if (datas) {
           return res.json({"status":"success", "message":"Individual detail using Primary key fetched successfully!!!","data":datas.dataValues});
        }else{
            return res.json({"status":"failure", "message":"No details found"})
 
        }
    }catch(error){
     return res.json({"status":"failure", "message":"failed to add details"})
    }
 })

 //get the details based on condition
router.get("/getTheDetailsCondition",async(req,res)=>{
    try {
        const datas = await details.findAll({
            where:{
                name:req.query.username
            }
        });
        if (datas.length > 0) {
           return res.json({"status":"success", "message":"detail fetched successfully!!!","data":datas});
        }else{
            return res.json({"status":"failure", "message":"No details found"})
 
        }
    }catch(error){
     return res.json({"status":"failure", "message":"failed to add details"})
    }
 })

 //get individual detail based on condition
router.get("/getIndividualDetail",async(req,res)=>{
    try {
        const datas = await details.findOne({
            where:{
                name:req.query.username
                // id: {[Op.in] : [1,3]}
            }
        });
        console.log("Individual data",datas.dataValues)
        if (datas) {
           return res.json({"status":"success", "message":"Individual detail fetched successfully!!!","data":datas.dataValues});
        }else{
            return res.json({"status":"failure", "message":"No details found"})
 
        }
    }catch(error){
     return res.json({"status":"failure", "message":"failed to FETCH details"})
    }
 });

 //delete the details based on condition
router.delete("/deleteTheDetail",async(req,res)=>{
    try {
        const datas = await details.destroy({
            where:{
                name:req.query.name
            }
        });
        console.log("detail ==>",datas)
        if (datas == 0) {
           return res.json({"status":"success", "message":"detail deleted successfully!!!","data":datas});
        }else{
            return res.json({"status":"failure", "message":"No details found"})
 
        }
    }catch(error){
     return res.json({"status":"failure", "message":"failed to add details"})
    }
 });

 //update the detail based on condition
router.put("/updateTheDetail",async(req,res)=>{
    try {
        let condition = {where: {
            name:req.body.username,
 
        }}
        let updateData = {
            name: req.body.newusername,
            // details : req.body.details
        }
        const data = await details.update(updateData, condition)
        console.log("data==>",data)
           return res.json({"status":"success", "message":"detail updated successfully!!!","data":data});
    }catch(error){
     return res.json({"status":"failure", "message":"failed to update details"})
    }
 });

 module.exports = router;