export async function consumingApi() {
  try {
    const axios = require("axios");
    const request = await axios.get(
      "https://api.github.com/users/yagovaluchedevs"
    );
    const response = await request;
    return response.data;
  } catch {
    return alert("Erro ao consumir a api !!");
  }
}
