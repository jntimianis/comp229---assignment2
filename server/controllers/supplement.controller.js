import User from "../models/user.model.js";
import Supplement from '../models/supplement.model.js'
import extend from "lodash/extend.js";
import errorHandler from "./error.controller.js";
const create = async (req, res) => {
  const supplement = new Supplement(req.body);
  try {
    console.log('controller.create() handling request')
    await supplement.save();
    console.log('controller.create() object created')
    return res.status(200).json({
      message: "Successfully created object!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const list = async (req, res) => {
  try {
    console.log('controller.list() handling request')
    let supplements = await Supplement.find(); // .select("name email updated created");
    console.log('controller.list() loaded data from db: ' + supplements.length)
    res.json(supplements);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const supplementById = async (req, res, next, _id) => {
  try {
    console.log('controller.supplementById() handling request: ' + _id)
    let supplement = await Supplement.findById(_id);
    console.log('controller.supplementById() found supplement:' + supplement)
    if (!supplement)
      return res.status("400").json({
        error: "Supplement not found",
      });
    req.profile = supplement;
    next();
  } catch (err) {
    return res.status("400").json({
      error: "Could not retrieve supplement",
    });
  }
};
const read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};
const update = async (req, res) => {
  try {
    let user = req.profile;
    user = extend(user, req.body);
    user.updated = Date.now();
    await user.save();
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const remove = async (req, res) => {
  try {
    let supplement = req.profile;
    let deletedSupplement = await supplement.deleteOne();
    res.json(deletedSupplement);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const removeAll = async (req, res) => {
  try {
    let deletedSupplements = await Supplement.deleteMany();
    res.json(deletedSupplements);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
export default { create, supplementById, read, list, remove, update, removeAll };
