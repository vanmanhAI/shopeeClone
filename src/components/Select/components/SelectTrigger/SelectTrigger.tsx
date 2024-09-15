import { useMergeRefs } from '@floating-ui/react'
import { cloneElement, forwardRef, HTMLProps, isValidElement } from 'react'
import useSelectContext from '@/components/Select/hooks/useSelectContext'

interface SelectTriggerProps {
  children: React.ReactNode
  asChild?: boolean
}

const SelectTrigger = forwardRef<HTMLElement, HTMLProps<HTMLElement> & SelectTriggerProps>(function SelectTrigger(
  { children, asChild = false, ...props },
  propRef
) {
  const { refs, optionSearchInput, getReferenceProps } = useSelectContext()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const childrenRef = (children as any).ref

  const ref = useMergeRefs([refs.setReference, propRef, childrenRef])

  if (asChild && isValidElement(children)) {
    return cloneElement(
      children,
      getReferenceProps({
        tabIndex: 0,
        ...optionSearchInput,
        ref,
        ...props,
        ...children.props
      })
    )
  }

  return (
    <button ref={ref} tabIndex={0} {...getReferenceProps(props)}>
      {children}
    </button>
  )
})

export default SelectTrigger
