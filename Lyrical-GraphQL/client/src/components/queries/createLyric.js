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