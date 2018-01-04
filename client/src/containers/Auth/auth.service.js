import { ajaxPOST } from '../../services/api.service';

const validateRegistration = (creds) => {
  return ajaxPOST('/auth/register', creds);
}

export default {
  validateRegistration
}
