import { ConsultRfcHomoclave } from "./components/ConsultRfcHomoclave"

export const RfcHomoclaveApp = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-sm-10 col-md-8">
          <h3>Calcula RFC con homoclave</h3>
          <ConsultRfcHomoclave />
        </div>
      </div>
    </div>
  )
}
