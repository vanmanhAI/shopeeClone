interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}

export const Button = (props: ButtonProps) => {
  const { className, disabled, children, ...rest } = props
  const newClassName = `${className} ${disabled ? ' cursor-not-allowed' : ''}`
  return (
    <button className={newClassName} disabled={disabled} {...rest}>
      <span>{children}</span>
    </button>
  )
}
