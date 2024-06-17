const express = require("express");
const {users} = require("../data/users.json");

const router = express.Router();
// route: /users
// method: get
// description: get all users
// access: public
// parameters: none
router.get("/",(req,res)=>{
    res.status(200).json({
        success: true,
        data: users,
    })
})

// route: /users/:id
// method: get
// description: get user by id
// access: public
// parameters: id

router.get('/:id',(req, res)=>{
    const {id} = req.params;
    const user = users.find((each)=> each.id==id);
    if(!user){
            return res.status(404).json({
                success: false,
                message: "user not found"
        })
    }
    return res.status(200).json({
        success: true,
        data: user
    })
    
})

// route: /users
// method: post
// description: create or add new user
// access: public
// parameters: none

router.post("/",(req,res)=>{
    const {id,name,surname,email,subscriptionType, subscriptionDate} = req.body;

    const user = users.find((each)=> each.id === id);
        if (user){
            return res.status(404).json({
                success: false,
                message: "User exist with the given id"
            })
        }
        users.push({id, name, surname, email, subscriptionType, subscriptionDate})
        return res.status(200).json({
            success: true,
            data: users,
        })

})

// route: /users/:id
// method: put
// description: Updating a user by their id
// access: public
// parameters: id

router.put("/:id",(req,res)=>{
    const {id} = req.params;
    const {data} = req.body;

    const user = users.find((each)=> each.id==id);

    if(!user){
        return res.status(404).json({
            success: false,
            message: "user not found"
        })
    }
    const updateUser = users.map((each)=>{
        if(each.id===id){
            return {
                ...each,
                ...data
            }
        }
            return each;
            
       
    })
    return res.status(200).json({
        success: true,
        data: updateUser
    })
})

// route: /users/:id
// method: delete
// description: delete a user by their id
// access: public
// parameters: id

router.delete("/:id",(req,res)=>{
    const {id} = req.params;
    

    const user = users.find((each)=> each.id==id);

    if(!user){
        return res.status(404).json({
            success: false,
            message: "user not found"
        })
    }
    const index = users.indexOf(user)
    users.splice(index,1);

    return res.status(200).json({
            success: true,
            data: user
    })
      
   
})

module.exports = router;




