const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const StorySchema = Schema({
    sessionName: String,
    voterCount: Number,
    status: String,
    finalScore: String
});

module.exports = mongoose.model('story', StorySchema);