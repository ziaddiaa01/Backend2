<<<<<<< HEAD:DB/model/book.model.js
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    name: { type: String, required: false },
    author: { type: String, required: false },
    genre: { type: String, required: false },
    publishedDate: { type: Date, required: false },
    price: { type: Number, required: false },
    description: { type: String, required: false },
    coverImage: { type: String, required: false },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
}, { timestamps: true });

const bookModel = mongoose.model('Book', bookSchema);
=======
import  { model, Schema, Types } from 'mongoose';

const bookSchema = new Schema({
    title: { type: String},
    author: { type: String,},
    genre: { type: String, },
    publishedDate: { type: Date,
        default: Date.now
    },
    price: { type: Number,
        default:0
    },
    stock:{
        type:Number
    },
    description: { type: String },
    coverImage: { type: Object  },
    createdBy: { type: Types.ObjectId, ref: 'User' },
}, { timestamps: true });

const bookModel = model('Book', bookSchema);
>>>>>>> cb57dd93db784ee05bab7bdcb983cbf62735e45f:BackEnd/DB/model/book.model.js

export default bookModel;
