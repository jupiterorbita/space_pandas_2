console.log('SERVER > MODELS > Product.js');
const mongoose = require("mongoose");


var ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please enter a name'],
    minlength: [3, 'name must be at least 3 characters'],
  },
  imgurl: {
    type: String,
    required: [true, 'enter imgUrl'],
    minlength: [1, 'name must be at least 1 character'],
  },
  price: {
    type: Number,
    required: true,
  },
  description:
    {
      type: String,
      required: true,
      minlength: [3, 'description must be at least 3 characters'],
    },
  qty: {
    type: Number,
    default: 1
  },
  likes: {
    type: Number,
    required: false,
    default: 0
  }
},
  { timestamps: true }
);

mongoose.model('Product', ProductSchema); //we are setting this schema in our models as Task