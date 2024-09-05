import {
  arrow,
  autoUpdate,
  flip,
  FloatingArrow,
  FloatingPortal,
  offset,
  OffsetOptions,
  Placement,
  safePolygon,
  shift,
  useFloating,
  useInteractions,
  useTransitionStyles
} from '@floating-ui/react'
import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useHover } from '@floating-ui/react'

interface PopoverProps {
  children: React.ReactNode
  renderPopover: React.ReactNode
  className?: string
  offsetOptions?: OffsetOptions
  arrowWidth?: number
  arrowHeight?: number
  arrowColor?: string
  as?: React.ElementType
  initialOpen?: boolean
  placement?: Placement
  applyAnimation?: boolean
  strokeArrowColor?: string
  strokeArrowWidth?: number
}

export const Popover = ({
  children,
  renderPopover,
  className,
  offsetOptions,
  arrowWidth = 20,
  arrowHeight = 7,
  arrowColor = 'white',
  as: Element = 'div',
  initialOpen,
  placement = 'bottom-end',
  applyAnimation = true,
  strokeArrowWidth = 2,
  strokeArrowColor = 'transparent'
}: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen || false)
  const arrowRef = useRef<SVGSVGElement>(null)

  const { refs, floatingStyles, context, middlewareData } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(offsetOptions), flip(), shift(), arrow({ element: arrowRef })],
    placement,
    whileElementsMounted: autoUpdate
  })

  const arrowX = middlewareData.arrow?.x ?? 0
  const arrowY = middlewareData.arrow?.y ?? 0
  const transformX = arrowX + arrowWidth / 2
  const transformY = arrowY + arrowHeight

  const { isMounted, styles } = useTransitionStyles(context, {
    initial: { opacity: 0, transform: 'scale(0)' },
    common: ({ side }) => ({
      transformOrigin: {
        top: `${transformX}px calc(100% + ${arrowHeight}px)`,
        bottom: `${transformX}px ${-arrowHeight}px`,
        left: `calc(100% + ${arrowHeight}px) ${transformY}px`,
        right: `${-arrowHeight}px ${transformY}px`
      }[side],
      transitionDuration: applyAnimation ? '0.2s' : '0s'
    })
  })

  const hover = useHover(context, {
    handleClose: safePolygon()
  })

  const { getReferenceProps, getFloatingProps } = useInteractions([hover])

  return (
    <Element ref={refs.setReference} {...getReferenceProps()} className={className}>
      {children}
      <FloatingPortal>
        <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
          {applyAnimation && (
            <AnimatePresence>
              {isMounted && (
                <motion.div style={styles}>
                  {renderPopover}
                  <FloatingArrow
                    stroke={strokeArrowColor}
                    style={{ transform: 'translateY(-2px)' }}
                    fill={arrowColor}
                    strokeWidth={strokeArrowWidth}
                    ref={arrowRef}
                    context={context}
                    width={arrowWidth}
                    height={arrowHeight}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          )}
          {!applyAnimation && isMounted && (
            <>
              {renderPopover}
              <FloatingArrow
                stroke={strokeArrowColor}
                style={{ transform: 'translateY(-2px)' }}
                fill={arrowColor}
                strokeWidth={strokeArrowWidth}
                ref={arrowRef}
                context={context}
                width={arrowWidth}
                height={arrowHeight}
              />
            </>
          )}
        </div>
      </FloatingPortal>
    </Element>
  )
}
