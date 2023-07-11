/* Name, Description, Price, Color, Condition, Category, Size, Seller (User), CreatedAt */
const { Schema, model } = require('mongoose');

const listingSchema = new Schema(
    {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
            required: true
        },
        color: {
            type: String
        },
        condition: {
            type: String,
        },
        size: {
            type: String,
        },
        seller: {
            type: String,
            ref: 'User'
        },
        createdAt: {
            type: Date,
        },
        category_id: {
            type: Number,
            ref: 'Category'
        },
        image: String
    }
)

const Listing = model('Listing', listingSchema);

module.exports = Listing;

