import React from "react";
import { MainLayout } from "./styles/Layout.styles";

import _IMAGE from '../images/img.png';

const BlogPage = ({ data }) => {
  return (
    <MainLayout pageTitle="연봉인상">
      <h1>황광진 연봉 인상 발표 나와... 네티즌 충격!</h1>
      <img src={_IMAGE} />
      <p style={{textAlign: "right"}}>중앙1보</p>
    </MainLayout>
  );
};


export default BlogPage;
