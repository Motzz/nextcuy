import Layout from "../../components/layout";
// import { useRouter } from "next/router";
import PropTypes from "prop-types";

export default function userDetail({ user }) {
  // const router = useRouter();
  // const { id } = router.query;
  // manggilnya contoh http://localhost:3000/users/parameternya
  return (
    <Layout>
      {/* <p style={{ color: "black" }}>user id :{id}</p> */}
      <p style={{ color: "black" }}>user id :{user.id}</p>
      <p style={{ color: "black" }}>user name :{user.name}</p>
    </Layout>
  );
}
userDetail.propTypes = {
  user: PropTypes.object,
  context: PropTypes.string,
};
//untuk generate halaman" html nantinya
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  const paths = dataUsers.map((user) => ({
    params: {
      id: `${user.id}`,
    },
  }));
  return {
    paths,
    fallback: false, //kalo ga ketemu halaman di 404 dia kali di false
  };
}
export async function getStaticProps(context) {
  // const { id } = context.params.id;
  const { id } = context.params; //ini dari params di atas

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
}
