import { logErrorToDiscordChannel } from '@/helpers/log'
import { InternalServerError } from '@/pages'
import React, { ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
  onError?: () => void
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidMount(): void {
    const { onError } = this.props
    const { hasError } = this.state

    if (hasError && onError) {
      onError?.()
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error({ error, errorInfo })
    logErrorToDiscordChannel(error, errorInfo)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) return <InternalServerError />

    return !hasError && children
  }
}
