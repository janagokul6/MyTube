import express from "express";
import { verifyToken } from "../verifyToken.js";
import {addVideo,addView, deleteVideo, getBySearch, getByTags, getVideo, randomVideo, subVideo, trendVideo, updateVideo  } from "../conrollers/video.js";
const router=express.Router();

router.post("/", verifyToken ,addVideo);
router.put("/:id", verifyToken ,updateVideo);
router.delete("/:id", verifyToken ,deleteVideo);
router.get("/find/:id" ,getVideo);
router.put("/view/:id", addView);
router.get("/trend", trendVideo);
router.get("/random", randomVideo);
router.get("/sub",verifyToken, subVideo);
router.get("/tags", getByTags);
router.get("/search", getBySearch);


export default router