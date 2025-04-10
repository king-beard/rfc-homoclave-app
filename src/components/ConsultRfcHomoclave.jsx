import { useState } from "react";
import { useForm } from "../hooks/useForm"
import { ShowRfcHomoclave } from "./ShowRfcHomoclave";

const initialForm = {
  name: "",
  fathersLastName: "",
  mothersLastName: "",
  birthdayDate: "",
  personType: "fisica"
}

export const ConsultRfcHomoclave = () => {
  const { formState, onInputChange, onResetForm } = useForm(initialForm);
  const { name, fathersLastName, mothersLastName, birthdayDate } = formState;
  const [isRender, setIsRender] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    setIsRender(true)
  }

  const onCleanForm = (event) => {
    event.preventDefault()
    setIsRender(false)
    onResetForm(initialForm)
  }

  return (
    <form className="mt-4">
      <div className="mb-2">
        <label className="form-label">Nombre(s)</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={name}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Apellido Paterno</label>
        <input
          type="text"
          className="form-control"
          name="fathersLastName"
          value={fathersLastName}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Apellido Materno</label>
        <input
          type="text"
          className="form-control"
          name="mothersLastName"
          value={mothersLastName}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Fecha de nacimiento (DD-MM-YYYY)</label>
        <input
          type="text"
          className="form-control"
          name="birthdayDate"
          value={birthdayDate}
          onChange={onInputChange}
        />
      </div>

      <div className="d-flex justify-content-center mt-5">
        <button type="submit" className="btn btn-outline-danger" onClick={onSubmit}>Calcular</button>
        <button type="submit" className="btn btn-outline-danger" onClick={onCleanForm}>Limpiar Formulario</button>
      </div>

      {isRender && <ShowRfcHomoclave bodyRequest={formState} />}
    </form>
  )
}
