import { useParams } from "react-router-dom";

const PostPage = () => {
  let params = useParams();
  const id = params.id || 1;
  return (
    <div>
      <h2>this is post page - {id}</h2>
      <div>{JSON.stringify(params)}</div>
    </div>
  );
};

export default PostPage;
