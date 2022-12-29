import React, { useEffect } from "react";
import Layout from "../components/layout";
import { useRouter } from "next/router";
export default function customError() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      console.log("dipanggil dalam 2 detik");
      router.push("/");
    }, 2000);
  }, []);
  return (
    <Layout>
      <div>ga ada halaman</div>
    </Layout>
  );
}
