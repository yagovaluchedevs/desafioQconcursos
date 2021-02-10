export async function followersAndFolowing(repository, follower, following) {
  const numberRepository = document.querySelector(".repo");
  const numberFollower = document.querySelector(".follower");
  const numberFollowing = document.querySelector(".following");

  numberRepository.innerText = repository;
  numberFollower.innerText = follower;
  numberFollowing.innerText = following;
}
