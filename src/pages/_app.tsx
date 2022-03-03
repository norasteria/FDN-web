import "../styles/globals.css";
import type { AppProps, AppContext } from "next/app";
import { Provider } from "react-redux";
import store from "_services/store";

function MainApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

MainApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return { pageProps };
};

export default MainApp;
