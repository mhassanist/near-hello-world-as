import { helloWorld } from "../assembly/index"

describe("Contract", () => {
  it("should say print the statement 'hello from the blockchain world!' ", () => {
    expect(helloWorld()).toStrictEqual("Hello from the blockchain world!")
  })
})
