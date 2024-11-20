import { auth } from "@/lib/auth";
import { GetFollowersCountResponse } from "@/types/x-api";

export const getFollowersCount = async () => {
  const session = await auth();
  const accessToken = session?.accessToken;

  if (!accessToken) {
    throw new Error("アクセストークンがありません。");
  }

  try {
    const response = await fetch(`https://api.twitter.com/2/users/me?user.fields=public_metrics`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = (await response.json()) as GetFollowersCountResponse;

    console.log(data);

    return data.data.public_metrics.followers_count;
  } catch (error) {
    console.error(error);
    throw new Error("フォロワー数を取得できませんでした。");
  }
};
