interface FetchConfig extends RequestInit {
  headers?: Record<string, string>;
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

export const api = async <T>(
  url: string,
  config: FetchConfig = {}
): Promise<T> => {
  const fullUrl = `${API_BASE_URL}${url}`;
  console.log(fullUrl);

  const headers = {
    "Content-Type": "application/json",
    ...config.headers,
  };

  const response = await fetch(fullUrl, {
    ...config,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Something went wrong");
  }

  return response.json() as Promise<T>;
};
