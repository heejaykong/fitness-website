import React from "react";
import image from "../assets/images/bg/1.jpeg"
// import styled from 'styled-components/macro';
// 스토리는 텍스트/사진 위주가 될 것
// 웹칼럽처럼 아카이빙하는 용도로 사용할 예정
// 관리자버전 계정과 그 계정이 사용할 수 있는 CRUD 필요(auth 기능없는 SPA에 admin을 어케 구현하지?)

function Stories() {
  return (
    <>
    <div>
      <img src={image} alt="asdf" style={{width:"100%", height:"auto"}}/>
    </div>
    </>
  );
}

export default Stories;
