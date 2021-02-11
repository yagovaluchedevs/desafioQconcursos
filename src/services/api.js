const axios = require("axios");

export async function consumingApi() {
  try {
    const request = await axios.get(
      "https://api.github.com/users/yagovaluchedevs"
    );
    const response = await request;
    return response.data;
  } catch {
    return alert("Erro ao consumir a api !!");
  }
}

export async function consumeApiPaths(path) {
  try {
    const requestPaths = await axios.get(
      `https://api.github.com/users/yagovaluchedevs/${path}`
    );
    const responsePaths = await requestPaths;
    return responsePaths.data;
  } catch {
    return alert("Erro ao consumir a api de repositórios");
  }
}
