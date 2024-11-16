import * as m from '@saas/i18n/messages'
import Image from 'next/image'
import Link from 'next/link'

import githubIcon from '@/assets/github-icon.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export default function SignUpPage() {
  return (
    <form action="" className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="name">{m.name()}</Label>
        <Input id="name" name="name" type="name" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="email">{m.email()}</Label>
        <Input id="email" name="email" type="email" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">{m.password()}</Label>
        <Input id="password" name="password" type="password" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password_confirmation">
          {m.confirm_your_password()}
        </Label>
        <Input
          id="password_confirmation"
          name="password_confirmation"
          type="password"
        />
      </div>

      <Button className="w-full" type="submit">
        {m.create_account()}
      </Button>

      <div className="flex w-full justify-center">
        <Button asChild size="sm" variant="link">
          <Link href="/auth/sign-in">{m.already_registered_sign_in()}</Link>
        </Button>
      </div>

      <Separator />

      <Button className="w-full" type="submit" variant="outline">
        <Image
          alt={m.sign_up_with_github()}
          className="mr-2 size-4 dark:invert"
          src={githubIcon}
        />
        {m.sign_up_with_github()}
      </Button>
    </form>
  )
}
