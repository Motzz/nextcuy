import Header from "../header";
import Footer from "../footer";
import PropTypes from "prop-types";
import styles from "./Layout.module.css";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Next JS| Home Page</title>
        <meta name="description" content="Website next JS Basic"></meta>
      </Head>
      <div className={styles.container}>
        <Header></Header>
        <div className={styles.content}>{children}</div>
        <Footer></Footer>
      </div>
    </>
  );
}
Layout.propTypes = {
  children: PropTypes.node,
};
