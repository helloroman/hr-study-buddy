import React from 'react';
import FormField from './FormField';
import { render } from 'test-utils';

describe('Form Field', () => {
  it('Renders the component', () => {
    render(<FormField label="name" name="name" id="name" />);
  });
});
