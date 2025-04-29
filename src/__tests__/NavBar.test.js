// NavBar.test.js
import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../components/NavBar';  


test("renders three <a> elements", () => {
  const { container } = render(<NavBar />);
  const links = container.querySelectorAll("a");
  expect(links).toHaveLength(3);  
});
