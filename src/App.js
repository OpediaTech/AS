import React, { Suspense } from "react";
import Layout from "./components/Layout/Layout";
import "./css/custom.css";
import "./css/animate.css";
import "./css/responsive.css";

// import Banner from "./components/Banner/Banner";
// import Portfolio from "./components/Portfolio/Portfolio";
// import VideoAssociation from "./components/VideoAssociation/VideoAssociation";

const Banner = React.lazy(() => import("./components/Banner/Banner"));
const Portfolio = React.lazy(() => import("./components/Portfolio/Portfolio"));
const VideoAssociation = React.lazy(() =>
  import("./components/VideoAssociation/VideoAssociation")
);

function App() {
  return (
    <Layout>
      {/* <Banner />
      <VideoAssociation />
      <Portfolio /> */}
      <Suspense fallback="Loading...">
        <Banner />
      </Suspense>
      <Suspense fallback="Loading...">
        <VideoAssociation />
      </Suspense>
      <Suspense fallback="Loading...">
        <Portfolio />
      </Suspense>
    </Layout>
  );
}

export default App;
