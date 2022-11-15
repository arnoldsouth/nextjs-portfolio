// Global Styles: this component is the top-level component which will be common across all the different pages
// This App component can be used to keep state when navigating between pages

import styles from "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
