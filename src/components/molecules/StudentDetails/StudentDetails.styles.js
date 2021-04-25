import styled from 'styled-components';
import { Average } from 'components/atoms/Average/Average';

export const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const BigAverage = styled(Average)`
  width: 68px;
  height: 68px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  position: absolute;
  left: 40px;
`;

export const StyledDetails = styled.div`
  width: 100%;
  padding: 40px;
`;

export const StyledLabel = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-bottom: 0;
`;

export const StyledInfo = styled.p`
  font-size: ${({ theme, isBig }) => (isBig ? theme.fontSize.xl : theme.fontSize.l)};
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 10px 20px 20px 0;
`;

export const StyledSubjectInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
`;
