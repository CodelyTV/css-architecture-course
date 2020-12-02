import { ThemeProvider } from "styled-components";
import "./styles/index.scss";

import { Hero } from "./components/courses/Hero";
import { Collection } from "./components/courses/Collection";
import { BusinessCallout } from "./components/common/BusinessCallout";
import { Footer } from "./components/common/Footer";
import { MainHeader } from "./components/common/Header";
import { Partners } from "./components/common/Partners";
import { Testimonials } from "./components/common/Testimonials";
import { Cta } from "./components/subscription/Cta";
import { Subscribe } from "./components/subscription/Subscribe";

// eslint-disable-next-line import/no-webpack-loader-syntax
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./styles/settings/_variables.scss');

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainHeader />
      <Hero />
      <BusinessCallout />
      <Subscribe />
      <Collection />
      <Partners />
      <Testimonials />
      <Cta />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
