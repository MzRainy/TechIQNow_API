const moment = require('moment');

// Define Mongoose
const { Schema, model } = require('mongoose');

const reactionSchema = require('./Reactions');

//  Define the shape of the documents within the collection.
const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: 'A thought is required',
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
      },
      username: {
        type: String,
        required: true,
      },
      reactions: [reactionSchema],
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );
  

  thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });
  
  // thoughtSchema is a new instance of the model
  const Thought = model('Thought', thoughtSchema);
  
  module.exports = Thought;
  