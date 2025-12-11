import axios from "axios";

describe("Get User Endpoint", () => {
  it("should return a 200 status for get user", async () => {
    const response = await axios.get("http://localhost:7231/api/users/tom", {
      validateStatus: () => true,
    });
    expect(response.status).toBe(200);
    expect(response.data.error).toEqual("User not found");
  });

  it("should return a 404 status for get user", async () => {
    const response = await axios.get("http://localhost:7231/api/users/grace", {
      validateStatus: () => true,
    });
    expect(response.status).toBe(404);
    expect(response.data.error).toEqual("User not found");
  });
});
