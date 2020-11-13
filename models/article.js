const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String
    },
    markdown: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
articleSchema.pre('validate', function() {
    if(this.title) {
        this.slug = slugify(this.title, { lower: true, strict: true })
    }
});

module.exports = mongoose.model('Article', articleSchema)