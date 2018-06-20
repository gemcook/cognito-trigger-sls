/* @flow */
import {createSignUpTemplate} from './misc';

export const createSignUpEmail = (event, link, config) => {
  const email = {};
  const request = event.request;
  const code = request.codeParameter;

  const template = createSignUpTemplate(config);

  const message = template.message
    .replace(/%\{LINK\}%/g, link)
    .replace(/%\{EMAIL\}%/g, request.userAttributes.email)
    .replace(/%\{CODE\}%/g, code);

  email.subject = template.subject;
  email.message = message;

  return email;
};
