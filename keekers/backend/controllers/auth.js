import { db } from "../connect.js"
import bcrypt from "bcryptjs";

export const Register = ( req, res)=>{
    
    const q = "SELECT FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err,data)=>{
        if (err) return res.status(500).json(err)
        if (data.length) return res.status(409).json("User already exists!")
    })

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt)

}

export const Login = ( req, res)=>{

}


export const Logout = ( req, res)=>{
    
}