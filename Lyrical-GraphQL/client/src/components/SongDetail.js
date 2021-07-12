import fetchSong from './queries/fetchSong'
import { useParams } from 'react-router-dom'
import {useQuery} from '@apollo/client';
import { Link } from 'react-router-dom';
import LyricCreate from './LyricCreate';

const SongDetail = ()=>{

    let {id} = useParams()
    const { loading, error, data }  = useQuery(fetchSong,{variables:{id},})

    if(loading) return "Loading"

    console.log('song', data)
    return(
        <div>
            <div>
                <button><Link to='/'>Back</Link></button>
            </div>

            <div>
                {data.song.title}
            </div>

            <div>
                {data.song.lyrics[0].content}
            </div>
            <LyricCreate />
            
        </div>
    )
}

export default SongDetail

