import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/bienvenido/i);
  expect(linkElement).toBeInTheDocument();
});

// === ARCHIVO:.github/workflows/ci.yml ===
name: CI

on:
  push:
    branches: [ main, feature/* ]
  pull_request:
    branches: [ main, feature/* ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'
      - run: npm install
      - run: npm test