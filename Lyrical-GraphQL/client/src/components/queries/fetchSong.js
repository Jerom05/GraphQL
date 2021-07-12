import { gql} from '@apollo/client';

const query = gql`
query Song($id:ID!){
    song(id:$id){
      id
      title
      lyrics{
        content
      }
    }
  }`
export default query
