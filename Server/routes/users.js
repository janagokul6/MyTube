import express from "express";
import { verifyToken } from "../verifyToken.js";
import {
    upadteUser,
    deleteUser,
    getUser,
    subscribe,
    unsubscribe,
    like,
    dislike,
  } from "../conrollers/user.js";

const router=express.Router();


// update user 
router.put("/:id",   verifyToken, upadteUser);

// get a User
router.get("/find/:id",getUser);

// delete the User
router.delete("/:id",  verifyToken, deleteUser);

// subscribe a user 
router.put("/sub/:id",  verifyToken, subscribe);

// unsubscribe a user 
router.put("/unsub/:id",  verifyToken, unsubscribe);

// like a video 
router.put("/like/:videoId",  verifyToken, like);

// dislike a video 
router.put("/dislike/:videoId",  verifyToken, dislike);

export default router