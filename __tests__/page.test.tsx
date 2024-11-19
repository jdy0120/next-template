import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const mockStore = configureStore({
  reducer: {},
});

// Next.js App Router 테스트를 위한 모킹
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
    };
  },
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => "",
}));

describe("LoginPage", () => {
  it("renders a login page", () => {
    render(
      <Provider store={mockStore}>
        <></>
      </Provider>
    );
    expect(screen.getByText("로그인")).toBeInTheDocument();
  });
});
