import React,{useEffect,useState} from 'react'
import {useQuery, gql, useMutation} from '@apollo/client';
import { Link } from 'react-router-dom';
import query from './queries/fetchSongs';

const Delete_Song = gql`
    mutation DeleteSong($id:ID!){
        deleteSong(id:$id){
            title
        }
    }
`
const Add_Song =  gql`
mutation AddSong($title:String!){
    addSong(title:$title){
        id
        title
    }
}  
`

const SongList = ()=>{
    const { loading, error, data } = useQuery(query);
    const [deleteSong] = useMutation(Delete_Song)

    const onSongDelete = (id)=>{
        deleteSong({ 
            variables: { id:id },
            refetchQueries:[{query}] 
        })
    }

    const renderSong = ()=>{
        return data.songs.map(song=>{
            return(
                <li key={song.id}>
                    <Link to={`/song/${song.id}`}>{song.title}</Link>
                    <button onClick={()=>onSongDelete(song.id)}>Delete</button>
                </li>
            )
        })
    }

    if(loading){
        return(
            <div>
                Loading...
            </div>
        )
    }

    if(error){
        return(
            <div>
                Sorry we have an internal error
            </div>
        )
    }

    return(
        <div>
            <ul>
                {renderSong()}
            </ul>
            <Link to="/songs/new">
                <button>Add Song</button>
            </Link>
            
        </div>
    )
}


export default SongList








// import gql from 'graphql-tag'
// import {graphql} from 'react-apollo'
// class SongList extends React.Component{
//     render(){
//         return(
//             <div>
//                 SongList
//             </div>
//         )
        
//     }
// }
// export default graphql(query)(SongList)