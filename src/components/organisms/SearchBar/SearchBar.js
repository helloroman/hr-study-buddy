import { Input } from 'components/atoms/Input/Input';
import React from 'react';
import { SearchBarWrapper, StatusInfo } from 'components/organisms/SearchBar/SearchBar.styles';

export const SearchBar = () => (
  <SearchBarWrapper>
    <StatusInfo>
      <p>Logged as:</p>
      <p>
        <strong>Teacher</strong>
      </p>
    </StatusInfo>
    <Input />
  </SearchBarWrapper>
);
