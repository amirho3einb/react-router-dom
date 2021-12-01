import { Link } from "react-router-dom";

const Blog = (props) => {
    const id = props.match.params.id; // => hhtp req => axios.get('/blog/1')
    return ( 
        <div>
           <h2> Blog detail - {id} </h2>
           <Link to="/blogs">go to blog page</Link>
        </div>
    );
}
 
export default Blog;