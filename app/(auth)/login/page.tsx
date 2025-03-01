import { AuthLayout } from "@/components/auth/auth-layout"
import { LoginForm } from "@/components/auth/login-form"

export default function Login() {
  return (
    <AuthLayout title="Welcome Back" description="Sign in to continue your educational journey with AMI Education">
      <LoginForm />
    </AuthLayout>
  )
}

