const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');

const Song = require('../models/song')
const Lyric = require('../models/lyric')

const SongType = require('./song_type');
const LyricType = require('./lyric_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    
    addSong: {
      type: SongType,
      args: {
        title: { type: GraphQLString }
      },
      async resolve(parentValue, { title }) {
        return (await new Song({ title })).save()
      }
    },

    addLyricToSong: {
      type: SongType,
      args: {
        content: { type: GraphQLString },
        songId: { type: GraphQLID }
      },
      async resolve(parentValue, { content, songId }){
        return await Song.addLyric(songId, content);
      }
    },

    likeLyric: {
      type: LyricType,
      args: { id: { type: GraphQLID } },
      async resolve(parentValue, { id }){
        return await Lyric.like(id);
      }
    },

    deleteSong: {
      type: SongType,
      args: { id: { type: GraphQLID } },
      async resolve(parentValue, { id }) {
        return await Song.remove({ _id: id });
      }
    }
  }
});

module.exports = mutation;
