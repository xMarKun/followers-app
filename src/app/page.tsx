import { getFollowersCount } from "@/actions/get-followers-count";

export default async function Home() {
  const followersCount = await getFollowersCount();

  return <div>フォロワー数: {followersCount}</div>;
}
