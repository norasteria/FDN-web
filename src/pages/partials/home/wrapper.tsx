import Head from "next/head";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Female Daily - Test</title>
        <meta
          name="description"
          content="Female Daily - landing page test created by Nora Asteria"
        />
        <link rel="icon" href="/icons/fd-icon.png" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
