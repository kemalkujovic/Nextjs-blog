import React from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";

const AllPostPage = (props) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all programming-related" />
      </Head>
      <AllPosts posts={props.posts} />;
    </>
  );
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
