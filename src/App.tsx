import { useState, useEffect } from 'react'
import './App.scss'
import sanityClient from "./client"

function App() {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
sanityClient
.fetch(
  `*[_type == "post"]{
    title
  }`
)
.then((data) => setPosts(data))
.catch(console.error)
  })


  console.log(posts)
  return (
    <>
      <h1>Posts</h1>
      <p>{posts && posts.map((post, index) => <div>{post.title}</div>)}</p>
    </>
  )
}

export default App