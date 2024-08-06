

const FormCheckbox = ({ label, name, value, defaultValue, size }) => {
  
  return (
    <div className="flex border-2 w-80 items-center">
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultValue}
        className={`radio radio-primary  ${size}`}
      />
      <label htmlFor={value} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
    </div>
  )
}

export default FormCheckbox
