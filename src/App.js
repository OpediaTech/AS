import Banner from "./components/Banner/Banner";
import Layout from "./components/Layout/Layout";
import Portfolio from "./components/Portfolio/Portfolio";
import VideoAssociation from "./components/VideoAssociation/VideoAssociation";
import "./css/custom.css";
import "./css/animate.css";
import "./css/responsive.css";

function App() {
  return (
    <Layout>
      <Banner />
      <VideoAssociation />
      <Portfolio />
    </Layout>
  );
}

export default App;
