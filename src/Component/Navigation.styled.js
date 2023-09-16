import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  margin-left: 15px;

  &.active {
    color: #0000ff;
  }
`;
