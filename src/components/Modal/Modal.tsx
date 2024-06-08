import { tw } from '@/helpers/tailwindcss'
import classNames from 'classnames'
import { ComponentType, ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { twMerge } from 'tailwind-merge'

type CloseButtonProps = {
  onClick?: () => void
}

type Props = {
  open: boolean
  onChange?: () => void
  onClose?: () => void
  children?: ReactNode
  closeButton?: ComponentType<CloseButtonProps>
  fullScreen?: boolean
  clickOutside?: boolean
  classNames?: {
    root?: string
    overlay?: string
    header?: string
    content?: string
    footer?: string
    wrapper?: string
  }
}

const Modal = (props: Props) => {
  const {
    open,
    onChange,
    children,
    onClose,
    closeButton: CloseButton,
    fullScreen,
    classNames: classes,
    clickOutside,
  } = props

  const handleClose = () => {
    onClose?.()
  }

  useEffect(() => {
    onChange?.()
  }, [onChange, open])

  return createPortal(
    <div className={twMerge(classNames('modal', classes?.root))}>
      <div
        className={twMerge(
          classNames(
            'modal-overlay fixed inset-0 -z-[50] invisible',
            {
              'z-[1] bg-black opacity-70 visible': open,
              'bg-transparent': fullScreen,
            },
            classes?.overlay,
          ),
        )}
        onClick={clickOutside ? handleClose : () => {}}
      />
      <div
        className={twMerge(
          classNames(
            'modal-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] opacity-0 transition-modal invisible max-w-dvw max-h-dvh shadow-modal',
            {
              'opacity-100 bg-white visible w-max h-max': open,

              'w-dvw h-dvh': fullScreen,
            },
            classes?.wrapper,
          ),
        )}
      >
        <div className={tw('modal-header', classNames(classes?.header))}>
          {CloseButton && <CloseButton onClick={handleClose} />}
        </div>
        <div className={tw('modal-content', classNames(classes?.content))}>
          {children}
        </div>
        <div
          className={tw('modal-footer', classNames(classes?.footer))}
        ></div>
      </div>
    </div>,
    document.body,
  )
}

export default Modal
