import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Copy, Mail, X } from "lucide-react";
import { cn } from "@/lib/utils";

type AssistantNeed =
  | "Inbound calls"
  | "Outbound calls"
  | "Appointment booking"
  | "Lead qualification"
  | "Team routing"
  | "General FAQs"
  | "Other";

const assistantNeedOptions: ReadonlyArray<{ value: AssistantNeed; label: string }> = [
  { value: "Inbound calls", label: "Inbound calls (AI receptionist)" },
  { value: "Outbound calls", label: "Outbound calls (opportunity follow-up)" },
  { value: "Appointment booking", label: "Appointment booking" },
  { value: "Lead qualification", label: "Lead qualification" },
  { value: "Team routing", label: "Team routing (send to the right person)" },
  { value: "General FAQs", label: "General FAQs" },
  { value: "Other", label: "Other" },
] as const;

const assistantNeedLabel = (need: AssistantNeed): string =>
  assistantNeedOptions.find((o) => o.value === need)?.label ?? need;

type EndOfCallAction =
  never;

type EndOfConversationGoal =
  | "Book an appointment"
  | "Transfer to my team"
  | "Collect info and notify my team"
  | "Send a link (form / quote / payment)";

type EndOfConversationAddon =
  | "Send confirmation SMS"
  | "Update CRM / contact fields"
  | "Trigger a workflow";

const endGoalOptions: ReadonlyArray<{ value: EndOfConversationGoal; label: string }> = [
  { value: "Book an appointment", label: "Book an appointment" },
  { value: "Transfer to my team", label: "Transfer to my team" },
  { value: "Collect info and notify my team", label: "Collect info and notify my team" },
  { value: "Send a link (form / quote / payment)", label: "Send a link (form / quote / payment)" },
] as const;

const endAddonOptions: ReadonlyArray<{ value: EndOfConversationAddon; label: string }> = [
  { value: "Send confirmation SMS", label: "Send confirmation SMS" },
  { value: "Update CRM / contact fields", label: "Update CRM / contact fields" },
  { value: "Trigger a workflow", label: "Trigger a workflow" },
] as const;

interface CustomBuildQuestionnaireProps {
  buttonLabel?: string;
  buttonClassName?: string;
}

function buildSummary(payload: {
  businessName: string;
  fullName: string;
  phone: string;
  industryOrServiceType: string;
  assistantNeeds: AssistantNeed[];
  assistantNeedsOther: string;
  typicalReason: string;
  endGoal: EndOfConversationGoal;
  endAddons: EndOfConversationAddon[];
  urgentServices: "Yes" | "No";
  emergencyDefinition: string;
  email: string;
  wantsSmsAndWebsiteChatbot: "Yes" | "No";
}) {
  const lines: string[] = [];
  lines.push("CUSTOM BUILD QUESTIONNAIRE");
  lines.push("");
  lines.push(`Business Name: ${payload.businessName}`);
  lines.push(`Full Name: ${payload.fullName}`);
  lines.push(`Phone: ${payload.phone}`);
  lines.push(`Industry / Service Type: ${payload.industryOrServiceType}`);
  lines.push(`AI handles text + website chat 24/7: ${payload.wantsSmsAndWebsiteChatbot}`);
  lines.push("");

  const needs = payload.assistantNeeds
    .filter((n) => n !== "Other")
    .map(assistantNeedLabel)
    .concat(
      payload.assistantNeeds.includes("Other") && payload.assistantNeedsOther
        ? [`Other: ${payload.assistantNeedsOther}`]
        : [],
    )
    .filter(Boolean);
  lines.push(`Assistant Needs: ${needs.length ? needs.join(", ") : "—"}`);
  lines.push("");

  lines.push("Typical reason people call:");
  lines.push(payload.typicalReason || "—");
  lines.push("");

  lines.push("End of conversation goal:");
  lines.push(payload.endGoal || "—");
  lines.push("");
  lines.push("Also do:");
  lines.push(payload.endAddons.length ? payload.endAddons.join(", ") : "—");
  lines.push("");

  lines.push(`Urgent services where speed matters: ${payload.urgentServices}`);
  if (payload.urgentServices === "Yes") {
    lines.push(`What counts as an emergency: ${payload.emergencyDefinition || "—"}`);
  }
  lines.push("");

  lines.push(`Send draft to: ${payload.email}`);
  return lines.join("\n");
}

const GHL_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/nUFqlRRkiJoqpyubsiaD/webhook-trigger/2f5a1900-a8d2-4e45-8384-bc9fd9c1bb1a";

