import { Link, useLocation, useParams } from "react-router-dom";
import queryString from "query-string";

const Blog = () => {
  const location = useLocation();
  console.log(location.search);
  const parsed = queryString.parse(location.search);
  console.log(parsed);
  let params = useParams();
  console.log(params);
  const id = params.id; // => hhtp req => axios.get('/blog/1')
  return (
    <div>
      <h2> Blog detail - {id} </h2>
      <Link to={`/blogs/${parseInt(id) + 1}`}>go to next page</Link>
    </div>
  );
};

export default Blog;
