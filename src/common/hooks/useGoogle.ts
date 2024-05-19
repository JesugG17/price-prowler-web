import { useAuthStore } from '@/store/auth/useAuthStore';
import { useGoogleLogin } from '@react-oauth/google';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';

export const useGoogle = () => {
  const { googleSignIn } = useAuthStore();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (response) => {
      try {
        await googleSignIn(response.code);
        navigate('/task', {
          replace: true,
        });
      } catch (error) {
        // setChecking(false);
      }
    },
    onError: () => toast.error('Login failed'),
    // onNonOAuthError: () => setChecking(false),
  });

  return login;
};