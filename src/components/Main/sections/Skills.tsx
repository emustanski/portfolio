import { memo } from 'react';
import Title from '@components/Title';
import JSIcon from '@components/Icons/JSIcon';
import TSIcon from '@components/Icons/TSIcon';
import ReactIcon from '@components/Icons/ReactIcon';
import ReduxIcon from '@components/Icons/ReduxIcon';
import AngularIcon from '@components/Icons/AngularIcon';
import NodeJSIcon from '@components/Icons/NodeJSIcon';
import ExpressJSIcon from '@components/Icons/ExpressJSIcon';
import NPMIcon from '@components/Icons/NPMIcon';
import MongoDBIcon from '@components/Icons/MongoDBIcon';
import HTMLIcon from '@components/Icons/HTMLIcon';
import CSSIcon from '@components/Icons/CSSIcon';
import BootstrapIcon from '@components/Icons/BootstrapIcon';
import RestAPIsIcon from '@components/Icons/RestAPIsIcon';
import GitIcon from '@components/Icons/GitIcon';
import NGRXIcon from '@components/Icons/NGRXIcon';
import {
  StyledContainer,
  StyledSkillsList,
  StyledSkillItem,
} from './Skills.styled';

type Props = {
  isActive: boolean;
};
const SkillsSection = ({ isActive }: Props) => (
  <StyledContainer $isActive={isActive}>
    <Title level="2" underlined>
      Skills
    </Title>
    <div>
      <Title level="3">Essential</Title>
      <StyledSkillsList>
        <StyledSkillItem>
          <JSIcon />
        </StyledSkillItem>
        <StyledSkillItem>
          <TSIcon />
        </StyledSkillItem>
        <StyledSkillItem>
          <HTMLIcon />
        </StyledSkillItem>
        <StyledSkillItem>
          <CSSIcon />
        </StyledSkillItem>
      </StyledSkillsList>

      <Title level="3">Frameworks</Title>
      <StyledSkillsList>
        <StyledSkillItem>
          <ReactIcon />
        </StyledSkillItem>
        <StyledSkillItem>
          <AngularIcon />
        </StyledSkillItem>
      </StyledSkillsList>

      <Title level="3">State management</Title>
      <StyledSkillsList>
        <StyledSkillItem>
          <ReduxIcon />
        </StyledSkillItem>
        <StyledSkillItem>
          <NGRXIcon />
        </StyledSkillItem>
      </StyledSkillsList>

      <Title level="3">Popular libraries</Title>
      <StyledSkillsList>
        <StyledSkillItem>
          <BootstrapIcon />
        </StyledSkillItem>
      </StyledSkillsList>

      <Title level="3">Others</Title>
      <StyledSkillsList>
        <StyledSkillItem>
          <NodeJSIcon />
        </StyledSkillItem>
        <StyledSkillItem>
          <NPMIcon />
        </StyledSkillItem>
        <StyledSkillItem>
          <GitIcon />
        </StyledSkillItem>
        <StyledSkillItem>
          <ExpressJSIcon />
        </StyledSkillItem>
        <StyledSkillItem>
          <MongoDBIcon />
        </StyledSkillItem>
        <StyledSkillItem>
          <RestAPIsIcon />
        </StyledSkillItem>
      </StyledSkillsList>
    </div>
  </StyledContainer>
);

export default memo(SkillsSection);
