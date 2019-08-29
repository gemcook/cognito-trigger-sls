import {createSettingPasswordTemplate} from './misc';

export const createSettingPasswordEmail = (event, link, config) => {
  const email = {};
  const request = event.request;
  const code = request.codeParameter;
  const template = createSettingPasswordTemplate(config);

  const message = template.message
    .replace(/%\{LINK\}%/g, link)
    .replace(/%\{EMAIL\}%/g, request.userAttributes.email)
    .replace(/%\{CODE\}%/g, code);

  email.subject = template.subject;
  email.message = message;

  return email;
};
