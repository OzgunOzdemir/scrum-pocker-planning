const Story = require("../../models/Story");

const getStory = (req, res) => {
  Story.find({}, function(err, data) {
    if (err) console.log(err);
    res.json(data);
  });
};

const addStory = (req, res) => {
  const story = new Story({
    sessionName: req.body.sessionName,
    voterCount: req.body.voterCount,
    status: "Not Voted"
  });

  story.save((err, data) => {
    if (err) console.log(err);
    res.json(data);
  });
};

const updateStoryByStatus = (req, res) => {
  Story.findOneAndUpdate(
    req.params.id,
    { status: "Active" },
    (err, data) => {
      if (err) console.log(err);
      res.json(data);
    }
  );
};

// ********************* GET Modules *******************//
module.exports.getStory = getStory;
// ********************* GET Modules *******************//

// ********************* POST Modules *******************//
module.exports.addStory = addStory;
// ********************* POST Modules *******************//

// ********************* PUT Modules *******************//
module.exports.updateStoryByStatus = updateStoryByStatus;
// ********************* PUT Modules *******************//
