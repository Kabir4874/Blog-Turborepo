import React from 'react'

type Props = {
    params:{
        id:string
    }
}

const PostPage =async ({params}: Props) => {
    const postId= (await params).id
  return (
    <div>PostPage</div>
  )
}

export default PostPage