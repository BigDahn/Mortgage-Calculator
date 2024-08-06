import {  useFormContext } from 'react-hook-form'
const InputForm = ({ label, name, type, defaultValue, size }) => {
  const {
    register, formState: { errors },
  } = useFormContext()
  return (
    <div className="form-control">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-slate-500 text-left"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
        {...register(name, {
          required: {
            value: true,
            message: 'This field is required',
          },
        })}
      />
    </div>
  )
}

export default InputForm
