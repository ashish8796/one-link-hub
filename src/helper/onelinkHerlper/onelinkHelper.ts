export const isOnelinkTaken = (onelinks: any[], newOnelink: string) => {
  return !onelinks.find((onelink) => onelink.username === newOnelink);
};
