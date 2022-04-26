const mongoose = require('mongoose')
const id = mongoose.Schema.Types.ObjectId

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },


    body: {
        type: String,
        required: true
    },
    authorId: {
        type: id,
        required: true,
        ref: "Author"

    },
    tags: [{
        type: String
    }],

    category: {
        type: String,
        required: true
    }, // {string, mandatory, examples: [technology, entertainment, life style, food, fashion] },

    subcategory: [{
        type: String
    }], // { array of string, examples[technology - [web development, mobile development, AI, ML etc]] },

    // createdAt: { timestamps: true },
    // updatedAt: { timestamps: true },
    // deletedAt: { timestamps: true },
    isDeleted: {
        type: Boolean,
        default: false
    },
    // publishedAt: { timestamps: true }, //// { when the blog is published },
    isPublished: {
        type: Boolean,
        default: false
    }


},{ timestamps: true })

module.exports = mongoose.model('Blogs', blogSchema)