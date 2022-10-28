const API_URL = "https://api.unsplash.com";

export const usePhotos = async () => {
  const URL = `${API_URL}/photos?page=${value}&per_page=20&client_id=${API_KEY}`;
  const { data } = await useFetch(URL);
  return data.value;
};

export const useUsers = async () => {
  const URL = `${API_URL}/users/${username}?client_id=${API_KEY}`;
  const { data } = await useFetch(URL);
  return data.value;
};
