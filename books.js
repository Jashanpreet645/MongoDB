const mongoose = require('mongoose');
const { Schema } = mongoose;
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
.then(() =>{
    console.log('successfully connected to database')
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new Schema({
    title: {
        type:String,
        require:true
    },
    author: {
        type:String
    },
    price: {
        type:Number,
        min:[1,"Price is too LOW for Amazon selling"]
    },
    genre: [String]
})

const Book = mongoose.model ("Book",bookSchema);

// let book1 = new Book({
//     title:"One Piece",
//     price:50000,
//     genre:["action","comedy","emotion"]
// })

// book1.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

Book.findByIdAndUpdate("6852a406aef9eb56827d183a",{price:-100},{runValidators:true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.price.message);
});