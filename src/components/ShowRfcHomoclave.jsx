import { useFetch } from "../hooks/useFetch";

const apiUrl = import.meta.env.VITE_API_URL;

const initalRequest = {
  method: "POST",
  mode: 'cors',
  headers: {
    "Content-Type": "application/json",
  }
};

export const ShowRfcHomoclave = ({bodyRequest}) => {
  const request = { ...initalRequest, body: JSON.stringify(bodyRequest) }
  const { data } = useFetch(apiUrl, request);

  return (
    <div className="container mt-5">
      <h3>RFC con Homoclave: {data?.rfcHomoclave}</h3>
    </div>
  )
}
