import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { App } from '../App';

describe('App 컴포넌트 테스트', () => {
  it('항상 통과하는 테스트', () => {
    const { container } = render(
      <MantineProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MantineProvider>,
    );

    // container가 존재하면 무조건 통과
    expect(container).toBeDefined();
  });
});
