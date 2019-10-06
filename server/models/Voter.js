const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const VoterSchema = Schema({
    sessionName: String,
    voterName: String,
    score: String,
    status: String
});

module.exports = mongoose.model('voter', VoterSchema);