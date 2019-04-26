import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Counter from './counter';

afterEach(cleanup);

describe("Counter", () => {
  it("初期値は0", () => {
    const{ getByTestId } = render(<Counter />);
    expect(getByTestId("result")).toHaveTextContent("0");
  });
  it.todo("「＋」ボタンを押すとカウントアップ")
  it.todo("「ー」ボタンを押すとカウントダウン")
});



