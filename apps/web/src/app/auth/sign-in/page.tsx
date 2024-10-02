import Image from 'next/image'
import Link from 'next/link'

import githubIcon from '@/assets/github-icon.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export default function SignInPage() {
  return (
    <form action="" className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" name="email" type="email" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" />

        <Link
          className="text-xs font-medium text-foreground hover:underline"
          href="/auth/forgot-password"
        >
          Forgot your password?
        </Link>
      </div>

      <Button className="w-full" type="submit">
        Sign in with e-mail
      </Button>

      <div className="flex w-full justify-center">
        <Button asChild size="sm" variant="link">
          <Link href="/auth/sign-up">Create new account</Link>
        </Button>
      </div>

      <Separator />

      <Button className="w-full" type="submit" variant="outline">
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
