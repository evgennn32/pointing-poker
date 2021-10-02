import { MediaQuery } from "../styledComponents/MediaQuery/MediaQuery";
import styled from "styled-components";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { Input } from "../styledComponents/Input/Input";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: calc(100% - 40px);
  max-width: 1000px;
  margin: 20px auto 0px;
  padding: 0 20px 100px;
`;

export const ScrumMasterLabel = styled.div`
  font-family: Ruda-Bold, sans-serif;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
`;

export const LinkToLobbyLabel = styled.div`
  font-family: Roboto, sans-serif;
  font-style: italic;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #000;
`;

export const UserAvatarStyled = styled(UserAvatar)`
  margin: 10px 0 20px 0;
`;

export const CopyLinkWrap = styled.div`
  display: flex;
  @media (${MediaQuery.tablet}) {
    flex-wrap: wrap;
    & > input {
      border-right: 1px solid #2b3a67;
    }
  }
`;

export const InputStyled = styled(Input)`
  border-right: none;
`;

export const BtnsWrap = styled.div<{ alignRight?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) =>
    props.alignRight ? "flex-end" : "space-between"};
  margin: 30px 0;
  width: 100%;
  & :last-child {
    margin-right: 40px;
  }
`;

export const IssuesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
