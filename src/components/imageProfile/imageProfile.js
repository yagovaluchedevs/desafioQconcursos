const image = document.querySelector(".image-profile");

export async function imageProfile(adressImg) {
  return (image.src = adressImg);
}
