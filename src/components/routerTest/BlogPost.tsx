import React from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'

const BlogPost = () => {
  const [post, setPost] = React.useState<{ title: any; body: any } | null>(null)
  const { postSlug } = useParams()
  console.log(`postSlug ${postSlug}`)
  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postSlug}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
  }, [postSlug])

  // check we are on the blogPost
  const isBlogPostRoute = useRouteMatch('/blog/:postSlug')
  console.log(isBlogPostRoute)

  if (!post) return null

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  )
}

export default BlogPost
