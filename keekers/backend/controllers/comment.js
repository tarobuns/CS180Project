import { db } from "../connect.js"

export const insertComment = ( req, res)=>{

    const q = "INSERT INTO comments(`desc`, `createdAt`, `userId`, `postId`) VALUES(?)";
    
    const values = [req.body.desc, Date.now(), req.body.id, req.body.postId];

    db.query(q, [values], (err,data)=>{
        if (err) return res.status(500).json(err);
        //return res.status(200).json("Comment has been inserted.");
        
        const r = "SELECT comments.*, users.username FROM comments INNER JOIN users ON comments.userId = users.id WHERE comments.postId = ?";
        
        var filter = [req.body.postId];

        db.query(r, filter, (err,data)=>{
            if (err) return res.status(500).json(err);
            //res.json(data);

            var result = [];

            for(var i = 0; i < data.length; i++) {
                result.push({id: data[i].id, description: data[i].description, name: data[i].username, userId: data[i].userId});
            }

            res.send(JSON.stringify(result));
        });
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