import { db } from "../connect.js"

export const insertLike = ( req, res)=>{

    const q = "INSERT INTO likes(`userId`, `postId`) VALUES(?)";
    
    const values = [req.body.userId, req.body.postId];

    db.query(q, [values], (err,data)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).json("Like has been added.");
    });
};


export const getLike = ( req, res)=>{

    const q = "SELECT * FROM likes WHERE userId = ? AND postId = ?";
    
    var filter = [req.body.userId, req.body.postId];

    db.query(q, filter, (err,data)=>{
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("Did not like post.");
        res.status(200).json("Like post.");
    });
};


export const deleteLike = ( req, res)=>{

    const q = "DELETE likes WHERE userId = ? AND postId = ?";
    
    var filter = [req.body.userId, req.body.postId];

    db.query(q, [values], (err,data)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).json("Like has been deleted.");
    });
};