import React from "react";
import Layout from "../../components/layout";
import PropTypes from "prop-types";

export default function Blog({ dataBlog }) {
  return (
    <Layout>
      {dataBlog.map((blog) => {
        return (
          <div key={blog.id}>
            <p style={{ color: "black" }}>
              {blog.id}.{blog.title}
            </p>
          </div>
        );
      })}
    </Layout>
  );
}
Blog.propTypes = {
  dataUsers: PropTypes.array,
};
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog,
    },
  };
}
