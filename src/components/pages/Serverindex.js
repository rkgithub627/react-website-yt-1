import React, {useEffect, useState} from 'react';

const express = require("express");
const app=express();
app.get("/", ((req, res) => {
    res.json("hello this is serverside")

})
)

const db = mysql80.createConnection({
    host:"localhost",
    user:"root",
    password:"Pandit12$",
    database:"mounteverestcomputech"
})

app.get("/aboutus", (req, res) => {
    const q = "SELECT * FROM aboutus"
    db.query(q,(err,data)=>{
        if(err)return res.json(err)
        return res.json(data)
    })
    app.post("/aboutus", (req, res) => {
        const q = "INSERT INTO aboutus(`title`,`discription`,`service`) VALUES (?)"
        const values = ["title from Serverindex.js",
        "discription from Serverindex.js",
        "service from Serverindex.js",
    ];

    db.query(q,[values],(err,data) =>{
        if(err)return res.json(err)
        return res.json(data) ; 
    })
});


app.listen(3001, () =>{
    console.log("Connected to Serverindex.js")
}
)
