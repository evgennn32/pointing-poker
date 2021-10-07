import styled from "styled-components";

export const OneSettingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CardsWrapper = styled(OneSettingWrapper)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
export const Wrapper = styled.form`
  width: 549px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const Label = styled.label`
  font-size: 24px;
  font-family: Ruda-Bold, sans-serif;
  line-height: 30px;
`;
export const InputsSwitchersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 0 40px;
  height: 358px;
`;
