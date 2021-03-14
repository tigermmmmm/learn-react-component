import styled from "styled-components";

// 返回一个组件
export const HomeWrapper = styled.div`
  font-size: 12px;
  color: #eee;
  .banner {
    background-color: blue;
    span {
      color: white;
      &.active {
        color: red;
      }
      &:hover {
          color: green;
      }
      &::after {
          content: 'aaa';
      }
    }
  }
`;

export const TitleWrapper = styled.h2`
  text-decoration: underline;
  color: ${props => props.theme.themeColor};
  font-size: ${props => props.theme.fontSize};
`;