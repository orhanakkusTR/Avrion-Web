"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { CONTACT_PAGE } from "@/lib/content";

const schema = z.object({
  name: z.string().min(2, "Ange ditt namn (minst 2 tecken)."),
  phone: z.string().min(7, "Ange ett giltigt telefonnummer."),
  email: z.string().email("Ange en giltig e-postadress."),
  regnr: z.string().optional(),
  service: z.string().min(1, "Välj en tjänst."),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

interface InquiryFormProps {
  submitLabel?: string;
}

export function InquiryForm({ submitLabel }: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const label = submitLabel ?? CONTACT_PAGE.submitLabel;
  const f = CONTACT_PAGE.fields;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-1">
          {f.name.label} <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder={f.name.placeholder}
          aria-required="true"
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
          className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand aria-invalid:border-red-400"
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Phone + Email (2 col) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-1">
            {f.phone.label} <span aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder={f.phone.placeholder}
            aria-required="true"
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p id="phone-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-1">
            {f.email.label} <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder={f.email.placeholder}
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Regnr + Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="regnr" className="block text-sm font-medium text-slate-900 mb-1">
            {f.regnr.label}
          </label>
          <input
            id="regnr"
            type="text"
            placeholder={f.regnr.placeholder}
            {...register("regnr")}
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-slate-900 mb-1">
            {f.service.label} <span aria-hidden="true">*</span>
          </label>
          <select
            id="service"
            aria-required="true"
            aria-describedby={errors.service ? "service-error" : undefined}
            {...register("service")}
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand"
            aria-invalid={!!errors.service}
            defaultValue=""
          >
            <option value="" disabled>
              {f.service.placeholder}
            </option>
            {f.service.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.service.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-1">
          {f.message.label}
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder={f.message.placeholder}
          {...register("message")}
          className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg text-sm transition-colors focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      >
        {status === "sending" && (
          <Loader2 size={16} className="animate-spin" aria-hidden="true" />
        )}
        {label}
      </button>

      {/* Feedback states */}
      {status === "success" && (
        <p role="status" className="text-sm text-success font-medium text-center">
          Tack! Vi återkommer till dig så snart som möjligt.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm text-red-600 font-medium text-center">
          Något gick fel. Försök igen eller kontakta oss via telefon.
        </p>
      )}

      <p className="text-xs text-slate-400 text-center">{CONTACT_PAGE.privacyNote}</p>
    </form>
  );
}
