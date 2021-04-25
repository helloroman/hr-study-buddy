import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { Average } from 'components/atoms/Average/Average';
import {
  BigAverage,
  StyledDetails,
  StyledInfo,
  StyledLabel,
  StyledSubjectInfo,
  Wrapper,
} from 'components/molecules/StudentDetails/StudentDetails.styles';

const StudentDetails = ({ student }) => {
  return (
    <Wrapper>
      <BigAverage value={student.average}>{student.average}</BigAverage>
      <Title isBig>{student.name}</Title>
      <StyledDetails>
        <StyledLabel>Course:</StyledLabel>
        <StyledInfo isBig>{student.course}</StyledInfo>
        <StyledLabel>Average grades:</StyledLabel>
        {student.grades.map(({ subject, average }) => (
          <StyledSubjectInfo key={subject}>
            <StyledInfo>{subject}</StyledInfo>
            <Average value={average}>{average}</Average>
          </StyledSubjectInfo>
        ))}
      </StyledDetails>
    </Wrapper>
  );
};

export default StudentDetails;
