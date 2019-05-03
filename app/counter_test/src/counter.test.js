import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Counter from './counter';

afterEach(cleanup);

describe("Counter", () => {
  it("初期値は0", () => {
    const{ getByTestId } = render(<Counter />);
    expect(getByTestId("result")).toHaveTextContent("0");
  });
  it("「＋」ボタンを押すとカウントアップ", () => {
    const{ getByTestId, getByText } = render(<Counter />);
    fireEvent.click(getByText("+"))
    expect(getByTestId("result")).toHaveTextContent("1");
  })
  it("「ー」ボタンを押すとカウントダウン", () => {
    const{ getByTestId, getByText } = render(<Counter />);
    fireEvent.click(getByText("-"))
    expect(getByTestId("result")).toHaveTextContent("-1");
  })
});



