import axios from "axios";

// This function will run BEFORE all tests
export async function setup() {
  // TODO fix
  await axios.post("http://localhost:7231/api/users/register", {
    username: "grace",
    password: "pass",
  });

  return async () => {};
}
