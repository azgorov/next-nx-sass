import React from 'react';
import { render } from '@testing-library/react';

import SharedLib1 from './shared-lib1';

describe('SharedLib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedLib1 />);
    expect(baseElement).toBeTruthy();
  });
});
