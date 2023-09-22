"use client"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import emailjs from "emailjs-com";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    message: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

type valuesObj = {
    name: string, email: string, message: string, [key: string]: string
}

function objectToForm(obj: valuesObj) {
    // Create a new form element
    const form = document.createElement('form');

    // Loop through the properties of the object
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            // Create an input element for each property
            const input = document.createElement('input');

            // Set the name attribute to the property name
            input.setAttribute('name', key);

            // Set the value attribute to the property value
            input.setAttribute('value', obj[key]);

            // Append the input element to the form
            form.appendChild(input);
        }
    }

    return form;
}

const ContactForm = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        const htmlFormElement = objectToForm(values)
        emailjs.sendForm(
            "service_1zbwnx3",
            "template_x63wtrb",
            htmlFormElement,
            "GnKZnK58WI7DqNaLd"
        );
        form.reset()
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your name" {...field} className="border-black" />
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
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your email" {...field} className="border-black" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your message" {...field} className="border-black" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default ContactForm
