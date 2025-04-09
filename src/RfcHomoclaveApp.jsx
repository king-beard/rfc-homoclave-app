import { useFetch } from "./hooks/useFetch"

const request = {
  method: "POST",
  mode: 'cors',
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "JESUS",
    fathersLastName: "HERRERA",
    mothersLastName: "DE VICENTE",
    birthdayDate: "03-12-1997",
    personType: "fisica"
  }),
};

const apiUrl = import.meta.env.VITE_API_URL;

export const RfcHomoclaveApp = () => {
  const { data, hasError, isLoading } = useFetch(apiUrl, request)

  return (
    <div>RfcHomoclaveApp {data?.rfcHomoclave}</div>
  )
}
