"use client";
import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "Nuevo mensaje de contacto — HYM Construcciones",
          from_name: "HYM Construcciones Web",
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setState("success");
        form.reset();
      } else {
        throw new Error(json.message || "Error al enviar el mensaje.");
      }
    } catch (err) {
      setState("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Error al enviar el mensaje."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre completo <span className="text-red-500">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            name="name"
            required
            placeholder="Juan García"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#172a64] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-sm font-medium text-gray-700 mb-1">
            Correo electrónico <span className="text-red-500">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            name="email"
            required
            placeholder="correo@ejemplo.com"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#172a64] focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-subject" className="block text-sm font-medium text-gray-700 mb-1">
          Asunto <span className="text-red-500">*</span>
        </label>
        <input
          id="cf-subject"
          type="text"
          name="subject"
          required
          placeholder="¿En qué le podemos ayudar?"
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#172a64] focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-sm font-medium text-gray-700 mb-1">
          Mensaje <span className="text-red-500">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          required
          placeholder="Escribe tu mensaje aquí..."
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#172a64] focus:border-transparent resize-none"
        />
      </div>

      {state === "success" && (
        <p className="text-green-700 bg-green-50 border border-green-200 rounded px-4 py-3 text-sm">
          ✓ Mensaje enviado, ¡gracias! Nos pondremos en contacto pronto.
        </p>
      )}
      {state === "error" && (
        <p className="text-red-700 bg-red-50 border border-red-200 rounded px-4 py-3 text-sm">
          {errorMsg}
        </p>
      )}

      <div className="text-center">
        <button
          type="submit"
          disabled={state === "loading"}
          className="bg-[#172a64] text-white px-8 py-3 rounded font-semibold text-sm uppercase tracking-wide hover:bg-[#0e1c45] transition-colors disabled:opacity-60"
        >
          {state === "loading" ? "Enviando…" : "Enviar mensaje"}
        </button>
      </div>
    </form>
  );
}
