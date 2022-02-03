import { _setup } from "../utils/serverRunner";
import fs from "fs";

describe("Usage of token validation middleware", () => {
  it("should be using token validation middleware", () => {
    const tokenValidationMiddleware = fs.readFileSync("./src/middlewares/tokenValidationMiddleware.js", "utf8");

    expect(tokenValidationMiddleware.length).toBeGreaterThan(1);
  });
});
