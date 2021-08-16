import React, { useMemo } from "react";
import styled from "styled-components";
import { graphql, Link, useStaticQuery } from "gatsby";

export const MainWrapper = styled.article``;

export const MainContent = styled.section`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`;

export const MainNavList = styled.ul``;
export const MainNavItem = styled.li``;
export const MainNavLink = styled(Link)``;

export const MainNav = ({ list }) => {
  return (
    <nav>
      <MainNavList>
        {list.map((item) => (
          <MainNavItem key={item.link}>
            <MainNavLink to={item.link}>{item.name}</MainNavLink>
          </MainNavItem>
        ))}
      </MainNavList>
    </nav>
  );
};

export const MainLayout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const links = useMemo(() => {
    return [
      { link: "/", name: "Home" },
      { link: "/about", name: "About" },
      { link: "/blog", name: "Blog" },
    ];
  }, []);

  return (
    <main>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <MainWrapper>
        <MainContent>
          <h1>{pageTitle}</h1>
          <MainNav list={links} />
          <div>{children}</div>
        </MainContent>
      </MainWrapper>
    </main>
  );
};

const Layout = {
  MainWrapper,
  MainContent,
  MainLayout,
};

export default Layout;
