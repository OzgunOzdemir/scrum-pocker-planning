const Story = require('../../models/Story');

const addStory = (req, res) => {
  const story = new Story({
    sessionName: req.body.sessionName,
    voterCount: req.body.voterCount,
    status: "Not Voted"
  });

  story.save((err, data) => {
    if (err)
      console.log(err);
    res.json(data);
  })
}

// ********************* GET Modules *******************//
module.exports.addStory = addStory;
// ********************* GET Modules *******************//