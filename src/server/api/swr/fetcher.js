export const fetcher = async (
  url,
  options = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  }
) => {
  let res = { data: null, error: null, isLoading: false };
  try {
    const response = await fetch(url, options);

    if (response.ok) {
      const responseJSON = await response.json();
      res = { ...res, data: responseJSON };
      return res;
    } else {
      const err = await res.json();
      res = { ...res, error: err.message || err.statusText };
      return res;
    }
  } catch (err) {
    res = { ...res, error: err };
    return res;
  }
};
