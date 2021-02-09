import { profileData } from "../profileData";
import { listRepo } from "../listRepo";
import { listFavorite } from "../listFavorite";
export function cardProfile() {
  profileData();
  listRepo();
  listFavorite();
}
