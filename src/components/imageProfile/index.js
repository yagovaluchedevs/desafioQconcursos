export async function imageProfile(adressImg) {
  const image = document.querySelector(".image-profile");
  return (image.src = adressImg);
}
