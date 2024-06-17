const express = require("express");
const {books} = require("../data/books.json");

const router = express.Router();

// route: /books
// method: get
// description: get all books
// access: public
// parameters: none
router.get("/",(req,res)=>{
    res.status(200).json({
        success: true,
        data: books,
    })
})

// route: /books/:id
// method: get
// description: get book by id
// access: public
// parameters: id

router.get('/:id',(req, res)=>{
    const {id} = req.params;
    const book = books.find((each)=> each.id==id);
    if(!book){
            return res.status(404).json({
                success: false,
                message: "Book not found"
        })
    }
    return res.status(200).json({
        success: true,
        data: book
    })
    
})

// route: /books
// method: post
// description: create or add new books
// access: public
// parameters: none

router.post("/",(req,res)=>{
    const {id,name,author,genre,price, publisher} = req.body;

    const book = books.find((each)=> each.id === id);
        if (book){
            return res.status(404).json({
                success: false,
                message: "book exist with the given id"
            })
        }
        books.push( {id,name,author,genre,price, publisher})
        return res.status(200).json({
            success: true,
            data: books,
        })

})

// route: /books/:id
// method: put
// description: Updating a book by their id
// access: public
// parameters: id

router.put("/:id",(req,res)=>{
    const {id} = req.params;
    const {data} = req.body;

    const book = books.find((each)=> each.id==id);

    if(!book){
        return res.status(404).json({
            success: false,
            message: "book not found"
        })
    }
    const updateBook = books.map((each)=>{
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
        data: updateBook
    })
})
router.delete("/:id",(req,res)=>{

    const {id} = req.params;
    

    const book = books.find((each)=> each.id==id);

    if(!book){
        return res.status(404).json({
            success: false,
            message: "book not found"
        })
    }
    const index = books.indexOf(book)
    books.splice(index,1);

    return res.status(200).json({
            success: true,
            data: book
    })
      
   
})





module.exports = router;
