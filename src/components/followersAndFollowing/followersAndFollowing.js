const numberRepository = document.querySelector(".repo");
const numberFollower = document.querySelector(".follower");
const numberFollowing = document.querySelector(".following");

export async function followersAndFolowing(repository, follower, following) {
  numberRepository.innerText = repository;
  numberFollower.innerText = follower;
  numberFollowing.innerText = following;
}
