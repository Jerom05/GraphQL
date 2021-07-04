const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LyricSchema = new Schema({
  song: {
    type: Schema.Types.ObjectId,
    ref: 'Song'
  },
  likes: { type: Number, default: 0 },
  content: { type: String }
});

LyricSchema.statics.like = function(id) {
  return Lyric.findById(id)
    .then(lyric => {
      ++lyric.likes;
      return lyric.save();
    })
}

const Lyric = mongoose.model('Lyric', LyricSchema);

module.exports = Lyric
