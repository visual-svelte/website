import sidebarData from "$data/dynamicData.js";

export const get = async () => {
  const body = {
    sidebarData,
  };

  return { body };
};
