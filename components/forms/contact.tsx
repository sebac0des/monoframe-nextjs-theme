'use client'

// Zod and react hook form
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

// Fonts
import { secondary } from '@/app/fonts'

// Components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { cn } from "@/lib/utils"


const formSchema = z.object({
    fullname: z.string().min(2).max(50),
    email: z.string().email(),
})

export function ContactForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullname: "",
            email: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField

                control={form.control}
                name="fullname"
                render={({ field }) => (
                    <FormItem >
                        <FormLabel className={cn(secondary.className)}>Nombre completo</FormLabel>
                        <FormControl>
                            <Input
                            autoComplete='off'
                            className={cn(secondary.className)} placeholder="Ingresa un email..." {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className={cn(secondary.className)}>Email</FormLabel>
                        <FormControl>
                            <Input 
                                  autoComplete='off'
                            className={cn(secondary.className)} placeholder="Ingresa un email..." {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <Button size="sm" variant="secondary" className={cn(secondary.className, "text-sm font-bold")} type="submit">Contactarme</Button>
        </form>
    </Form>
}