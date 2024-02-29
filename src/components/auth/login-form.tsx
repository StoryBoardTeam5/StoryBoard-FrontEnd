'use client'

import React, { useTransition } from 'react'

import { Login } from '@/actions/login'
import { CardWrapper } from '@/components/auth/card-wrapper'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { LoginSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const LoginForm = () => {
  const [error, setError] = React.useState<string | undefined>('')
  const [success, setSuccess] = React.useState<string | undefined>('')
  const [isLoading, startTransition] = useTransition()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked' ? 'Email already in use with another provider!' : ''
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (credentials: z.infer<typeof LoginSchema>) => {
    setError('')
    setSuccess('')
    startTransition(async () => {
      const response = await Login(credentials, callbackUrl)
      setError(response?.error)
      setSuccess(response?.success)
    })
  }

  return (
    <CardWrapper
      headerLabel='Welcome Back'
      backButtonLabel='Don`t have an account?'
      backButtonHref='/auth/register'
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='example@example.com' type='email' disabled={isLoading} />
                  </FormControl>
                  <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='******' type='password' disabled={isLoading} />
                  </FormControl>
                  <Button size='sm' variant='link' asChild className='px-0 font-normal'>
                    <Link href='/auth/reset'>Forgot Password?</Link>
                  </Button>
                  <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                </FormItem>
              )}
            ></FormField>
          </div>
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <Button type='submit' className='w-full' disabled={isLoading}>
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default LoginForm
