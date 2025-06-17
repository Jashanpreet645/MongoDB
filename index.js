const mongoose = require('mongoose');
const { Schema } = mongoose;
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
.then(() =>{
    console.log('successfully connected to database')
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
});

const user = mongoose.model('user',userSchema);
const Employee = mongoose.model('Employee', userSchema); 

// const user1 = new user({
//   name: 'John Doe',
//   email: 'johnwick@gmail.com',
//   age: 30,
// })

// user1.save();

// const user2 = new user({
//   name: 'Johnny',
//   email: 'Sins@gmail.com',
//   age: 13,
// })

// user2
// .save()
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.error('Error saving user:', err);
// });

// user.insertMany([
//   { name: 'Alice', email:'alice@gmail.com'},
//   { name: 'bob', email:'bob@gmail.com'},
//   { name: 'ram', email:'ram@gmail.com'}
// ])
// .then((res) => {
//   console.log('Multiple users inserted:', res);
// })
// .catch((err) => {
//   console.error('Error inserting multiple users:', err);
// });

// user.find({}).then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.error('Error fetching users:', err);
// });

// user.updateOne({name:"ram"}, {age: 6})
// .then((res) => {
//   console.log('User updated:', res);
// })
// .catch((err) => {
//   console.error('Error updating user:', err);
// });

 