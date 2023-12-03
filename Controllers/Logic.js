const admins = require("../Models/admincollection");
const packages = require("../Models/packages");
const users = require("../Models/usercollection");
//logic for admin register

const adminSignup = async (req, res) => {
  //destructure body data
  const { email, psw, conpsw } = req.body;
  //check all fields are empty or not
  if (!email || !psw || !conpsw) {
    res.status(400).json("all fields are required");
  } else {
    try {
      //to resolve runtimee errors use try & catch block
      let preAdmin = await admins.findOne({ email });
      if (preAdmin) {
        res.status(400).json("Allready Exist");
      } else {
        //create object for new admin
        let newAdmin = new admins({ email, psw, conpsw });
        if (psw == conpsw) {
          //save new admin
          await newAdmin.save();
          res.status(200).json(newAdmin);
        } else {
          res.status(401).json("password are not matching");
        }
      }
    } catch {
      res.status(400).json("connection error");
    }
  }
};
//logic for admin login
const adminLogin = async (req, res) => {
  //destructure body
  const { email, psw } = req.body;
  if (!email || !psw) {
    res.status(400).json("all fields are required");
  } else {
    try {
      const admin = await admins.findOne({ email, psw });

      if (admin) {
        res.status(200).json(admin);

      } else {
        res.status(404).json("incorrect data");
      }
    } catch {
      res.status(400).json("connection error");
    }
  }
};
//logic for  user booking
const travelbooking = async (req, res) => {
  //destructure data
  const { username, email, phonenum, location, days, fromdate, todate } =
    req.body;
  let booking = { username, email, phonenum, location, days, fromdate, todate };
   try{
  await users.create(booking).then((result, error) => {
    if (result != "null" && result != "") {
      res.send(result);
    } else res.send("error", error);
  });
  }catch{
      res.send("connection error")
  }
}

//logic for get all booking details
const bookingDetails = async (req, res) => {
  try {
    const data = await users.find();
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(400).json("No data found");
    }
  } catch (error) {
    res.status(400).json("connection error", error);
  }
};
//logic for add packages
const addPackages = async (req, res) => {
  //variable to store image
  const profile = req.file.filename;
  //destructure input data
  const { place, description, num, sdate, edate, rate } = req.body;
  let package = { place, description, num, sdate, edate, rate, profile };
  try{
  await packages.create(package).then((result, error) => {
    if (result != "null" && result != "") {
      res.send(result);
    } else res.send("error", error);
  });
  }catch{
      res.send("connection error")
  }
};
// get all packages
const getAllPackages = async (req, res) => {
  try {
    const data = await packages.find();
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(400).json("No data found");
    }
  } catch (error) {
    res.status(400).json("connection error", error);
  }
};
//get package single view
const getSinglePackage = async (req, res) => {
   try {
  const { id } = req.params;
  const pack = await packages.findOne({ _id: id });
  if (pack) {
    res.status(200).json(pack);
  } else {
    res.status(404).json("packages not found");
  }
  } catch {
    res.status(400).json("connection error");
  }
}
module.exports = {
  adminSignup,
  adminLogin,
  travelbooking,
  bookingDetails,
  addPackages,
  getAllPackages,
  getSinglePackage,
};
