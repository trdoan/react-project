export const env = {
  IS_PRODUCTION: import.meta.env.MODE === 'production',
  REACT_APP_DISCORD_WEBHOOK: import.meta.env.REACT_APP_DISCORD_WEBHOOK,
  REACT_APP_GRAPHQL_URI: import.meta.env.REACT_APP_GRAPHQL_URI,
}
