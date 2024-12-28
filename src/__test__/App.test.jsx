import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// (필요하다면) 실제 App 컴포넌트를 import해도 되지만,
// 여기서는 #root div 자체만 확인하기 때문에 사용하지 않아도 무방.
import App from '../App';

describe('react context test', () => {
  it('if render react pass', () => {
    render(<App />);

    // #root div가 DOM에 존재하는지 확인
    const app = document.getElementById('app');
    expect(app).not.toBeNull();
  });
});
