'use client'

import Image from 'next/image'
import Link from 'next/link'

import githubIcon from '@/assets/github-icon.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

import { AlertTriangle, Loader2 } from 'lucide-react'

import { signInWithEmailAndPassword } from './actions'
import { useActionState } from 'react'
import { cn } from '@/lib/utils'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function SignInForm() {
  const [{ success, message, errors, formData }, formAction, isPending] = useActionState(
    signInWithEmailAndPassword,
    { success: false, message: null, errors: null, formData: null }
  )

  return (
    <form action={formAction} className="space-y-4">
      {success === false && message && (
        <Alert variant="destructive">
          <AlertTriangle className='size-4' />
          <AlertTitle>Sign in failed</AlertTitle>
          <AlertDescription>
            <p>{message}</p>
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" name="email" type="email" defaultValue={formData?.get('email')?.toString()} />

        {errors?.email && (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">{errors.email}</p>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" />

        {errors?.password && (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">{errors.password}</p>
        )}

        <Link
          className="text-xs font-medium text-foreground hover:underline"
          href="/auth/forgot-password"
        >
          Forgot your password?
        </Link>
      </div>

      <Button className="w-full" type="submit" disabled={isPending}>
        {isPending && <Loader2 className='animate-spin size-5 mr-1' />}
        Sign in with e-mail
      </Button>

      <div className="flex w-full justify-center">
        <Button asChild size="sm" variant="link">
          <Link
            href='/auth/sign-up'
            className={cn(isPending && "opacity-50 pointer-events-none")}
          >
            Create new account
          </Link>
        </Button>
      </div>

      <Separator />

      <Button
        className="w-full"
        type="submit"
        variant="outline"
        disabled={isPending}
      >
        <Image
          alt="Sign in with Github"
          className="mr-2 size-4 dark:invert"
          src={githubIcon}
        />
        Sign in with GitHub
      </Button>
    </form>
  )
}
