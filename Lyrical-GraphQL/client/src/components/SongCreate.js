import React from 'react'
import { useState } from 'react'
import { gql, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import query from './queries/fetchSongs';

const Add_Song =  gql`
    mutation AddSong($title:String!){
        addSong(title:$title){
            id
            title
        }
    }  
`

const SongCreate = ()=>{
    const [state, setState] = useState({
        title:" "
    })
    let history = useHistory();

    const [addSong, { data, loading, error }] = useMutation(Add_Song);

    const onSubmit = (e)=>{
        e.preventDefault()
        addSong({ 
            variables: { title: state.title },
            refetchQueries:[{query}] 
        })

        if(!error){
            history.push("/");
        }
        setState({
            title:''
        })

    }

    return(
        <div>
            <div>
                <Link to="/">Back</Link>
            </div>
            <h3>Create a new song</h3>
            <form onSubmit={e=>onSubmit(e)}>
                <label>Song title</label>
                <input onChange={(e)=> setState({title:e.target.value})} value={state.title} />
            </form>
        </div>
    )
}

export default SongCreate