import React , {Component} from 'react'
//import {useQuery, gql} from '@apollo/client';
import gql from 'graphql-tag'
// import {graphql} from 'react-apollo'
class SongList extends React.Component{
    render(){
        return(
            <div>
                SongList
            </div>
        )
        
    }
}


const SongList = ()=>{
    const { loading, error, data } = useQuery(query);
    return(
        <div>
            SongList
        </div>
    )
}
const query = gql`
    {
        songs{
            title
        }
    }
`

export default graphql(query)(SongList)