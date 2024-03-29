const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  value: String,
  label: String,
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;
