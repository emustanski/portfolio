import { ElementType, HTMLAttributes } from 'react';
import { StyledTitle } from './Title.styled';

export type TitleLevel = '1' | '2' | '3' | '4';

type Props = {
  level?: TitleLevel;
  underlined?: boolean;
} & HTMLAttributes<HTMLHeadingElement>;
const Title = ({ children, level = '1', underlined }: Props) => {
  const tagName = `h${level}` as ElementType;

  return (
    <StyledTitle as={tagName} $level={level} $underlined={underlined}>
      {children}
    </StyledTitle>
  );
};

export default Title;
