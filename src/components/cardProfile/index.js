import { profileData } from "../profileData";
import { listRepo } from "../listRepo";
import { listFavorite } from "../listFavorite";
import { toScroll } from "../toScroll";

export function cardProfile() {
  profileData();
  listRepo();
  listFavorite();
  toScroll();
}
