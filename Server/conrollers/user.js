import User from "../models/User.js";
import Video from "../models/Video.js";


// update a user 
export const upadteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id,
                {
                    $set: req.body,
                }, { new: true });
            res.status(200).json(updatedUser)
        } catch (error) {
            next(error)
        }
    } else {
        return next(createError(403, "You can update only your account!"));
    }
}

// delete a user 
export const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted.");
        } catch (error) {
            next(error)
        }
    } else {
        return next(createError(403, "You can delete only your account!"));
    }

}


// get a user 
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        next(error)
    }
}


export const subscribe = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.params.id, {
            $push: { subscribedUsers: req.params.id },
        });

        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscribers: 1 },
        });
        res.status(200).json("Subscription successfull.")

    } catch (error) {
        next(error)
    }
}


export const unsubscribe = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.params.id, {
            $pull: { subscribedUsers: req.params.id },
        });

        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscribers: -1 },
        });
        res.status(200).json("unSubscription successfull.")

    } catch (error) {
        next(error)
    }
}


export const like = async (req, res, next) => {
    const id = req.user.id;
    const videoId = req.params.videoId;
try {
    await Video.findByIdAndUpdate(videoId,{
        $addToSet:{likes:id},
        $pull:{dislikes:id}
    })
    res.status(200).json("The video has been liked.")
    
} catch (error) {
    next(error)
}
}



export const dislike = async (req, res, next) => {
    const id = req.user.id;
    const videoId = req.params.videoId;
    try {
        await Video.findByIdAndUpdate(videoId,{
            $addToSet:{dislikes:id},
            $pull:{likes:id}
          })
          res.status(200).json("The video has been disliked.")
        
    } catch (error) {
        next(error)
    }
}