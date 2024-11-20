export type GetFollowersCountResponse = {
  data: {
    id: string;
    name: string;
    username: string;
    public_metrics: {
      followers_count: number;
    };
  };
};
