const mongoose = require('mongoose');
const graphql = require('graphql');
const Lyric = require('../models/lyric')

const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;

const LyricType = new GraphQLObjectType({
  name:  'LyricType',
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    song: {
      type: require('./song_type'),
      async resolve(parentValue){
        return await Lyric.findById(parentValue).populate('song')
          .then(lyric => {
            console.log(lyric)
            return lyric.song
          });
      }
    }
  })
});

module.exports = LyricType;
