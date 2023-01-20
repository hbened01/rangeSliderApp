import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("initApp", () => {
  let dom, article;
  beforeEach(() => {
    dom = render(<App />);
    article = screen.getByRole("article", { name: "main-title" })
  });

  test("first route render", () => {
    expect(window.location.pathname).toBe("/");
  });

  test("if title is correct", () => {
    expect(screen.getByText(`Range Slider`)).toBeInTheDocument();
    expect(article).toBeInTheDocument();
    expect(article).toHaveStyle({
      padding: "15px"
    });
  });

  test("verific button exist", () => {
    const button = dom.container.querySelector('#button-go-exercise2')
    expect(button).toBeInTheDocument();
    expect(screen.getByText(`Go to Exercise 2`)).toBeInTheDocument();
  });

  test("vcerific range slider exist", () => {
    const wrapper = dom.container.querySelector('#wrapper-container')
    expect(wrapper).toBeInTheDocument();
  })
});