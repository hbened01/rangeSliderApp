import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("initApp", () => {
  const mock = {};
  afterEach(cleanup);
  beforeEach(() => {
    const { container } = render(<App />);
    const article = screen.getByRole("article", { name: "main-title" });
    const button = screen.getByRole("button", { name: "Go to Exercise 2" });
    mock.container = container;
    mock.article = article;
    mock.button = button;
  });

  it("first route render", () => {
    expect(window.location.pathname).toBe("/");
  });

  it("if title is correct", () => {
    const { article } = mock;
    expect(screen.getByText(`Range Slider`)).toBeInTheDocument();
    expect(article).toBeInTheDocument();
    expect(article).toHaveStyle({
      padding: "15px",
    });
  });

  it("verific button exist", () => {
    const { container } = mock;
    const button = container.querySelector("#button-go-exercise2");
    expect(button).toBeInTheDocument();
    expect(screen.getByText(`Go to Exercise 2`)).toBeInTheDocument();
  });

  it("verific range slider exist", () => {
    const { container } = mock;
    const wrapper = container.querySelector("#wrapper-container");
    expect(wrapper).toBeInTheDocument();
  });
});

describe("goToNextExercise", () => {
  const mock = {};
  beforeEach(() => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Go to Exercise 2" });
    mock.button = button;
  });
  it("verific go to next exercise", () => {
    const { button } = mock;
    fireEvent.click(button);
    expect(screen.getByText(`Go to Exercise 1`)).toBeInTheDocument();
  });
});
