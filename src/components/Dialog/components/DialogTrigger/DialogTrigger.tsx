import { useMergeRefs } from '@floating-ui/react'
import * as React from 'react'
import useDialogContext from '@/components/Dialog/hooks/useDialogContext'

interface DialogTriggerProps {
  children: React.ReactNode
  asChild?: boolean
}

export const DialogTrigger = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement> & DialogTriggerProps>(
  function DialogTrigger({ children, asChild = false, ...props }, propRef) {
    const context = useDialogContext()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const childrenRef = (children as any).ref
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef])

    // `asChild` allows the user to pass any element as the anchor

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(
        children,
        context.getReferenceProps({
          ref,
          ...props,
          ...children.props,
          'data-state': context.open ? 'open' : 'closed'
        })
      )
    }

    return (
      <button
        ref={ref}
        // The user can style the trigger based on the state
        data-state={context.open ? 'open' : 'closed'}
        {...context.getReferenceProps(props)}
      >
        {children}
      </button>
    )
  }
)
