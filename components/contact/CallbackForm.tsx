"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, PhoneCall } from "lucide-react";
import { SERVICES_CALLBACK } from "@/lib/content";
import { submitInquiry } from "@/lib/submitInquiry";

const schema = z.object({
  firstName: z.string().min(2, "Ange ditt förnamn."),
  lastName: z.string().min(2, "Ange ditt efternamn."),
  phone: z.string().min(7, "Ange ett giltigt telefonnummer."),
  company: z.string().optional(), // honeypot — hidden from real users
});

type FormValues = z.infer<typeof schema>;

/**
 * Compact "we call you back" form — name + phone only. Posts to the same
 * inquiry endpoint with a fixed service tag so callbacks are identifiable.
 */
export function CallbackForm() {
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
      const ok = await submitInquiry({
        name: `${data.firstName} ${data.lastName}`,
        phone: data.phone,
        service: SERVICES_CALLBACK.service,
        company: data.company,
      });
      if (!ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const f = SERVICES_CALLBACK.fields;
  const inputCls =
    "w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand";

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-1">
        <span className="w-9 h-9 rounded-full bg-brand/10 text-brand flex items-center justify-center shrink-0">
          <PhoneCall size={16} aria-hidden="true" />
        </span>
        <h4 className="font-heading font-semibold text-lg text-slate-900">
          {SERVICES_CALLBACK.title}
        </h4>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed mb-4">{SERVICES_CALLBACK.text}</p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-3">
        {/* Honeypot — invisible to humans, bots fill it and get silently dropped */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
          {...register("company")}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="cb-firstName" className="block text-sm font-medium text-slate-900 mb-1">
              {f.firstName.label} <span aria-hidden="true">*</span>
            </label>
            <input
              id="cb-firstName"
              type="text"
              placeholder={f.firstName.placeholder}
              aria-required="true"
              aria-invalid={!!errors.firstName}
              aria-describedby={errors.firstName ? "cb-firstName-error" : undefined}
              {...register("firstName")}
              className={inputCls}
            />
            {errors.firstName && (
              <p id="cb-firstName-error" role="alert" className="mt-1 text-xs text-red-600">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="cb-lastName" className="block text-sm font-medium text-slate-900 mb-1">
              {f.lastName.label} <span aria-hidden="true">*</span>
            </label>
            <input
              id="cb-lastName"
              type="text"
              placeholder={f.lastName.placeholder}
              aria-required="true"
              aria-invalid={!!errors.lastName}
              aria-describedby={errors.lastName ? "cb-lastName-error" : undefined}
              {...register("lastName")}
              className={inputCls}
            />
            {errors.lastName && (
              <p id="cb-lastName-error" role="alert" className="mt-1 text-xs text-red-600">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="cb-phone" className="block text-sm font-medium text-slate-900 mb-1">
            {f.phone.label} <span aria-hidden="true">*</span>
          </label>
          <input
            id="cb-phone"
            type="tel"
            placeholder={f.phone.placeholder}
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "cb-phone-error" : undefined}
            {...register("phone")}
            className={inputCls}
          />
          {errors.phone && (
            <p id="cb-phone-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg text-sm transition-colors focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          {status === "sending" ? (
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
          ) : (
            <PhoneCall size={16} aria-hidden="true" />
          )}
          {SERVICES_CALLBACK.submitLabel}
        </button>

        {status === "success" && (
          <p role="status" className="text-sm text-success font-medium text-center">
            {SERVICES_CALLBACK.success}
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="text-sm text-red-600 font-medium text-center">
            {SERVICES_CALLBACK.error}
          </p>
        )}
      </form>
    </div>
  );
}
