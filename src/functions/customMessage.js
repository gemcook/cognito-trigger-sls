import Base64 from 'base-64';
import {createSignUpEmail, createSettingPasswordEmail} from './../utils';

export const customMessage = (event, config) => {
  return new Promise((resolve, reject) => {
    const _event = event;
    const username = Base64.encode(_event.userName);
    const sub = Base64.encode(_event.userSub);
    const email = Base64.encode(_event.request.userAttributes.email);

    console.log(_event);

    console.log(username);
    console.log(sub);
    console.log(email);

    try {
      switch (_event.triggerSource) {
        // SignUp
        case 'CustomMessage_ResendCode':
        case 'CustomMessage_SignUp': {
          const link = `${config.signUpRedirectPath}?username=${username}&email=${email}&sub=${sub}`;
          const email = createSignUpEmail(_event, link, config);

          _event.response.emailSubject = `${config.prefix}${email.subject}`;
          _event.response.emailMessage = email.message;

          break;
        }
        // SettingPassword
        case 'CustomMessage_ForgotPassword': {
          const link = `${config.resetPasswordRedirectPath}?username=${username}`;
          const email = createSettingPasswordEmail(_event, link, config);

          _event.response.emailSubject = `${config.prefix}${email.subject}`;
          _event.response.emailMessage = email.message;
          break;
        }
        default:
          break;
      }

      resolve(_event);
    } catch (error) {
      reject(error);
    }
  });
};
