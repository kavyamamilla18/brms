# book record management system

## routes and endpoints
### /users
post: creating a new user
get: get the list of all users

### /users/{id}
get: get a user by id
put: update a user by id
delete: delete a user by id(check if he/she has an issued book)(also need to make sure he?she has no penalty)

### /users/subscription-details/{id}
get: get user subscription details
        >>date of the subscription
        >> till when it is valid
        >> fine if any
### /books
get: get all books
post: creating or adding new book

### /books/{id}
get: getting a book by id
put: update a book by id

### /books/issued
get: get all issued books

### /books/issued/withfine
get: get all issued books with fine

# subscription
        >> basic(3 mon)
        >> standard(6 mon)
        >> premium(1 yr)

## code:
        >> npm init
        >> npm i express
        >>npm i nodemon --save-dev

        
