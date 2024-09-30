

const express = require("express");
const { getAllUsers, addUser, getUser, deleteUser, editUser } = require("../controllers/user.controller");

const router = express.Router();

// router.get("/get-users",getAllUsers) // this is also type of writting technique
router.route("/get-users").get(getAllUsers);
router.route("/add-user").post(addUser);
router.route("/get-user/:id").get(getUser);
router.route("/delete-user/:id").delete(deleteUser);
router.route("/edit-user/:id").put(editUser);


module.exports = router;