import React from 'react'
import {useQuery, gql} from '@apollo/client';

const query = gql`
    {
        songs{
            id
            title
        }
    }
`

const SongList = ()=>{
    
    const { loading, error, data } = useQuery(query);

    const renderSong = ()=>{
        return data.songs.map(song=>{
            return(
                <li key={song.id}>
                    {song.title}
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

    return(
        <div>
            {renderSong()}
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