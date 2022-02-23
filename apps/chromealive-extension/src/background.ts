/// <reference types="chrome"/>
import { onMessagePayload } from './lib/background/BackgroundMessenger';
import { groupTabs, ungroupTabs, collapseGroup } from './lib/background/TabManagement';
import logDebug from './lib/logDebug';
import './lib/background/BackgroundListeners';

let coreServerAddress;
fetch(chrome.runtime.getURL('data/coreServer.json'))
  .then((response) => response.json())
  .then(data => coreServerAddress = data.address)
  .catch(error => console.log(error));

const RuntimeActions = {
  groupTabs,
  ungroupTabs,
  collapseGroup,
};

onMessagePayload((payload, sendResponseFn) => {
  if (RuntimeActions[payload.action]) {
    const fn = RuntimeActions[payload.action];
    fn(payload)
      .catch(error => {
        if (sendResponseFn) sendResponseFn(error);
        console.error('chrome.runtime.onMessage:ERROR', { payload, error });
      })
      .then(result => {
        if (sendResponseFn) sendResponseFn(result);
        logDebug('chrome.runtime.onMessage:Result', { payload, result });
        return null;
      })
      .catch(error => console.error('chrome.runtime.onMessageResponse:ERROR', { payload, error }));
    return true;
  } else if (payload.action === 'getCoreServerAddress') {
    sendResponseFn(coreServerAddress);
    return true;
  }
  console.log('UNHANDLED MESSAGE: ', payload);
});
