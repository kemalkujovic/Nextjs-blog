import React from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostPage = (props) => {
  return <AllPosts posts={props.posts} />;
};

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostPage;