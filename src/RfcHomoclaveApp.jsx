import { useState } from "react";
import { ConsultRfcHomoclave } from "./components/ConsultRfcHomoclave"
import { ShowRfcHomoclave } from "./components/ShowRfcHomoclave";

const initalRequest = {
  method: "POST",
  mode: 'cors',
  headers: {
    "Content-Type": "application/json",
  }
};

export const RfcHomoclaveApp = () => {

  const [request, setRequest] = useState(initalRequest)

  const onConsultRfcHomoclave = (value) => {
    setRequest(value)
  }

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-sm-10 col-md-8">
          <h3 >Calcula RFC con homoclave</h3>
          <ConsultRfcHomoclave onConsultRfcHomoclave={value => onConsultRfcHomoclave(value) } />
          <ShowRfcHomoclave bodyRequest={request} />
        </div>
      </div>
    </div>
  )
}
