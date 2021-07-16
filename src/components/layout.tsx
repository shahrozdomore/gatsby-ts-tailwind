import React, { ReactNode } from "react";
// import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import Footer from "./footer";

// import Header from "./header"
// import Footer from "./footer"

type Props = {
  children?: ReactNode;
  title?: string;
  desc?: string;
};

const Layout = ({ children }: Props) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //         description
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      {/* <a className="skip-link screen-reader-text" href="#primary">
        Skip to the content
      </a>
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
        menuLinks={data.site.siteMetadata.menuLinks}
      /> */}
      <Header />
      <main id="primary" className="">
        <h1>Layout</h1>
        {children}
      </main>
      {/* <Footer siteTitle={data.site.siteMetadata.title} /> */}
      <Footer />
    </>
  );
};

export default Layout;
