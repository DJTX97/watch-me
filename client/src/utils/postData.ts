import { API } from "./API";

export const postData = async (endpoint: string, data = {}) => {
  const response = await fetch(`${API}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

  return response.json();
};
