interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
}

export const InputNumber = ({
  classNameInput = 'p-3 w-full h-10 text-[#000] leading-normal text-sm outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-md',
  onChange,
  ...rest
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if ((/^\d+$/.test(value) || value === '') && onChange) {
      onChange(e)
    }
  }

  return <input className={classNameInput} onChange={handleChange} {...rest} />
}
