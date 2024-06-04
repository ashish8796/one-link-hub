"use client";
import Welcome from "./components/Welcome/Welcome";
import Layout from "@/app/components/Layout/Layout";

export default function Home() {
  console.log("Home route");

  return (
    <Layout>
      <Welcome />
    </Layout>
  );
}
