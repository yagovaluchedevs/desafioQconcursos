import { consumingApi } from "../services/api";
import { imageProfile } from "../imageProfile";
import { followersAndFolowing } from "../followersAndFollowing";

export async function profileData() {
  const apiProfileData = await consumingApi();

  imageProfile(apiProfileData.avatar_url);

  followersAndFolowing(
    apiProfileData.public_repos,
    apiProfileData.followers,
    apiProfileData.following
  );
}
