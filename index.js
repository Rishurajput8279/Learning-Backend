// import express from "express";
require('dotenv').config();
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const githubData={
  "login": "Rishurajput8279",
  "id": 148264967,
  "node_id": "U_kgDOCNZYBw",
  "avatar_url": "https://avatars.githubusercontent.com/u/148264967?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Rishurajput8279",
  "html_url": "https://github.com/Rishurajput8279",
  "followers_url": "https://api.github.com/users/Rishurajput8279/followers",
  "following_url": "https://api.github.com/users/Rishurajput8279/following{/other_user}",
  "gists_url": "https://api.github.com/users/Rishurajput8279/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Rishurajput8279/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Rishurajput8279/subscriptions",
  "organizations_url": "https://api.github.com/users/Rishurajput8279/orgs",
  "repos_url": "https://api.github.com/users/Rishurajput8279/repos",
  "events_url": "https://api.github.com/users/Rishurajput8279/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Rishurajput8279/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "RESHU JAYANT",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 18,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2023-10-17T17:20:59Z",
  "updated_at": "2025-09-03T18:22:17Z"
}
app.get('/github',(req,res)=>{
  res.json(githubData);
})
app.get('/twitter',(req,res)=>{
    res.send("RishuRajput");
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please Login in Chai Aur Code</h1>');
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
