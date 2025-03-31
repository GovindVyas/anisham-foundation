"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // TODO: Implement form submission logic
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Contact Form */}
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm dark:border-gray-800">
          <h2 className="mb-6 text-2xl font-semibold">Send us a message</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
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
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Subject of your message" {...field} />
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
                      <Textarea
                        placeholder="Write your message here..."
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Get in touch</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Have questions or want to collaborate? Reach out to us using the details below or fill out the contact form.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600 dark:text-gray-400">
                123 Foundation Lane<br />
                Cityville, State 12345<br />
                Country
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <a href="tel:+1234567890" className="text-blue-600 hover:underline dark:text-blue-400">
                +1 (234) 567-890
              </a>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:info@anishamfoundation.org" className="text-blue-600 hover:underline dark:text-blue-400">
                info@anishamfoundation.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}