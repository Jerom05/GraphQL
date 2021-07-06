import React from 'react'
import { useState } from 'react'

const SongCreate = ()=>{
    const [state, setState] = useState({
        title:" "
    })

    return(
        <div>
            <h3>Create a new song</h3>
            <form>
                <label>Song title</label>
                <input onChange={(e)=> setState({title:e.target.value})} value={state.title} />
            </form>
        </div>
    )
}

export default SongCreate