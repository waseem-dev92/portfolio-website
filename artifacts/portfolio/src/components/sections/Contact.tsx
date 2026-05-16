import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/waseemabbas-b56670305' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Email', icon: Mail, href: 'mailto:contact@example.com' },
];

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success('Message sent successfully!', {
      description: "I'll get back to you as soon as possible.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
            <span className="text-primary">04.</span> Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary/30 rounded-full mb-6" />
          <p className="text-muted-foreground text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-black/40 border-white/10 focus-visible:ring-primary/50 text-white placeholder:text-gray-600" />
                        </FormControl>
                        <FormMessage className="text-destructive/90" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} className="bg-black/40 border-white/10 focus-visible:ring-primary/50 text-white placeholder:text-gray-600" />
                        </FormControl>
                        <FormMessage className="text-destructive/90" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message here..." 
                            className="min-h-[150px] bg-black/40 border-white/10 focus-visible:ring-primary/50 text-white placeholder:text-gray-600 resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-destructive/90" />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full h-12 text-base font-semibold shadow-[0_0_20px_rgba(0,195,255,0.2)] hover:shadow-[0_0_30px_rgba(0,195,255,0.4)] transition-all gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Connect</h3>
                <p className="text-muted-foreground">Find me on these platforms or drop me an email.</p>
              </div>
              
              <div className="flex flex-col gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-black/40 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{link.name}</div>
                        <div className="text-sm text-muted-foreground">@{link.name.toLowerCase()}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
