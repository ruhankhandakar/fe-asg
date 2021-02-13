import styled from "styled-components";

export const FilterInputsDiv = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .ant-select {
    width: 100%;
  }

  .one {
    margin-right: 10px;
  }

  .two,
  .three,
  .four {
    flex: 1;
    margin-right: 10px;
  }

  @media (max-width: 680px) {
    flex-direction: column;
    .one,
    .two,
    .three,
    .four,
    .five {
      width: 100%;
      margin-bottom: 10px;
    }

    .five {
      button {
        width: 100%;
      }
    }
  }
`;

export const CustomSpan = styled.span`
  display: inline-block;
  width: 72px;
  text-align: center;
  border: 1px solid #ccc;
  line-height: 29px;
  background-color: rgba(156, 156, 156, 0.1);
`;
