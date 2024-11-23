require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "jyotijais",
    "id": 164788548,
    "node_id": "U_kgDOCdJ5RA",
    "avatar_url": "https://avatars.githubusercontent.com/u/164788548?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jyotijais",
    "html_url": "https://github.com/jyotijais",
    "followers_url": "https://api.github.com/users/jyotijais/followers",
    "following_url": "https://api.github.com/users/jyotijais/following{/other_user}",
    "gists_url": "https://api.github.com/users/jyotijais/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jyotijais/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jyotijais/subscriptions",
    "organizations_url": "https://api.github.com/users/jyotijais/orgs",
    "repos_url": "https://api.github.com/users/jyotijais/repos",
    "events_url": "https://api.github.com/users/jyotijais/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jyotijais/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 10,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2024-03-24T18:27:21Z",
    "updated_at": "2024-09-23T15:50:04Z"
  }

app.get('/github' , (req, res)=>{
    res.json(githubData)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter' , (req , res) =>{
    res.send('jyoitdotcom')
})

app.get('/login' , (req , res)=>{
    res.send('<h1>please login at chai aur code</h2>')
})

app.get('/youtube', (req, res)=>{
    res.send('<h2>Chai aur code</h2>')
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})