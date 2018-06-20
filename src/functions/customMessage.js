/* @flow */
import Base64 from 'js-base64';
import {createSignUpEmail, createSettingPasswordEmail} from './../utils';

export const customMessage = (event, callback, config) => {
  const _event = event;
  const username = Base64.encode(_event.userName);

  switch (_event.triggerSource) {
    // SignUp
    case 'CustomMessage_ResendCode':
    case 'CustomMessage_SignUp': {
      const link = `${config.signUpRedirectPath}?username=${username}`;
      const email = createSignUpEmail(_event, link, config);

      _event.response.emailSubject = `${config.prefix}${email.subject}`;
      _event.response.emailMessage = email.message;

      break;
    }
    // SettingPassword
    case 'CustomMessage_ForgotPassword': {
      const link = `
        ${config.resetPasswordRedirectPath}
      ?username=${username}`;
      const email = createSettingPasswordEmail(_event, link, config);

      _event.response.emailSubject = `${config.prefix}${email.subject}`;
      _event.response.emailMessage = email.message;
      break;
    }
    default:
      break;
  }

  callback(null, _event);
  return;
};
