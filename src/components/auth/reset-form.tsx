'use client'

import React, { useTransition } from 'react'

import { Reset } from '@/actions/reset'
import { CardWrapper } from '@/components/auth/card-wrapper'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ResetSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const ResetForm = () => {
  const [error, setError] = React.useState<string | undefined>('')
  const [success, setSuccess] = React.useState<string | undefined>('')
  const [isLoading, startTransition] = useTransition()

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = (credentials: z.infer<typeof ResetSchema>) => {
    setError('')
    setSuccess('')
    console.log(credentials)
    startTransition(async () => {
      const response = await Reset(credentials)
      setError(response?.error)
      setSuccess(response?.success)
    })
  }

  return (
    <CardWrapper headerLabel='Forgot your password?' backButtonLabel='Back to login' backButtonHref='/auth/login'>
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
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type='submit' className='w-full' disabled={isLoading}>
            Reset Password
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default ResetForm
