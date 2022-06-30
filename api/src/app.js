const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())

const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const knex = require('knex')(config)

app.get('/', (request, response) => {
    response.set("Access-Control-Allow-Origin", "*");
    response.status(200).send('App root route running congrats');
})


//fetches
{
    app.get('/users', (request, response) => {
        knex('users')
            .select('*')
            .then(users => {
                let responseData = users.map(user => (
                    { 
                        firstName: user.first_name, 
                        lastName: user.last_name,
                        username: user.username,
                        password: user.password,
                    }
                ));
        knex('post')
                response.status(200).send(responseData)
            })
    })


    app.get('/posts',  (req, res) => {
        knex('posts')
            .select('*')
            .then( posts => 
                 posts.map(post => (
                    {
                        user_id: (post.user_id),
                        title: post.title,
                        content: post.content,
                    }
                ))  
            )
            .then(responseData => res.status(200).send(responseData))
    })
    
    app.get('/posts/getusername', (req,res)=>{//converts a userID into a username
        let {user_id}= req.body;
        knex('users')
            .select("*")
            .where({id: user_id})
            .then(data=> {
                res.status(200).send({username:data[0].username})
            })
    })
    app.get('/posts/getuserid', (req,res)=>{//converts a userID into a username
        let {username}= req.body;
        
        knex('users')
            .select("*")
            .where({username: username})
            .then(data=> {
                res.status(200).send({user_id:data[0].id})
            })
    })
    app.get('/user/posts',(req,res)=>{//gets posts only from a certain user
        //we will need to filter through our posts and match the ids
        let {user_id}=req.body
        knex('posts')
            .select("*")
            .where({user_id: user_id})
            .then(data=> {
                res.status(200).send(data)
            })
    })

    
    

}


//create
{
    app.post('/posts', (req, res) => {
        // console.log("\n\nHere is the req body",req.body,"\n\n")
        let{title,content,user_id} = req.body
        knex('posts')
            .insert(    
                {
                    title:title?title:"no title",
                    content:content?content:"no content",
                    user_id:user_id
                }
            )
            .then(data=> {return res.end("success")})
            .catch(err=>{
                return res.end("invalid user_id")
            })
            
        
    }) 

     app.post('/users', async (req, res) => {
            // "first_name": "bobby",
            // "last_name": "jenkins",
            // "username": "fartyboy",
            // "password": "farty2x4",
        let {first_name,last_name,username,password}=req.body
        let values = {first_name,last_name,username,password}
        await knex('users')
            .insert({...values})
            .catch(err=>res.end('new user made!'))
            .then(res.status(200).send('new user made!'))
     }) 

}


//update
{
    app.patch('/users', (req, res) => {
        let {first_name,last_name,username,new_user_name,password,id} = req.body
        knex('users')
            .select("*")
            .where({ username: username })
        .then(data => //this gives us access to the old data so we don't overwrite anything
            knex('users')//we don't neccesarly know what database we are in anymore so we open a new instance
                .where({username:username})
                .update(
                    {//this makes it harder for malicious users to add their own data to their account
                        first_name:first_name?first_name:data.first_name,
                        last_name:last_name?last_name:data.last_name,
                        username:(new_user_name?new_user_name:username),
                        password:password?password:data.password,
                        id:id?id:data.id,
                    })
                .then(console.log("Things updated smooth"))
                .then(res.status(200).send('patched!'))
        )
        })

    app.patch('/posts', async (req, res) => {
        let {title,content,user_id,post_id,new_post_id} = req.body
        await knex('posts')
            .select("*")
            .where({id: post_id})
        .then(async data =>{ //this gives us access to the old data so we don't overwrite anything
            return await knex('posts')//we don't neccesarly know what database we are in anymore so we open a new instance
                .update(
                    {//this makes it harder for malicious users to add their own data to their posts
                        title:title?title:data.title,
                        content:content?content:data.content,
                        id:(new_post_id?new_post_id:post_id),
                        user_id:user_id?user_id:data.user_id,
                    })
                    .where({id:post_id})
                .catch(err=>res.send("Something went wrong"))
                
        })
        })

}


//delete
{
app.delete('/users', async (req, res) => {
    
    await knex('users')
        .del(["*"])
        .where({username: req.body.username}) 
        .then(res.end( req.body.username+' has been deleted!'))
    })

app.delete('/posts',  async (req, res) => {

    console.log("Attempting to delete data",req.body)
    knex('posts')
        .where({id: req.body.post_id})
        .then((data)=>res.end("'"+data[0].title+"' has been deleted!"))
    await knex('posts')
        .del(['*'])
        .where({id: req.body.post_id})
        
    })
}


//validate login
{
    app.get('/login', (req, res) => {
        knex('users')
            .select(["*"])
            .where({username:req.body.username,password:req.body.password})
            .then(users => {
                let responseData = users.map(user => (
                    { 
                        login:"true"
                    }
                ));
        knex('post')
                res.status(200).send(responseData)
            })
    })
}
module.exports = app;

