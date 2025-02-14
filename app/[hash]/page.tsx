import { deobfuscateRoute } from '../../src/utils/route-obfuscator'
import { SignInForm } from '../components/sign-in-form'
import { redirect } from 'next/navigation'

export default function ObfuscatedRoute({
  params,
}: {
  params: { hash: string }
}) {
  const actualRoute = deobfuscateRoute(params.hash)

  if (actualRoute === '/signin') {
    return <SignInForm />
  }

  // Redirect to home if route is invalid
  redirect('/')
}
