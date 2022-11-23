const currentLocation = window.location;
const baseUrl = currentLocation.protocol + '//' + currentLocation.host;

/**
 *
 * @param {*} provider
 * @throws {Error}
 * @returns
 */
export const getAuthUrl = (provider) => {
  const providerList = ['google', 'kakao'];

  if (!providerList.includes(provider)) {
    throw new Error('not valid provider');
  }

  return ` https://api.so-ok.cf/oauth2/authorization/${provider}?redirect_uri=${baseUrl}/`;
};
