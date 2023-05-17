const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    appid: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    short_description: {
        type: String,
        required: true
    },
    developer: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    tags: {
        type: Map,
        of: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    categories: {
        type: [String],
        required: true
    },
    owners: {
        type: String,
        required: true
    },
    positive: {
        type: Number,
        required: true
    },
    negative: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    initialprice: {
        type: String,
        required: true
    },
    discount: {
        type: String,
        required: true
    },
    ccu: {
        type: Number,
        required: true
    },
    languages: {
        type: String,
        required: true
    },
    platforms: {
        type: {
        windows: {
            type: Boolean,
            required: true
        },
        mac: {
            type: Boolean,
            required: true
        },
        linux: {
            type: Boolean,
            required: true
        }
        },
        required: true
    },
    release_date: {
        type: Date,
        required: true
    },
    required_age: {
        type: Number,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    header_image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Game', gameSchema);