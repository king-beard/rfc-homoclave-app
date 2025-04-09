import { useState } from "react";
import { useForm } from "../hooks/useForm"
import { ShowRfcHomoclave } from "./ShowRfcHomoclave";

const initialForm = {
  name: "",
  fathersLastName: "",
  mothersLastName: "",
  birthdayDate: "12-03-1997",
  personType: "fisica"
}

export const ConsultRfcHomoclave = () => {
  const { formState, onInputChange, onResetForm } = useForm(initialForm);
  const { name, fathersLastName, mothersLastName, birthdayDate } = formState;
  const [isRender, setIsRender] = useState(false)

  const onSubmit = () => {
    event.preventDefault()
    setIsRender(true)
  }

  const onCleanForm = () => {
    event.preventDefault()
    setIsRender(false)
    onResetForm(initialForm)
  }

  return (
    <form>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Nombre"
        name="name"
        value={name}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Apellido Paterno"
        name="fathersLastName"
        value={fathersLastName}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Apellido Materno"
        name="mothersLastName"
        value={mothersLastName}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Fecha de nacimiento"
        name="date"
        value={birthdayDate}
        onChange={onInputChange}
      />
      <div className="input-group date">
        <input type="text" className="form-control" />
        <div className="input-group-text"><i className="fa fa-calendar"></i></div>
      </div>
      <button type="submit" className="btn btn-outline-danger" onClick={onSubmit}>Calcular</button>
      <button type="submit" className="btn btn-outline-danger" onClick={onCleanForm}>Limpiar Formulario</button>
      {isRender && <ShowRfcHomoclave bodyRequest={formState} />}
    </form>
  )
}
