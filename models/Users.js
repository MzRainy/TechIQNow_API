const { Schema, model } = require('mongoose');

//  Define the documents within the collection.
const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
      },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );
  
  // Create a virtual property `friendCount` that gets the amount of friends
  userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });
  
    // userSchema is the new instance of the model
  const User = model('User', userSchema);
  
  module.exports = User;