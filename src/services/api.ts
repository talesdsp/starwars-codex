const API_URL = "https://swapi.co/api";

const swapi = async (path: string, params?: string) => {
  const response = await fetch(`${API_URL}/${path}${params ? `?${params}` : ""}`);
  const json = await response.json();
  return json;
};

const extractPathFromUrl = (url: string) => {
  const rgx = /(https?:\/\/\w+\.\w+\/api\/)/g;
  let extractedPath = url;
  if (rgx.test(url)) {
    extractedPath = url.replace(rgx, "");
  }
  return extractedPath;
};

export { swapi, extractPathFromUrl };
