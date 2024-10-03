import AuthPage from "../../../components/templates/auth/AuthPage";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <AuthPage>{children}</AuthPage>;
};

export default AuthLayout;
