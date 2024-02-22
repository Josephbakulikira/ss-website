import Post from "../Post";
import {useEffect, useState} from "react";

export default function IndexPage() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}post`).then(response => {
      response.json().then(posts => {
        setPosts(posts);
        console.log(posts)
      });
    });
  }, []);
  return (
    <div style={{marginTop: "40px"}}>
      <div className="" style={{display: 'flex', justifyContent: "center"}}>
        <h3 className="text-display-title" style={{color: "black"}}>Our Articles</h3>
      </div>
      <div className="posts-container" style={{margin: "20px"}}>
      {/* {process.env.REACT_APP_BACKEND_URL} */}
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
    </div>
    </div>
  );
}