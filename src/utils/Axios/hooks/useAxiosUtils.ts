import config from '../../../config';
import { useSnackbarContext } from '../../../contexts/Snackbar';
import { CustomAxiosError } from '../types';

export default function useAxiosUtils() {
  const { dispatchSnackbar } = useSnackbarContext();
  function handleAxiosError(error: unknown) {
    const { response } = config.messages;
    let messageError = '';
    const typedError = error as CustomAxiosError;
    const responseData = typedError.response?.data;

    const responseError = (!!responseData && responseData.message) as string;
    if (responseError) {
      messageError = responseError;
    } else {
      messageError = response.error.default;
    }

    dispatchSnackbar({ message: messageError, type: 'error' });

    return { messageError };
  }

  return { handleAxiosError };
}
