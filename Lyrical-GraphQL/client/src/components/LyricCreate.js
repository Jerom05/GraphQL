import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {useParams}from 'react-router-dom'
import { gql} from '@apollo/client';

const createLyric = gql`
    mutation AddLyricToSong($songId:ID!, $content:String){
        addLyricToSong(songId:$songId, content:$content){
            id
            lyrics{
                content
            }
        }
    }
`

const query = gql`
    query Song($id:ID!){
        song(id:$id){
            title
        }
    }
`

const LyricCreate = () =>{
    const [state, setState] = useState('')
    const [addLyricToSong, {data,loading,error}] = useMutation(createLyric)
    const {id} = useParams()

    const submit = (event)=>{
        event.preventDefault()
        addLyricToSong({
            variables:{content:state,sognId:id},
            refetchQueries:[query]
        })
    }
    
    return(
        <div>
            <form onSubmit={event=> submit(event)}>
                <label>Add a Lyric</label>
                <input onChange={e=>setState(e.target.value)} value={state}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default LyricCreate