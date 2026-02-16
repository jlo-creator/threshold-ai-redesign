import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SectionDivider from "./SectionDivider";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  company: z.string().trim().max(100, "Company name must be under 100 characters").optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be under 2000 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactFormData) => {
    const subject = encodeURIComponent(`Inquiry from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}${data.company ? `\nCompany: ${data.company}` : ""}\n\n${data.message}`
    );
    window.location.href = `mailto:contact@thresholdgroup.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email client…", description: "Your message details have been pre-filled." });
    reset();
  };

  return (
    <section id="contact" className="py-20 md:py-[100px] bg-primary">
      <div className="max-w-content mx-auto px-6">
        <h2 className="font-display text-3xl md:text-[34px] font-semibold text-muted">Contact</h2>
        <SectionDivider />

        <p className="text-[17px] md:text-lg leading-[1.7] font-sans mb-10 text-muted">
          If you are ready to redesign your organization around what AI makes possible, not just adopt it, reach out with a brief note describing where you are and where you need to go.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-[560px]">
          <div>
            <label htmlFor="name" className="block text-sm font-sans font-medium mb-1.5 text-muted">
              Name <span className="text-destructive">*</span>
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className="w-full border border-border bg-card text-foreground px-4 py-2.5 text-sm font-sans rounded-sm focus:outline-none focus:ring-1 focus:ring-ring"
              placeholder="Your name" />

            {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-sans font-medium mb-1.5 text-muted">
              Email <span className="text-destructive">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full border border-border bg-card text-foreground px-4 py-2.5 text-sm font-sans rounded-sm focus:outline-none focus:ring-1 focus:ring-ring"
              placeholder="you@company.com" />

            {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-sans font-medium mb-1.5 text-muted">
              Company
            </label>
            <input
              id="company"
              type="text"
              {...register("company")}
              className="w-full border border-border bg-card text-foreground px-4 py-2.5 text-sm font-sans rounded-sm focus:outline-none focus:ring-1 focus:ring-ring"
              placeholder="Your company" />

            {errors.company && <p className="text-destructive text-sm mt-1">{errors.company.message}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-sans font-medium mb-1.5 text-muted">
              Message <span className="text-destructive">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              {...register("message")}
              className="w-full border border-border bg-card text-foreground px-4 py-2.5 text-sm font-sans rounded-sm focus:outline-none focus:ring-1 focus:ring-ring resize-vertical"
              placeholder="Describe where you are and where you need to be" />

            {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-primary-foreground border border-accent px-6 py-3 text-sm font-sans font-medium hover:border-accent/80 disabled:opacity-50">

            Request a Conversation
          </button>
        </form>
      </div>
    </section>);

};

export default Contact;