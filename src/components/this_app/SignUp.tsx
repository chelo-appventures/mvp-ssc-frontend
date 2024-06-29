"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(30),
  confirmPassword: z.string().min(8).max(30)
})

export const SignUp = ({
  setIsSignUp
}: {
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: ""
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.password !== values.confirmPassword) {
      const message = "Passwords do not match"
      form.setError("password", {
        type: "manual",
        message
      })
      form.setError("confirmPassword", {
        type: "manual",
        message
      })
      return
    }

    alert(JSON.stringify(values, null, 2))
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="anakin@skywalker.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Sign Up
          </Button>
        </form>
      </Form>

      <div className="mt-8 flex w-full flex-col items-center justify-center">
        <p className="flex space-x-2 text-sm text-gray-600">
          <p>Already have an account?</p>
          <p
            onClick={() => setIsSignUp(false)}
            className="cursor-pointer text-cyan-600 hover:text-cyan-800">
            Login
          </p>
        </p>
      </div>
    </>
  )
}
