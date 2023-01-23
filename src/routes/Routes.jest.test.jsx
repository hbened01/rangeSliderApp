import { render, screen, fireEvent, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom"
import RoutesApp from "./Routes"

describe("initRoute", () => {
  const mock = {}
  afterEach(cleanup)
  beforeEach(() => {
    const { container } = render(<RoutesApp />)
    mock.container = container
  })

  it("verific default route exercise1", () => {
    const { container } = mock
    const button = container.querySelector("#button-go-exercise2")
    expect(button).toBeInTheDocument()
    expect(screen.getByText(`Go to Exercise 2`)).toBeInTheDocument()
    expect(window.location.pathname).toBe("/")
  })

  it("verific if route is exercise 2", () => {
    const { container } = mock
    const button = container.querySelector("#button-go-exercise2")
    expect(button).toBeInTheDocument()
    expect(screen.getByText(`Go to Exercise 2`)).toBeInTheDocument()
    fireEvent.click(button)
    window.setTimeout(() => {
      expect(screen.getByText(`Go to Exercise 1`)).toBeInTheDocument()
      expect(window.location.pathname).toBe("/exercise2")
    }, 1000)
  })

  it("verific if route is exercise 2 and return to exercise 1", () => {
    const { container } = mock
    const button = container.querySelector("#button-go-exercise1")
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(screen.getByText(`Go to Exercise 2`)).toBeInTheDocument()
    expect(window.location.pathname).toBe("/exercise1")
  })

})