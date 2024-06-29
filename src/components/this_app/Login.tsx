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
  password: z.string().min(8).max(30)
})

export const Login = ({
  setIsSignUp
}: {
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
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
          <Button className="w-full" type="submit">
            Login
          </Button>
        </form>
      </Form>

      <div className="mt-8 flex w-full flex-col items-center justify-center space-y-1">
        <div className="flex text-sm">
          <p
            onClick={() => alert("Forgot your password?")}
            className="cursor-pointer text-cyan-600 hover:text-cyan-800">
            Forgot your password?
          </p>
        </div>

        <div className="flex space-x-2 text-sm">
          <p className="text-gray-600">Dont have an account?</p>
          <p
            onClick={() => setIsSignUp(true)}
            className="cursor-pointer text-cyan-600 hover:text-cyan-800">
            Sign Up
          </p>
        </div>
      </div>
    </>
  )
}
