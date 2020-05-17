const API_URL = "https://swapi.dev/api";

const swapi = async (path: string, request = fetch) => {
  const response = await request(`${API_URL}/${path}/`);
  return response;
};

const extractPathFromUrl = (url: string) => {
  const rgx = /(https?:\/\/\w+\.\w+\/api\/)/g;
  let extractedPath = url;
  if (rgx.test(url)) {
    extractedPath = url.replace(rgx, "");
  }
  return extractedPath;
};

export { swapi, extractPathFromUrl, API_URL };
