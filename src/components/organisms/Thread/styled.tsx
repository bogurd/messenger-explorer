import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = () => {
  return css`
    padding: 5px;
    height: 85vh;
    overflow: scroll;

    .message-group {
      margin-top: 5px;
      margin-bottom: 5px;
    }
  `;
};

const ThreadTheme: themeOptions = {
  DEFAULT: css``,
};

type ThreadProps = {
  useTheme: string;
};

const getAllStyle = ({ useTheme }: ThreadProps) => {
  return css`
    ${baseStyle()}
    ${ThreadTheme[useTheme]}
  `;
};

export const StyledThread = styled.div<ThreadProps>`
  ${getAllStyle}
`;
