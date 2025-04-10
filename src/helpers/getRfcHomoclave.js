import { useFetch } from "../hooks/useFetch";

const apiUrl = import.meta.env.VITE_API_URL;

const initalRequest = {
  method: "POST",
  mode: 'cors',
  headers: {
    "Content-Type": "application/json",
  }
};

export const getRfcHomoclave = (bodyRequest) => {
  const request = { ...initalRequest, body: JSON.stringify(bodyRequest) }
  const { data } = useFetch(apiUrl, request);

  return {
    data
  }
}