export default function CustomBuildQuestionnaire({
  buttonLabel = "Request Custom Build",
  buttonClassName,
}: CustomBuildQuestionnaireProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"form" | "success">("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [webhookSuccess, setWebhookSuccess] = useState(false);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [industryOrServiceType, setIndustryOrServiceType] = useState("");
  const [assistantNeeds, setAssistantNeeds] = useState<AssistantNeed[]>([]);
  const [assistantNeedsOther, setAssistantNeedsOther] = useState("");
  const [typicalReason, setTypicalReason] = useState("");
  const [endGoal, setEndGoal] = useState<EndOfConversationGoal>("Book an appointment");
  const [endAddons, setEndAddons] = useState<EndOfConversationAddon[]>([]);
  const [urgentServices, setUrgentServices] = useState<"Yes" | "No">("No");
  const [emergencyDefinition, setEmergencyDefinition] = useState("");
  const [wantsSmsAndWebsiteChatbot, setWantsSmsAndWebsiteChatbot] = useState<"Yes" | "No">("Yes");
  const [email, setEmail] = useState("");

  const summary = useMemo(
    () =>
      buildSummary({
        businessName,
        fullName,
        phone,
        industryOrServiceType,
        assistantNeeds,
        assistantNeedsOther,
        typicalReason,
        endGoal,
        endAddons,
        urgentServices,
        emergencyDefinition,
        email,
        wantsSmsAndWebsiteChatbot,
      }),
    [
      businessName,
      fullName,
      phone,
      industryOrServiceType,
      assistantNeeds,
      assistantNeedsOther,
      typicalReason,
      endGoal,
      endAddons,
      urgentServices,
      emergencyDefinition,
      email,
      wantsSmsAndWebsiteChatbot,
    ],
  );

  const mailtoHref = useMemo(() => {
    const to = "hello@brobotmedia.com";
    const subject = `Custom Build Request - ${businessName || "New Prospect"}`;
    const body = summary;
    const params = new URLSearchParams({
      subject,
      body,
    });
    return `mailto:${to}?${params.toString()}`;
  }, [businessName, summary]);

  const reset = () => {
    setIsOpen(false);
    setStep("form");
    setIsSubmitting(false);
    setCopyState("idle");
    setSubmitError(null);
    setWebhookSuccess(false);

    setFullName("");
    setPhone("");
    setBusinessName("");
    setIndustryOrServiceType("");
    setAssistantNeeds([]);
    setAssistantNeedsOther("");
    setTypicalReason("");
    setEndGoal("Book an appointment");
    setEndAddons([]);
    setUrgentServices("No");
    setEmergencyDefinition("");
    setWantsSmsAndWebsiteChatbot("Yes");
    setEmail("");
  };

  const toggleNeed = (need: AssistantNeed) => {
    setAssistantNeeds((prev) => (prev.includes(need) ? prev.filter((n) => n !== need) : [...prev, need]));
  };

  const toggleEndAddon = (addon: EndOfConversationAddon) => {
    setEndAddons((prev) => (prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setWebhookSuccess(false);

    const payload = {
      source: "brobot-site:industries-custom-build",
      submittedAt: new Date().toISOString(),
      pageUrl: typeof window !== "undefined" ? window.location.href : "",

      // Contact / business
      businessName,
      fullName,
      phone,
      email,
      industryOrServiceType,

      // Assistant needs (clean values + human labels)
      assistantNeeds,
      assistantNeedsDisplay: assistantNeeds.map(assistantNeedLabel),
      assistantNeedsOther: assistantNeeds.includes("Other") ? assistantNeedsOther : "",

      // Call flow
      typicalReason,
      endGoal,
      endAddons,

      // Urgency
      urgentServices,
      emergencyDefinition: urgentServices === "Yes" ? emergencyDefinition : "",

      // Channels
      aiHandlesTextAndChat247: wantsSmsAndWebsiteChatbot,

      // Full text (nice for internal review)
      summaryText: summary,
    };

    try {
      const res = await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`Webhook failed (${res.status}): ${text}`);
      }

      setWebhookSuccess(true);
      setStep("success");
    } catch (err) {
      setSubmitError(
        "We couldn't submit automatically. Please use 'Email Request' or 'Copy Summary' below and we'll take it from there.",
      );
      setStep("success");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 1500);
    } catch {
      // no-op
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={cn(buttonClassName)}
      >
        {buttonLabel}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={reset}
              className="fixed inset-0 z-[100] bg-[#020617]/80 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-[101] flex items-start md:items-center justify-center p-4 overflow-y-auto pointer-events-none">
              <motion.div
                initial={{ scale: 0.96, opacity: 0, y: 14 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.96, opacity: 0, y: 14 }}
                className="w-full max-w-2xl bg-[#020617] border border-white/10 rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] pointer-events-auto relative overflow-hidden my-6 max-h-[90vh] flex flex-col"
              >
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-amber-500/10 blur-[120px] pointer-events-none" />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={reset}
                  className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-white hover:text-white transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative z-10 p-6 md:p-8 overflow-y-auto">
                  {step === "form" && (
                    <>
                      <div className="mb-6">
                        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500 mb-3">
                          Custom_Build_Intake
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
                          Tell us what you need.
                        </h2>
                        <p className="text-white font-medium">
                          Tell us how you run your business and we'll build an AI agent that answers, qualifies, and books appointments while you're busy.
                        </p>
                      </div>

                      <form onSubmit={onSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-[11px] md:text-[11px] lg:text-[12px] font-black uppercase tracking-[0.18em] text-slate-200 ml-1">
                              Business Name
                            </label>
                            <input
                              required
                              value={businessName}
                              onChange={(e) => setBusinessName(e.target.value)}
                              placeholder="Acme Roofing"
                              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[11px] md:text-[11px] lg:text-[12px] font-black uppercase tracking-[0.18em] text-slate-200 ml-1">
                              Industry or Service Type
                            </label>
                            <input
                              required
                              value={industryOrServiceType}
                              onChange={(e) => setIndustryOrServiceType(e.target.value)}
                              placeholder="Roofing, Med Spa, SaaS, Plumbing..."
                              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="text-[11px] md:text-[11px] lg:text-[12px] font-black uppercase tracking-[0.18em] text-slate-200 ml-1">
                            What should your AI agent handle so you don't have to?
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {assistantNeedOptions.map(({ value, label }) => {
                              const need = value;
                              const checked = assistantNeeds.includes(need);
                              return (
                                <label
                                  key={need}
                                  className={cn(
                                    "flex items-center gap-3 p-4 rounded-2xl border transition-all cursor-pointer",
                                    checked
                                      ? "bg-amber-600/10 border-amber-500/30"
                                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20",
                                  )}
                                >
                                  <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() => toggleNeed(need)}
                                    className="h-4 w-4 accent-amber-500"
                                  />
                                  <span className="text-white font-bold text-left leading-snug flex-1">{label}</span>
                                </label>
                              );
                            })}
                          </div>

                          {assistantNeeds.includes("Other") && (
                            <input
                              value={assistantNeedsOther}
                              onChange={(e) => setAssistantNeedsOther(e.target.value)}
                              placeholder="Other (free text)"
                              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                            />
                          )}
                        </div>

                        <div className="space-y-2">
                          <label className="text-[11px] md:text-[11px] lg:text-[12px] font-black uppercase tracking-[0.18em] text-slate-200 ml-1">
                            What's the typical reason people call your business?
                          </label>
                          <textarea
                            value={typicalReason}
                            onChange={(e) => setTypicalReason(e.target.value)}
                            rows={3}
                            placeholder='e.g. "They want to book a body contouring consultation"'
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all resize-none"
                          />
                        </div>

                        <div className="space-y-3">
                          <div className="text-[11px] md:text-[11px] lg:text-[12px] font-black uppercase tracking-[0.18em] text-slate-200 ml-1">
                            When the AI finishes, what should happen next?
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {endGoalOptions.map(({ value, label }) => {
                              const checked = endGoal === value;
                              return (
                                <label
                                  key={value}
                                  className={cn(
                                    "flex items-center gap-3 p-4 rounded-2xl border transition-all cursor-pointer",
                                    checked
                                      ? "bg-amber-600/10 border-amber-500/30"
                                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20",
                                  )}
                                >
                                  <input
                                    type="radio"
                                    name="end-goal"
                                    checked={checked}
                                    onChange={() => setEndGoal(value)}
                                    className="h-4 w-4 accent-amber-500"
                                  />
                                  <span className="text-white font-bold text-left leading-snug flex-1">{label}</span>
                                </label>
                              );
                            })}
                          </div>

                          <div className="mt-2">
                            <div className="text-[11px] md:text-[11px] lg:text-[12px] font-black uppercase tracking-[0.18em] text-slate-200 ml-1">
                              Also do any of these?
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                              {endAddonOptions.map(({ value, label }) => {
                                const checked = endAddons.includes(value);
                                return (
                                  <label
                                    key={value}
                                    className={cn(
                                      "flex items-center gap-3 p-4 rounded-2xl border transition-all cursor-pointer",
                                      checked
                                        ? "bg-amber-600/10 border-amber-500/30"
                                        : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20",
                                    )}
                                  >
                                    <input
                                      type="checkbox"
                                      checked={checked}
                                      onChange={() => toggleEndAddon(value)}
                                      className="h-4 w-4 accent-amber-500"
                                    />
                                    <span className="text-white font-bold text-left leading-snug flex-1">{label}</span>
                                  </label>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[11px] md:text-[11px] lg:text-[12px] font-black uppercase tracking-[0.18em] text-slate-200 ml-1">
                            Do you offer urgent services where speed matters?
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {(["Yes", "No"] as const).map((v) => {
                              const checked = urgentServices === v;
                              return (
                                <button
                                  key={v}
                                  type="button"
                                  onClick={() => setUrgentServices(v)}
                                  className={cn(
                                    "py-4 rounded-2xl border font-black uppercase tracking-[0.2em] text-[10px] transition-all",
                                    checked
                                      ? "bg-amber-600/10 border-amber-500/30 text-amber-200"
                                      : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20",
                                  )}
                                >
                                  {v}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {urgentServices === "Yes" && (
                          <div className="space-y-2">
                            <label className="text-[11px] md:text-[11px] lg:text-[12px] font-black uppercase tracking-[0.18em] text-slate-200 ml-1">
                              What counts as an emergency in your business?
                            </label>
                            <input
                              value={emergencyDefinition}
                              onChange={(e) => setEmergencyDefinition(e.target.value)}
                              placeholder="Short text"
                              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                            />
                          </div>
                        )}

                        <div className="space-y-2">
                          <label className="text-[11px] md:text-[11px] lg:text-[12px] font-black uppercase tracking-[0.18em] text-slate-200 ml-1">
                            Should your AI assistant handle text + website chat for you 24/7?
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {(["Yes", "No"] as const).map((v) => {
                              const checked = wantsSmsAndWebsiteChatbot === v;
                              return (
                                <button
                                  key={v}
                                  type="button"
                                  onClick={() => setWantsSmsAndWebsiteChatbot(v)}
                                  className={cn(
                                    "py-4 rounded-2xl border font-black uppercase tracking-[0.2em] text-[10px] transition-all",
                                    checked
                                      ? "bg-amber-600/10 border-amber-500/30 text-amber-200"
                                      : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20",
                                  )}
                                >
                                  {v}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[11px] md:text-[11px] lg:text-[12px] font-black uppercase tracking-[0.18em] text-slate-200 ml-1">
                            What email should we send your draft to?
                          </label>
                          <input
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@company.com"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-[11px] md:text-[11px] lg:text-[12px] font-black uppercase tracking-[0.18em] text-slate-200 ml-1">
                              Full Name
                            </label>
                            <input
                              required
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              placeholder="John Doe"
                              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[11px] md:text-[11px] lg:text-[12px] font-black uppercase tracking-[0.18em] text-slate-200 ml-1">
                              Phone Number
                            </label>
                            <input
                              required
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="(555) 000-0000"
                              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                          <button
                            disabled={isSubmitting}
                            type="submit"
                            className={cn(
                              "flex-1 bg-amber-600 hover:bg-amber-500 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl transition-all shadow-xl shadow-amber-600/20 flex items-center justify-center gap-2 group",
                              isSubmitting && "opacity-50 cursor-not-allowed",
                            )}
                          >
                            {isSubmitting ? (
                              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                              <>
                                Generate Draft Request
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                              </>
                            )}
                          </button>
                          <a
                            href="/contact"
                            className="sm:w-auto bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-[0.2em] py-5 px-6 rounded-2xl transition-all border border-white/10 text-center"
                          >
                            Or Contact
                          </a>
                        </div>
                      </form>
                    </>
                  )}

                  {step === "success" && (
                    <div className="py-10 text-center">
                      <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                      </div>
                      <h2 className="text-3xl font-black text-white mb-3">
                        {webhookSuccess ? "Request sent!" : "Request captured."}
                      </h2>
                      <p className="text-white font-medium max-w-xl mx-auto mb-8">
                        {webhookSuccess ? (
                          <>
                            We will review your business structure and send you a draft agent plan shortly!
                          </>
                        ) : submitError ? (
                          <span className="text-amber-200">{submitError}</span>
                        ) : (
                          <>
                            Next step: send the draft request to our team. We'll email your workflow draft to{" "}
                            <span className="text-white font-bold">{email}</span>.
                          </>
                        )}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                          href={mailtoHref}
                          className="inline-flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-black uppercase tracking-[0.2em] shadow-xl shadow-amber-600/20 transition-all text-[10px]"
                        >
                          <Mail className="w-4 h-4" />
                          Email Request
                        </a>
                        <button
                          type="button"
                          onClick={onCopy}
                          className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full font-black uppercase tracking-[0.2em] transition-all text-[10px] border border-white/10"
                        >
                          <Copy className="w-4 h-4" />
                          {copyState === "copied" ? "Copied" : "Copy Summary"}
                        </button>
                        <button
                          type="button"
                          onClick={reset}
                          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-black uppercase tracking-[0.2em] transition-all text-[10px] text-slate-300 hover:text-white"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
