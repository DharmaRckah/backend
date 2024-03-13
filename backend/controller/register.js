import userModel from "../models/userModel.js";

// export const registerController = async (req, res) => {
//   try {
//     const { name } = req.body;
//     if (name) {
//       console.log(name);
//       res.send(name);
//     }
//     console.log(name);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const registerController = async (req, res) => {
  try {
    const { email, name, mobile } = req.body;
    // console.log(email);
    // res.send(email);
    // const data = await userModel.create({ email, name, mobile });

    const data = await userModel.find({});
    if (data) {
      res.send(data);
    }
  } catch (error) {
    console.log(error);
  }
};
