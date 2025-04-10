import { getRfcHomoclave } from "../helpers/getRfcHomoclave";

export const ShowRfcHomoclave = ({bodyRequest}) => {
  const { data } = getRfcHomoclave(bodyRequest);

  return (
    <div className="container mt-5">
      <h3>RFC con Homoclave: {data?.rfcHomoclave}</h3>
    </div>
  )
}
