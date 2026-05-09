"use client";
import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function QuoteForm() {
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
          subject: "Solicitud de cotización — HYM Construcciones",
          from_name: "HYM Construcciones Web",
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setState("success");
        form.reset();
      } else {
        throw new Error(json.message || "Error al enviar la solicitud.");
      }
    } catch (err) {
      setState("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Error al enviar la solicitud."
      );
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-[#172a64] mb-2">
        Solicitar cotización
      </h3>
      <p className="text-gray-500 text-sm mb-6">
        Cuéntenos sobre su proyecto y le enviaremos una propuesta.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div>
          <label htmlFor="qf-name" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre completo <span className="text-red-500">*</span>
          </label>
          <input
            id="qf-name"
            type="text"
            name="name"
            required
            placeholder="Juan García"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#172a64] focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="qf-email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo <span className="text-red-500">*</span>
            </label>
            <input
              id="qf-email"
              type="email"
              name="email"
              required
              placeholder="correo@ejemplo.com"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#172a64] focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="qf-phone" className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono
            </label>
            <input
              id="qf-phone"
              type="tel"
              name="phone"
              placeholder="(642) 000 0000"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#172a64] focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label htmlFor="qf-message" className="block text-sm font-medium text-gray-700 mb-1">
            Descripción del proyecto <span className="text-red-500">*</span>
          </label>
          <textarea
            id="qf-message"
            name="message"
            rows={4}
            required
            placeholder="Describa brevemente su proyecto..."
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#172a64] focus:border-transparent resize-none"
          />
        </div>

        {state === "success" && (
          <p className="text-green-700 bg-green-50 border border-green-200 rounded px-4 py-3 text-sm">
            ✓ Solicitud enviada. Le contactaremos a la brevedad.
          </p>
        )}
        {state === "error" && (
          <p className="text-red-700 bg-red-50 border border-red-200 rounded px-4 py-3 text-sm">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={state === "loading"}
          className="w-full bg-[#172a64] text-white py-3 rounded font-semibold text-sm uppercase tracking-wide hover:bg-[#0e1c45] transition-colors disabled:opacity-60"
        >
          {state === "loading" ? "Enviando…" : "Solicitar cotización"}
        </button>
      </form>
    </div>
  );
}
