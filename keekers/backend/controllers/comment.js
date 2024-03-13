import { db } from "../connect.js"

export const insertComment = ( req, res)=>{

    const q = "INSERT INTO comments(`desc`, `createdAt`, `userId`, `postId`) VALUES(?)";
    
    const values = [req.body.desc, Date.now(), req.body.id, req.body.postId];

    db.query(q, [values], (err,data)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).json("Comment has been inserted.");
    });
};


export const getComments = ( req, res)=>{

    const q = "SELECT * FROM comments WHERE userId = ? AND postId = ?";
    
    var filter = [req.body.userId, req.body.postId];

    db.query(q, filter, (err,data)=>{
        if (err) return res.status(500).json(err);
        res.json(data);
    });
};