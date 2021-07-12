import { gql} from '@apollo/client';

const query = gql`
    {
        songs{
            id
            title
        }
    }
`
export default query
