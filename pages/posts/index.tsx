import { GetStaticProps, GetStaticPropsContext } from 'next';
import * as React from 'react';

export interface  ListPostPageProps {
  posts:any[];
}

export default function ListPostPage ({posts}:  ListPostPageProps) {
  console.log('posts',posts);
  
  return (
    <div>
      List Post Page
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<ListPostPageProps> = async (context: GetStaticPropsContext)=>{
  // server-side
  // build-time

  console.log('static props');
  const response = await fetch('')
  const data = await response.json()
  console.log(data);
  
  
 return{
  props:{
    posts: data.data,
  }
 }
}

// ko được dùng cùng lúc getStaticProps vs getServerSideProps trogn một file