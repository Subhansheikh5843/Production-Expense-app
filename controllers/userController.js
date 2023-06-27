const userModel = require("../models/userModels");

//login calllback
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      res.status(404).send("user Not Found");
    }
    res.status(200).json({
      success:true,
      user
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

//register calllback

const registerController = async(req,res) => {
  try {
    const newUser = new userModel(req.body)
    await newUser.save();
    res.status(201).json({
      success:true,
      newUser
    });
    
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

module.exports = { loginController, registerController };
