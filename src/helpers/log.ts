import { env } from '@/constants/env'
import { ErrorInfo } from 'react'

export const logErrorToDiscordChannel = (
  error: Error,
  errorInfo: ErrorInfo,
) => {
  // Send request to webhook Discord
  const webhookUrl = env.REACT_APP_DISCORD_WEBHOOK
  const errorMessage = error.toString()
  const errorStack = errorInfo.componentStack

  return fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      embeds: [
        {
          title: 'Client crashed! 🚨',
          color: '16711680',
          fields: [
            {
              name: 'Error Message',
              value: errorMessage,
            },
            {
              name: 'Stack Trace',
              value: errorStack,
            },
          ],
        },
      ],
    }),
  })
}
