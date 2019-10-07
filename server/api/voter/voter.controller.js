const Voter = require("../../models/Voter");

const getVoterBySessionName = (req, res) => {
    Voter.find({sessionName: req.params.sessionName}, function(err, data) {
        if (err) console.log(err);
        res.json(data);
      });
};

const addVoter = (req, res) => {
  const voter = new Voter({
    sessionName: req.body.sessionName,
    voterName: req.body.voterName,
    score: req.body.score,
    status: "Voted"
  });

  voter.save((err, data) => {
    if (err) console.log(err);
    res.json(data);
  });
};

// ********************* GET Modules *******************//
module.exports.getVoterBySessionName = getVoterBySessionName;
// ********************* GET Modules *******************//

// ********************* POST Modules *******************//
module.exports.addVoter = addVoter;
// ********************* POST Modules *******************//

