import React from "react";
import { Features, Hero, Layout } from "../components/index";

export default function Home() {
  return (
    <Layout>
      <>
        <Hero />
        <Features />
      </>
    </Layout>
  );
};
