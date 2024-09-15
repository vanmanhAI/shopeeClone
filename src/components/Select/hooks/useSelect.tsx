import {
  autoUpdate,
  flip,
  offset,
  OffsetOptions,
  Placement,
  size,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useInteractions,
  useListNavigation,
  useRole
} from '@floating-ui/react'
import { useCallback, useMemo, useRef, useState } from 'react'

export interface SelectOptions {
  initialOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  isApplySearchInputEvent?: boolean
  refPressEvent?: 'click' | 'focus'
  isSameLengthAsReference?: boolean
  minusFloatingWidth?: number
  placement?: Placement
  offsetOption?: OffsetOptions
  zIndex?: number
}

export default function useSelect({
  initialOpen = false,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  isApplySearchInputEvent = false,
  refPressEvent = 'click',
  isSameLengthAsReference = false,
  minusFloatingWidth = 0,
  placement = 'bottom-start',
  offsetOption = 0,
  zIndex = 1
}: SelectOptions = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const isOpen = controlledOpen ?? uncontrolledOpen
  const setIsOpen = setControlledOpen ?? setUncontrolledOpen

  const data = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      flip(),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: isSameLengthAsReference ? `${rects.reference.width - minusFloatingWidth}px` : 'auto'
          })
        }
      }),
      offset(offsetOption)
    ]
  })

  const elementsRef = useRef<Array<HTMLElement | null>>([])

  const handleSelect = useCallback(
    (index: number | null) => {
      if (!isApplySearchInputEvent) {
        setSelectedIndex(index)
        setIsOpen(false)
      }
    },
    [setIsOpen, isApplySearchInputEvent]
  )

  const optionSearchInput = useMemo(() => {
    if (isApplySearchInputEvent) {
      return {
        onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            setIsOpen(false)
          }
        }
      }
    }
    return {}
  }, [isApplySearchInputEvent, setIsOpen])

  const searchInputSuggestions = useMemo(() => {
    if (isApplySearchInputEvent) {
      return {
        onClick: () => setIsOpen(false)
      }
    }
    return {}
  }, [isApplySearchInputEvent, setIsOpen])

  const listNav = useListNavigation(data.context, {
    listRef: elementsRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
    focusItemOnHover: false,
    loop: true
  })

  const click = useClick(data.context, {
    enabled: refPressEvent === 'click' && controlledOpen === null
  })

  const dismiss = useDismiss(data.context, { enabled: refPressEvent === 'click' && controlledOpen === null })

  const focus = useFocus(data.context, { enabled: refPressEvent === 'focus' && controlledOpen === null })

  const role = useRole(data.context, { role: 'combobox' })

  const interactions = useInteractions([listNav, click, dismiss, role, focus])

  return useMemo(
    () => ({
      isOpen,
      setIsOpen,
      activeIndex,
      selectedIndex,
      elementsRef,
      ...interactions,
      ...data,
      optionSearchInput,
      searchInputSuggestions,
      handleSelect,
      zIndex
    }),
    [
      activeIndex,
      selectedIndex,
      interactions,
      handleSelect,
      optionSearchInput,
      searchInputSuggestions,
      data,
      isOpen,
      setIsOpen,
      zIndex
    ]
  )
}
