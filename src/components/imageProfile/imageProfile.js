import { consumingApi } from "../services/api";
const image = document.querySelector(".image-profile");

export async function imageProfile() {
  const data = await consumingApi();
  image.src = await data.avatar_url;
}
