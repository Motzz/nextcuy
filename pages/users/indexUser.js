import Layout from "../../components/layout";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
// interface UserProps {
//   dataUsers: Array<any>;
// }
export default function userIndex({ dataUsers }) {
  const router = useRouter();
  return (
    <Layout>
      {dataUsers.map((user) => {
        return (
          <div key={user.id}>
            <p style={{ color: "black" }} onClick={() => router.push(`/users/${user.id}`)}>
              {user.name}
            </p>
            <br></br>
          </div>
        );
      })}
    </Layout>
  );
}
userIndex.propTypes = {
  dataUsers: PropTypes.array,
};
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers: dataUsers,
    },
  };
}
