import { forwardRef, HTMLProps } from 'react'
import useSelectContext from '../../hooks/useSelectContext'
import { FloatingFocusManager, FloatingList, FloatingPortal, useMergeRefs } from '@floating-ui/react'

interface SelectContentProps {
  children: React.ReactNode
}

const SelectContent = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement> & SelectContentProps>(function SelectContent(
  { children, ...props },
  propRef
) {
  const {
    isOpen,
    context: floatingContext,
    elementsRef,
    floatingStyles,
    searchInputSuggestions,
    zIndex,
    ...context
  } = useSelectContext()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useMergeRefs([context.refs.setFloating, propRef])

  if (!isOpen) return null

  return (
    <FloatingPortal>
      <FloatingFocusManager context={floatingContext} modal={false} disabled>
        <div
          ref={ref}
          className='focus-within:border-none focus-within:outline-none'
          style={{ ...floatingStyles, zIndex: zIndex }}
          {...context.getFloatingProps({ ...searchInputSuggestions, ...props })}
        >
          <FloatingList elementsRef={elementsRef}>{children}</FloatingList>
        </div>
      </FloatingFocusManager>
    </FloatingPortal>
  )
})

export default SelectContent
