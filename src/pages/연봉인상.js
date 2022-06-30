import React from "react";
import { MainLayout } from "./styles/Layout.styles";

const BlogPage = ({ data }) => {
  return (
    <MainLayout pageTitle="연봉인상">
     <h1>박철현 연봉 인상 발표 나와... 네티즌 충격!</h1>
     <p>(주)인바이즈 소속 박철현은 이번 (주)인바이즈의 LG 밋업이 잘 성사된 관계로 연봉 인상이 결정되었다고 한다.</p>
     <p>또 이준석 대표는 박철현에게 이번 PoC 지원금 2,000만원과 뭐 발표 잘해서 돈주는 우수 발표상 전액 박철현에게 지급하기로 했따.</p>
      <p>박철현은 이에 더 받아야 마땅하지만 일단은 만족한다고 밝혔댄다.</p>
      <p style={{textAlign: "right"}}>중앙1보</p>
    </MainLayout>
  );
};


export default BlogPage;
