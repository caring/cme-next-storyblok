import "../styles/tailwind.css";
import "../styles/main.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Image from "../components/Image";
import Richtext from "../components/Richtext";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  richtext: Richtext,
  page: Page,
  image: Image
};

storyblokInit({
  accessToken: "zizXq6Sf6awQNLXNHHpb5Att",
  use: [apiPlugin],
  apiOptions: {
    region: "us" // region code here
  },
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
