import { isChrome, isEdge, isFirefox } from 'react-device-detect';

export const whatBrowser = () => {
  if (isChrome) {
    return 'CHROME';
  }
  if (isFirefox) {
    return 'FIREFOX';
  }
  if (isEdge) {
    return 'EDGE';
  }
  return 'OTHER';
};