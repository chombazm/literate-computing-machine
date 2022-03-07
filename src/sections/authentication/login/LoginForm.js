import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useSelector, useDispatch } from 'react-redux';
// component
import { useSnackbar } from 'notistack';
import Iconify from '../../../components/Iconify';
import { loginStart, loginSuccess, loginFailure } from '../../../store/reducers/loginSlice';
import * as api from '../../../api/authentication';
// ----------------------------------------------------------------------

export default function LoginForm() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { isLoading: isLoadingLogin } = useSelector((state) => state.login);
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: async () => {
      dispatch(loginStart());
      const { email, password } = values;
      try {
        const data = await api.login({ email, password });
        // login success call
        const { tokens } = data;
        sessionStorage.setItem('tukuya_access_token', tokens.access.token);
        const user = {
          user: data.user,
          refreshToken: tokens.refresh.token
        };
        localStorage.setItem('tukuya_admin', JSON.stringify(user));
        dispatch(loginSuccess(user.user));

        enqueueSnackbar(`Welcome ${data.user.name}`, {
          variant: 'success'
        });
        navigate('/dashboard/app', { replace: true });
      } catch (error) {
        dispatch(loginFailure(error.response.data.message));
        enqueueSnackbar(`Opps! ${error.response.data.message}`, {
          variant: 'error'
        });
      }
      // navigate('/dashboard', { replace: true });
    }
  });

  const { errors, touched, values, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  // console.log(chomba, 'isLoadingLogin');
  // const isLoadingLogin = true;
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          />

          <Link component={RouterLink} variant="subtitle2" to="#" underline="hover">
            Forgot password?
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isLoadingLogin}
        >
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
