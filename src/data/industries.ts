import { 
  Briefcase, 
  Car, 
  CreditCard, 
  Stethoscope, 
  Zap, 
  Calendar, 
  PiggyBank, 
  HardHat, 
  Dumbbell, 
  Thermometer, 
  Trash2, 
  ShieldCheck, 
  Sparkles, 
  Home, 
  Truck, 
  Droplets, 
  Hammer, 
  Sun, 
  Scale,
  Camera,
  ClipboardCheck,
  PhoneCall,
  CalendarCheck,
  RefreshCcw,
  MapPin,
  Package,
  CloudSun,
  Target,
  Clock,
  MessageSquare,
  FileText,
  UserCheck,
  AlertCircle,
  Heart,
  type LucideIcon
} from "lucide-react";

export type IndustryCategory =
  | "Home Services"
  | "Health & Wellness"
  | "Finance & Real Estate"
  | "Business Services"
  | "Events"
  | "Automotive";

export interface Industry {
  name: string;
  slug: string;
  icon: LucideIcon;
  category: IndustryCategory;
  tagline: string;
  description: string;
  benefits: string[];
  features: string[];
  // Optional richer, sales-page fields (use per-industry as needed)
  benefitCards?: Array<{ title: string; description: string; icon?: LucideIcon }>;
  painPoints?: string[];
  outcomes?: string[];
  playbook?: {
    intakeQuestions: string[];
    routingRules: string[];
    afterCallActions: string[];
  };
  integrations?: string[];
  objections?: Array<{ question: string; answer: string }>;
  examples?: Array<{
    title: string;
    channel: "Call" | "SMS";
    lines: string[];
    note?: string;
  }>;
  trustCards?: Array<{ title: string; description: string }>;
  complianceNote?: string;
}

export const industries: Industry[] = [
  {
    name: "Business Coaching",
    slug: "business-coaching",
    icon: Briefcase,
    category: "Business Services",
    tagline: "Scale your coaching business without the scheduling headache.",
    description: "Automate lead qualification and booking so you can focus on your clients, not your calendar.",
    benefits: ["24/7 Lead Response", "Instant Discovery Calls", "Automated Follow-ups"],
    features: ["Qualification Engine", "Calendar Sync", "CRM Integration"],
    benefitCards: [
      {
        title: "Qualifies leads instantly",
        description: "Ask the right questions upfront so you only get on calls with serious prospects who match your ideal client profile.",
        icon: Target,
      },
      {
        title: "Books discovery calls 24/7",
        description: "Prospects book directly into your calendar while they are motivated, even at midnight or on weekends.",
        icon: CalendarCheck,
      },
      {
        title: "Nurtures until they convert",
        description: "Automated follow-up sequences keep leads warm until they are ready to invest in coaching.",
        icon: MessageSquare,
      },
    ],
    painPoints: [
      "Unqualified leads waste your time on discovery calls",
      "Hot prospects go cold waiting for you to respond",
      "Manual follow-ups fall through the cracks",
      "Scheduling back-and-forth eats into coaching hours",
    ],
    outcomes: [
      "Only speak with pre-qualified, serious prospects",
      "Faster response time increases booking rates",
      "Consistent follow-up without manual effort",
      "More time coaching, less time chasing leads",
    ],
    playbook: {
      intakeQuestions: [
        "What type of coaching are you looking for? (business, executive, life, etc.)",
        "What is your biggest challenge right now?",
        "Have you worked with a coach before?",
        "What is your timeline for getting started?",
        "What is your budget range for coaching investment?",
      ],
      routingRules: [
        "If budget below minimum threshold, send to nurture sequence with resources",
        "If timeline is immediate and budget qualified, priority booking",
        "If corporate or team coaching inquiry, route to enterprise process",
      ],
      afterCallActions: [
        "Send calendar invite with prep questions for discovery call",
        "Add to CRM with qualification score and notes",
        "Trigger reminder sequence 24 hours before scheduled call",
      ],
    },
    integrations: [
      "Google Calendar / Calendly / Acuity",
      "Kajabi / Teachable / Course platforms",
      "Stripe / PayPal for payments",
      "HubSpot / GoHighLevel CRM",
    ],
    objections: [
      {
        question: "How do you know if someone is qualified?",
        answer: "The AI asks your custom qualifying questions about budget, timeline, and challenges. You set the criteria for what makes a good fit.",
      },
      {
        question: "Will this feel impersonal to my prospects?",
        answer: "The AI uses your tone and language. Most prospects appreciate the instant response and smooth booking experience.",
      },
      {
        question: "What if someone has complex questions?",
        answer: "The AI handles common questions and seamlessly transfers complex inquiries to you or your team.",
      },
    ],
    examples: [
      {
        title: "Lead qualification to discovery call booked",
        channel: "Call",
        lines: [
          "Agent: Thanks for reaching out about coaching. To match you with the right program, what is your biggest business challenge right now?",
          "Customer: I am struggling to scale past six figures.",
          "Agent: Got it. Have you worked with a business coach before?",
          "Customer: No, this would be my first time.",
          "Agent: Perfect. And what is your timeline for getting started?",
          "Customer: I want to start this month.",
          "Agent: Great. I have openings for a discovery call Tuesday at 2pm or Thursday at 10am. Which works better?",
        ],
      },
    ],
    trustCards: [
      {
        title: "Your qualification criteria",
        description: "Set the exact questions and thresholds that define your ideal client.",
      },
      {
        title: "Premium experience",
        description: "Prospects get instant, professional responses that reflect your brand.",
      },
      {
        title: "Human handoff ready",
        description: "Complex inquiries route directly to you with full context.",
      },
    ],
  },
  {
    name: "Car Detailing",
    slug: "car-detailing",
    icon: Car,
    category: "Automotive",
    tagline: "Book high-ticket ceramic coatings while you work.",
    description: "Don't let dirty hands stop you from closing deals. Brobot handles every inquiry instantly.",
    benefits: ["Instant Quote Assistance", "Service Scheduling", "Review Automation"],
    features: ["Image Upload Support", "Deposit Handling", "Reminder System"],
    benefitCards: [
      {
        title: "Instant quote capture",
        description:
          "Collect vehicle details and photos, then respond with a clean estimate range and next steps before the lead goes cold.",
        icon: Camera,
      },
      {
        title: "Books deposits",
        description:
          "Send a deposit link and lock the appointment so your calendar fills with buyers, not time-wasters.",
        icon: CreditCard,
      },
      {
        title: "Upsells premium packages",
        description:
          "Guide customers from basic details into paint correction and ceramic packages using your rules and pricing guardrails.",
        icon: Sparkles,
      },
    ],
    painPoints: [
      "Quotes get stuck in DMs and never convert",
      "Customers ask “how much?” without sending photos or vehicle info",
      "No-shows and last-minute cancellations waste prime slots",
      "Technicians are busy and calls go to voicemail",
    ],
    outcomes: [
      "More deposits collected for ceramic + full details",
      "Faster response time across calls + SMS",
      "Cleaner booking info (vehicle, condition, requested package)",
      "Fewer no-shows with automated confirmations + reminders",
    ],
    playbook: {
      intakeQuestions: [
        "What service do you want? (interior / exterior / full / ceramic)",
        "Year / make / model?",
        "Mobile or shop? (and your address / service area check)",
        "Any heavy pet hair, smoke odor, stains, or sap?",
        "Preferred day/time window this week?",
      ],
      routingRules: [
        "If “ceramic” → ask protection length (1/3/5-year) and whether paint correction is needed",
        "If heavy biohazard/mold → transfer to human for approval",
        "If outside mobile radius → offer shop drop-off or decline politely",
      ],
      afterCallActions: [
        "Send SMS confirmation + prep checklist (remove valuables, car accessible, etc.)",
        "Send deposit/payment link if required for booking",
        "Create CRM note with vehicle + condition + requested package",
      ],
    },
    integrations: [
      "Google Calendar / Outlook",
      "Jobber / Housecall Pro (or your CRM)",
      "Stripe / Square deposits",
      "Google Reviews automation (RevuBro)",
    ],
    objections: [
      {
        question: "How do you quote without seeing the car?",
        answer:
          "We quote a range based on the vehicle and condition details, then confirm final pricing after photos or a quick in person check. No surprises, no bait and switch.",
      },
      {
        question: "Is this a robot?",
        answer:
          "It’s the automated assistant for the shop. It books faster, asks the right questions, and can transfer you to the team anytime.",
      },
      {
        question: "Do you require a deposit?",
        answer:
          "If your business uses deposits, the agent sends the payment link and explains the policy clearly before the booking is finalized.",
      },
    ],
    examples: [
      {
        title: "Ceramic coating inquiry to booked deposit",
        channel: "SMS",
        lines: [
          "Customer: How much for ceramic coating?",
          "Agent: I can quote accurately—what’s the year/make/model and color? Also, are you looking for 1-year, 3-year, or 5-year protection?",
          "Customer: 2022 Tesla Model 3, 3-year.",
          "Agent: Great. Most Model 3 3-year packages range from $X–$Y depending on paint correction. If you send 2 photos in daylight (hood + side), I’ll confirm and book you.",
          "Customer: (sends photos)",
          "Agent: Perfect. You’re in range. I can lock you in Tuesday 3pm or Thursday 10am. Want to place the deposit to reserve it?",
        ],
        note: "Replace $X–$Y with your real range or remove pricing and say “estimate range.”",
      },
      {
        title: "Inbound call qualifies condition and books slot",
        channel: "Call",
        lines: [
          "Agent: Thanks for calling. Are you looking for interior, exterior, full detail, or ceramic?",
          "Customer: Full detail.",
          "Agent: Got it. Year/make/model, and any heavy pet hair or staining?",
          "Customer: 2018 F-150, dog hair in the back.",
          "Agent: Perfect. I can book you for Wednesday 1pm or Friday 9am. Which works best?",
        ],
      },
    ],
    trustCards: [
      {
        title: "Your pricing rules",
        description: "Set guardrails and package logic so the agent quotes the way you do.",
      },
      {
        title: "Books real outcomes",
        description: "Deposits, confirmations, reminders built to convert, not just chat.",
      },
      {
        title: "Handoffs anytime",
        description: "Transfer to your team for edge cases or high-ticket closers.",
      },
    ],
  },
  {
    name: "Credit Repair",
    slug: "credit-repair",
    icon: CreditCard,
    category: "Finance & Real Estate",
    tagline: "Qualify applicants and collect documents 24/7.",
    description: "Speed up the onboarding process by letting AI handle the initial consultation and data gathering.",
    benefits: ["Document Collection", "Lead Scoring", "Instant Status Updates"],
    features: ["Secure Data Handling", "Process Automation", "Multi-channel Outreach"],
    benefitCards: [
      {
        title: "Qualifies leads instantly",
        description: "Collect credit goals, current score range, and timeline upfront so you know who is ready to enroll.",
        icon: Target,
      },
      {
        title: "Collects documents automatically",
        description: "Request and receive credit reports, IDs, and proof of address without chasing clients via email.",
        icon: FileText,
      },
      {
        title: "Keeps clients informed",
        description: "Automated status updates and check-ins reduce support calls and keep clients engaged throughout the process.",
        icon: MessageSquare,
      },
    ],
    painPoints: [
      "Leads inquire but never send required documents",
      "Clients constantly ask for status updates",
      "Manual follow-ups for missing paperwork eat your time",
      "Hot leads go cold while waiting for a callback",
    ],
    outcomes: [
      "Higher document completion rates from automated reminders",
      "Fewer inbound support calls with proactive updates",
      "Faster onboarding from inquiry to enrolled client",
      "More time disputing and less time chasing paperwork",
    ],
    playbook: {
      intakeQuestions: [
        "What is your current credit score range? (under 500 / 500-600 / 600-700 / not sure)",
        "What is your main goal? (home purchase / auto loan / credit cards / general improvement)",
        "What is your timeline for achieving this goal?",
        "Have you worked with a credit repair company before?",
        "Are you ready to get started this week?",
      ],
      routingRules: [
        "If goal is home purchase within 6 months, priority enrollment",
        "If score is above 700, explain they may not need full service",
        "If previous bad experience with credit repair, route to senior consultant",
      ],
      afterCallActions: [
        "Send secure document upload link for credit report and ID",
        "Add to CRM with score range, goal, and timeline",
        "Trigger document reminder sequence if not received in 24 hours",
      ],
    },
    integrations: [
      "Credit repair software (Credit Repair Cloud, DisputeBee, etc.)",
      "Secure document collection (PandaDoc, DocuSign)",
      "Payment processing (Stripe, Square)",
      "CRM (GoHighLevel, HubSpot)",
    ],
    objections: [
      {
        question: "Is my information secure?",
        answer: "All document collection uses bank-level encryption. We never store sensitive data in plain text and follow strict data protection protocols.",
      },
      {
        question: "How long does credit repair take?",
        answer: "The AI explains typical timelines based on their situation and sets realistic expectations upfront.",
      },
      {
        question: "What if I have questions during the process?",
        answer: "Clients can text or call anytime for status updates, and complex questions route directly to your team.",
      },
    ],
    examples: [
      {
        title: "New lead qualified and documents requested",
        channel: "Call",
        lines: [
          "Agent: Thanks for calling about credit repair. What credit score range are you currently in?",
          "Customer: I think around 550.",
          "Agent: Got it. And what is your main goal for improving your credit?",
          "Customer: I want to buy a house next year.",
          "Agent: Perfect, we help clients like you every day. To get started, I will send you a secure link to upload your credit report and ID. Once received, our team will review and reach out within 24 hours with your action plan.",
          "Customer: Sounds good.",
          "Agent: Great. Check your phone for that link now. Is there anything else I can help with today?",
        ],
      },
    ],
    trustCards: [
      {
        title: "Bank-level security",
        description: "All documents collected through encrypted, compliant channels.",
      },
      {
        title: "Automated follow-up",
        description: "No more chasing clients for missing documents.",
      },
      {
        title: "Clear expectations",
        description: "Clients know timelines and next steps from day one.",
      },
    ],
  },
  {
    name: "Dentist",
    slug: "dentist",
    icon: Stethoscope,
    category: "Health & Wellness",
    tagline: "Fill your chair without overwhelming your front desk.",
    description: "Automate appointment requests and answer common patient questions instantly.",
    benefits: ["Reduced No-shows", "Emergency Triage", "Insurance Verification"],
    features: ["Patient Portal Sync", "HIPAA Compliant Comms", "Recall Automation"],
    benefitCards: [
      {
        title: "Books appointments 24/7",
        description: "Patients schedule cleanings, checkups, and consultations anytime without waiting for office hours.",
        icon: CalendarCheck,
      },
      {
        title: "Triages emergencies",
        description: "Urgent calls are identified and routed immediately while routine requests are scheduled appropriately.",
        icon: AlertCircle,
      },
      {
        title: "Reduces no-shows",
        description: "Automated confirmations and reminders dramatically cut missed appointments and last-minute cancellations.",
        icon: UserCheck,
      },
    ],
    painPoints: [
      "Front desk is overwhelmed with scheduling calls",
      "After-hours calls go to voicemail and patients book elsewhere",
      "No-shows and cancellations leave empty chair time",
      "Staff spends hours on confirmation calls and insurance questions",
    ],
    outcomes: [
      "Patients book instantly without phone tag",
      "Emergency calls are never missed, routine calls are handled automatically",
      "Fewer no-shows with automated reminder sequences",
      "Front desk focuses on in-office patient experience",
    ],
    playbook: {
      intakeQuestions: [
        "Are you a new or existing patient?",
        "What type of appointment do you need? (cleaning, checkup, emergency, cosmetic consultation)",
        "Are you experiencing any pain or urgent issues?",
        "What insurance do you have, or will this be self-pay?",
        "What days and times work best for you?",
      ],
      routingRules: [
        "If emergency or severe pain, transfer to on-call staff immediately",
        "If new patient, collect basic info and schedule new patient exam",
        "If insurance question only, provide general info and offer callback from billing",
      ],
      afterCallActions: [
        "Send appointment confirmation with office address and prep instructions",
        "Add to practice management system with patient notes",
        "Trigger reminder sequence: 1 week, 1 day, and 2 hours before appointment",
      ],
    },
    integrations: [
      "Dentrix / Eaglesoft / Open Dental",
      "Google Calendar sync",
      "Patient communication platforms (Weave, Solutionreach)",
      "Google Reviews automation (RevuBro)",
    ],
    objections: [
      {
        question: "Is this HIPAA compliant?",
        answer: "Yes. All communications follow HIPAA guidelines. We do not store protected health information and use secure, compliant channels.",
      },
      {
        question: "What about complex insurance questions?",
        answer: "The AI handles common questions and routes complex insurance or billing inquiries to your team with full context.",
      },
      {
        question: "Can it handle emergencies properly?",
        answer: "Emergency keywords trigger immediate escalation to your on-call staff. Routine calls are handled automatically.",
      },
    ],
    examples: [
      {
        title: "New patient books cleaning appointment",
        channel: "Call",
        lines: [
          "Agent: Thanks for calling. Are you a new or existing patient?",
          "Customer: New patient.",
          "Agent: Welcome! What type of appointment are you looking for today?",
          "Customer: Just a cleaning and checkup.",
          "Agent: Perfect. Are you experiencing any pain or urgent issues?",
          "Customer: No, just due for a cleaning.",
          "Agent: Great. I have openings Tuesday at 10am or Thursday at 3pm. Which works better for you?",
          "Customer: Thursday works.",
          "Agent: You are all set for Thursday at 3pm. I will send a confirmation with our address and new patient forms to complete before your visit.",
        ],
      },
    ],
    trustCards: [
      {
        title: "HIPAA compliant",
        description: "All patient communications meet healthcare privacy requirements.",
      },
      {
        title: "Emergency escalation",
        description: "Urgent cases are immediately routed to your clinical team.",
      },
      {
        title: "Practice system sync",
        description: "Appointments flow directly into your existing software.",
      },
    ],
  },
  {
    name: "Electrician",
    slug: "electrician",
    icon: Zap,
    category: "Home Services",
    tagline: "Quote and dispatch while you're on the job.",
    description: "Stop losing jobs to the 'next guy' because you couldn't pick up the phone.",
    benefits: ["Instant Dispatching", "Emergency Call Handling", "Project Quoting"],
    features: ["Location Verification", "Price Estimator", "Tech Notification"],
    benefitCards: [
      {
        title: "Captures every call",
        description: "No more missed calls while you are on a ladder. Every inquiry gets an instant, professional response.",
        icon: PhoneCall,
      },
      {
        title: "Qualifies and quotes",
        description: "Collect job details, photos, and location so you can provide accurate estimates without a site visit.",
        icon: ClipboardCheck,
      },
      {
        title: "Dispatches emergencies",
        description: "Urgent electrical issues are identified and routed to your on-call tech immediately.",
        icon: AlertCircle,
      },
    ],
    painPoints: [
      "Calls go to voicemail while you are working on a job",
      "Customers call the next electrician when you do not answer",
      "Emergency calls get mixed in with routine requests",
      "Quoting requires phone tag to gather job details",
    ],
    outcomes: [
      "Every lead gets an instant response, even during jobs",
      "Higher close rate from faster response times",
      "Emergencies are prioritized and dispatched immediately",
      "Better quotes from upfront info collection",
    ],
    playbook: {
      intakeQuestions: [
        "Is this an emergency or a routine project?",
        "What type of work do you need? (panel upgrade, outlet install, lighting, rewire, inspection, other)",
        "What is the service address?",
        "Can you describe the issue or send a photo?",
        "When do you need this completed?",
      ],
      routingRules: [
        "If emergency (no power, sparking, burning smell), transfer to on-call immediately",
        "If commercial or large project, route to estimator for site visit",
        "If outside service area, politely decline with referral suggestion",
      ],
      afterCallActions: [
        "Send confirmation with estimated arrival window or quote timeline",
        "Create job ticket in service software with details and photos",
        "Notify assigned tech via text with job summary",
      ],
    },
    integrations: [
      "ServiceTitan / Housecall Pro / Jobber",
      "Google Calendar dispatch",
      "QuickBooks / invoicing software",
      "Google Reviews automation (RevuBro)",
    ],
    objections: [
      {
        question: "Can an AI handle electrical emergencies?",
        answer: "The AI identifies emergencies using specific keywords and immediately transfers to your on-call tech. It never delays urgent calls.",
      },
      {
        question: "How do you quote without seeing the job?",
        answer: "We collect photos, descriptions, and details upfront. You provide ranges or schedule a site visit for complex jobs.",
      },
      {
        question: "What if the customer has technical questions?",
        answer: "Common questions are answered automatically. Technical or code questions route to you with full context.",
      },
    ],
    examples: [
      {
        title: "Emergency call dispatched immediately",
        channel: "Call",
        lines: [
          "Agent: Thanks for calling. Is this an emergency or a routine electrical project?",
          "Customer: Emergency. Half my house has no power.",
          "Agent: I understand. Let me get a tech to you as soon as possible. What is the address?",
          "Customer: 123 Oak Street.",
          "Agent: Got it. I am dispatching someone now. You will receive a call back within 15 minutes with an arrival time. Is this the best number to reach you?",
          "Customer: Yes.",
          "Agent: Perfect. Help is on the way.",
        ],
      },
    ],
    trustCards: [
      {
        title: "Emergency priority",
        description: "Urgent calls are identified and escalated immediately.",
      },
      {
        title: "Job details upfront",
        description: "Photos and descriptions collected before you arrive.",
      },
      {
        title: "Tech notifications",
        description: "Your team gets instant alerts with job summaries.",
      },
    ],
  },
  {
    name: "Events",
    slug: "events",
    icon: Calendar,
    category: "Events",
    tagline: "Manage inquiries for weddings and corporate events seamlessly.",
    description: "Handle the flood of weekend inquiries without sacrificing your personal time.",
    benefits: ["Venue Availability Check", "Package Explainer", "Booking Coordination"],
    features: ["Date Selector", "Capacity Filter", "Vendor Management"],
    benefitCards: [
      {
        title: "Checks availability instantly",
        description: "Respond to date inquiries immediately with real-time availability, even on weekends when leads are browsing.",
        icon: Calendar,
      },
      {
        title: "Explains packages clearly",
        description: "Walk prospects through pricing tiers, add-ons, and what is included so they arrive at consultations ready to book.",
        icon: Package,
      },
      {
        title: "Books consultations automatically",
        description: "Qualified leads schedule venue tours or planning calls directly into your calendar.",
        icon: CalendarCheck,
      },
    ],
    painPoints: [
      "Inquiries flood in on weekends when you are at events",
      "Leads go cold waiting for Monday callbacks",
      "Repeating the same package info on every call",
      "Double-booking or losing track of date holds",
    ],
    outcomes: [
      "Weekend leads get instant responses and book consultations",
      "Prospects arrive educated on packages and pricing",
      "Calendar stays organized with automated date management",
      "More time planning events, less time fielding basic questions",
    ],
    playbook: {
      intakeQuestions: [
        "What type of event are you planning? (wedding, corporate, birthday, other)",
        "What date or date range are you considering?",
        "How many guests are you expecting?",
        "Do you have a budget range in mind?",
        "Would you like to schedule a tour or consultation?",
      ],
      routingRules: [
        "If date is already booked, offer alternative dates or waitlist",
        "If guest count exceeds capacity, explain limitations or suggest sister venue",
        "If corporate event with large budget, priority routing to sales manager",
      ],
      afterCallActions: [
        "Send digital brochure with package details and pricing",
        "Add to CRM with event type, date, guest count, and budget",
        "Place tentative hold on date if consultation is booked",
      ],
    },
    integrations: [
      "Event management software (Honeybook, Dubsado, Planning Pod)",
      "Google Calendar / Outlook",
      "CRM (HubSpot, GoHighLevel)",
      "Payment processing for deposits",
    ],
    objections: [
      {
        question: "How does it know our availability?",
        answer: "The AI syncs with your calendar or event management system to provide real-time availability for any date inquiry.",
      },
      {
        question: "What about custom or complex events?",
        answer: "Custom requests are flagged and routed to your team with all details collected. The AI handles standard inquiries so you focus on complex planning.",
      },
      {
        question: "Can it handle vendor coordination?",
        answer: "The AI collects vendor preferences and requirements, then routes to your coordinator with organized notes.",
      },
    ],
    examples: [
      {
        title: "Wedding inquiry to consultation booked",
        channel: "Call",
        lines: [
          "Agent: Thanks for calling. What type of event are you planning?",
          "Customer: A wedding for next October.",
          "Agent: Congratulations! Do you have a specific date in mind?",
          "Customer: October 15th if possible.",
          "Agent: Let me check. October 15th is available. How many guests are you expecting?",
          "Customer: Around 150.",
          "Agent: Perfect, that fits our space beautifully. Would you like to schedule a tour to see the venue in person?",
          "Customer: Yes, that would be great.",
          "Agent: I have openings this Saturday at 11am or next Tuesday at 4pm. Which works better?",
        ],
      },
    ],
    trustCards: [
      {
        title: "Real-time availability",
        description: "Instant date checks synced with your booking calendar.",
      },
      {
        title: "Weekend coverage",
        description: "Never miss a lead while you are busy at events.",
      },
      {
        title: "Organized handoffs",
        description: "Every inquiry arrives with complete event details.",
      },
    ],
  },
  {
    name: "Financial Planning",
    slug: "financial-planning",
    icon: PiggyBank,
    category: "Finance & Real Estate",
    tagline: "Qualify high-net-worth leads with professional AI.",
    description: "Ensure every potential client receives a premium, instant response that reflects your firm's standards.",
    benefits: ["Asset Qualification", "Discovery Call Booking", "Compliance Guardrails"],
    features: ["Sophisticated Language", "Meeting Prep", "Data Enrichment"],
    benefitCards: [
      {
        title: "Qualifies assets professionally",
        description: "Tactfully gather investable assets, goals, and timeline to ensure prospects meet your minimums before booking.",
        icon: Target,
      },
      {
        title: "Books qualified consultations",
        description: "Serious prospects schedule directly into your calendar with all relevant information pre-collected.",
        icon: CalendarCheck,
      },
      {
        title: "Maintains compliance",
        description: "Scripted responses stay within regulatory guidelines. No promises, no projections, no compliance risks.",
        icon: ShieldCheck,
      },
    ],
    painPoints: [
      "Unqualified leads waste expensive advisor time",
      "Prospects expect immediate responses from premium firms",
      "Compliance concerns limit what staff can say",
      "Manual qualification calls are time-consuming",
    ],
    outcomes: [
      "Only meet with prospects who meet your asset minimums",
      "Premium response experience matches your brand",
      "Compliant conversations that protect your firm",
      "Advisors spend time advising, not qualifying",
    ],
    playbook: {
      intakeQuestions: [
        "What financial goals are you looking to address? (retirement, wealth transfer, investment management, etc.)",
        "What is your approximate investable asset range?",
        "Are you currently working with a financial advisor?",
        "What is your timeline for making a decision?",
        "Would you prefer an in-person or virtual consultation?",
      ],
      routingRules: [
        "If assets below minimum, provide educational resources and nurture sequence",
        "If high-net-worth and immediate timeline, priority booking with senior advisor",
        "If complex situation (business sale, inheritance), route to specialty team",
      ],
      afterCallActions: [
        "Send meeting confirmation with advisor bio and what to expect",
        "Add to CRM with asset range, goals, and timeline",
        "Trigger pre-meeting prep email with documents to gather",
      ],
    },
    integrations: [
      "CRM (Salesforce, Wealthbox, Redtail)",
      "Calendar scheduling (Calendly, Acuity)",
      "Financial planning software (eMoney, MoneyGuidePro)",
      "Compliance documentation tools",
    ],
    objections: [
      {
        question: "How do you ask about assets without being pushy?",
        answer: "The AI uses tactful, professional language to gather asset ranges. It positions questions around finding the right fit, not interrogation.",
      },
      {
        question: "Is this compliant with financial regulations?",
        answer: "All scripts are designed to avoid projections, guarantees, or advice. The AI qualifies and schedules only.",
      },
      {
        question: "What about sensitive financial situations?",
        answer: "Complex or sensitive inquiries are identified and routed to your team with discretion and full context.",
      },
    ],
    examples: [
      {
        title: "High-net-worth prospect qualified and booked",
        channel: "Call",
        lines: [
          "Agent: Thank you for contacting our firm. To connect you with the right advisor, may I ask what financial goals you are looking to address?",
          "Customer: Retirement planning. I am selling my business next year.",
          "Agent: Congratulations on that milestone. To ensure we can provide the level of service you deserve, what is your approximate investable asset range?",
          "Customer: Around 2 million from the sale, plus existing investments.",
          "Agent: Excellent. We specialize in helping business owners transition into retirement. Would you prefer an in-person meeting at our office or a virtual consultation?",
          "Customer: In-person would be great.",
          "Agent: Perfect. I have availability with our senior advisor Thursday at 10am or Friday at 2pm. Which works better for you?",
        ],
      },
    ],
    trustCards: [
      {
        title: "Compliance first",
        description: "Every response follows regulatory guidelines and firm policies.",
      },
      {
        title: "Premium experience",
        description: "Instant, professional responses that match your brand standards.",
      },
      {
        title: "Qualified meetings only",
        description: "Your time is spent with prospects who meet your criteria.",
      },
    ],
  },
  {
    name: "General Contractor Bot",
    slug: "general-contractor",
    icon: HardHat,
    category: "Home Services",
    tagline: "The digital foreman that never sleeps.",
    description: "Manage project inquiries, subcontractor updates, and client check-ins automatically.",
    benefits: ["Project In-take", "Subcontractor Routing", "Status Reporting"],
    features: ["File Upload", "Timeline Tracking", "Multi-Project Management"],
    benefitCards: [
      {
        title: "Captures project details",
        description: "Collect scope, photos, timeline, and budget upfront so you can provide accurate estimates without wasted site visits.",
        icon: ClipboardCheck,
      },
      {
        title: "Schedules consultations",
        description: "Qualified leads book estimate appointments directly into your calendar while you manage active jobs.",
        icon: CalendarCheck,
      },
      {
        title: "Keeps clients updated",
        description: "Automated check-ins and status updates reduce client calls asking about project progress.",
        icon: MessageSquare,
      },
    ],
    painPoints: [
      "Calls come in while you are on job sites and cannot answer",
      "Unqualified leads waste time with site visits that go nowhere",
      "Clients call constantly asking for project updates",
      "Juggling multiple projects means some inquiries slip through",
    ],
    outcomes: [
      "Every inquiry captured with detailed project info",
      "Only visit sites for serious, qualified projects",
      "Happier clients with proactive communication",
      "More organized pipeline across all active projects",
    ],
    playbook: {
      intakeQuestions: [
        "What type of project are you planning? (renovation, addition, new build, repair)",
        "What is the scope of work? (kitchen, bathroom, whole home, etc.)",
        "Do you have architectural plans or a design in mind?",
        "What is your target budget range?",
        "When are you hoping to start the project?",
      ],
      routingRules: [
        "If emergency repair, route to available crew immediately",
        "If large project over threshold, priority scheduling with owner",
        "If budget unrealistic for scope, set expectations before site visit",
      ],
      afterCallActions: [
        "Send confirmation with site visit date and what to prepare",
        "Add to project management system with scope and budget notes",
        "Request photos of space if not already provided",
      ],
    },
    integrations: [
      "Buildertrend / CoConstruct / Jobber",
      "Google Calendar scheduling",
      "QuickBooks / accounting software",
      "Google Reviews automation (RevuBro)",
    ],
    objections: [
      {
        question: "How can AI understand complex construction projects?",
        answer: "The AI gathers detailed scope, photos, and requirements. Your expertise comes in during the estimate, but intake is handled automatically.",
      },
      {
        question: "What about emergency repairs?",
        answer: "Urgent requests are identified immediately and routed to your on-call crew or answered personally.",
      },
      {
        question: "Can it handle subcontractor coordination?",
        answer: "The AI can collect sub requirements and route messages, but complex coordination flows to your project manager.",
      },
    ],
    examples: [
      {
        title: "Kitchen renovation inquiry to site visit booked",
        channel: "Call",
        lines: [
          "Agent: Thanks for calling. What type of project are you looking to do?",
          "Customer: We want to renovate our kitchen.",
          "Agent: Great. Can you tell me a bit about the scope? Are you looking at a full gut renovation or more of an update?",
          "Customer: Full renovation. New cabinets, counters, appliances, the works.",
          "Agent: Got it. Do you have a budget range in mind for the project?",
          "Customer: We are thinking 50 to 70 thousand.",
          "Agent: Perfect. I would love to schedule a site visit to see the space and discuss options. I have availability Thursday morning or Saturday afternoon. Which works better?",
        ],
      },
    ],
    trustCards: [
      {
        title: "Detailed intake",
        description: "Every inquiry comes with scope, budget, and photos attached.",
      },
      {
        title: "Qualified site visits",
        description: "Stop wasting time on projects that are not a fit.",
      },
      {
        title: "Client communication",
        description: "Automated updates keep clients happy and informed.",
      },
    ],
  },
  {
    name: "Gym / Fitness",
    slug: "gym-fitness",
    icon: Dumbbell,
    category: "Health & Wellness",
    tagline: "Sign up members while they're most motivated.",
    description: "Answer membership questions and book tours at 2 AM when the motivation hits.",
    benefits: ["Tour Scheduling", "Class Registration", "Membership Sales"],
    features: ["Dues Handling", "Waiver Distribution", "Referral Tracking"],
    benefitCards: [
      {
        title: "Books tours 24/7",
        description: "Capture motivated prospects at 2am when they decide to get fit. Schedule tours before the motivation fades.",
        icon: CalendarCheck,
      },
      {
        title: "Answers membership questions",
        description: "Explain pricing, class schedules, amenities, and policies instantly without staff intervention.",
        icon: MessageSquare,
      },
      {
        title: "Converts trials to members",
        description: "Automated follow-ups nurture trial members into full memberships with perfectly timed outreach.",
        icon: Target,
      },
    ],
    painPoints: [
      "Prospects inquire late at night when staff is not available",
      "Front desk is too busy to answer every call during peak hours",
      "Trial members slip away without converting to paid memberships",
      "Repeating the same membership info on every inquiry",
    ],
    outcomes: [
      "Never miss a motivated prospect regardless of time",
      "Front desk focuses on in-person member experience",
      "Higher trial-to-member conversion with automated follow-up",
      "Consistent, accurate info on every membership inquiry",
    ],
    playbook: {
      intakeQuestions: [
        "What are your fitness goals? (weight loss, muscle building, general fitness, classes)",
        "Have you been a member of a gym before?",
        "What times do you typically prefer to work out?",
        "Are you interested in personal training or group classes?",
        "Would you like to schedule a tour of the facility?",
      ],
      routingRules: [
        "If interested in personal training, route to PT sales team",
        "If asking about corporate or group memberships, route to membership director",
        "If complaint or billing issue, route to member services",
      ],
      afterCallActions: [
        "Send tour confirmation with facility address and what to bring",
        "Add to CRM with fitness goals and preferred times",
        "Trigger new prospect nurture sequence if tour not booked",
      ],
    },
    integrations: [
      "Gym management software (Mindbody, Zen Planner, Club OS)",
      "Payment processing for memberships",
      "Class scheduling systems",
      "Google Reviews automation (RevuBro)",
    ],
    objections: [
      {
        question: "What if someone has specific questions about equipment or classes?",
        answer: "The AI handles common questions about amenities, hours, and classes. Specific or complex questions route to your staff.",
      },
      {
        question: "Can it handle membership cancellations?",
        answer: "Cancellation requests are flagged and routed to your retention team with member history for a save attempt.",
      },
      {
        question: "What about existing member questions?",
        answer: "The AI can answer FAQs for current members too, like class schedules, hours, and policies. Billing issues route to staff.",
      },
    ],
    examples: [
      {
        title: "Late night inquiry to tour booked",
        channel: "SMS",
        lines: [
          "Customer: What are your membership prices?",
          "Agent: Great question! Our memberships start at $29/month for basic access, $49/month for full access including classes, and $99/month for premium with personal training sessions. What are your fitness goals?",
          "Customer: I want to lose weight and maybe try some classes.",
          "Agent: Our full access membership would be perfect for that. It includes unlimited classes like spin, yoga, and HIIT. Would you like to schedule a tour to see the facility and try a class?",
          "Customer: Sure, when can I come in?",
          "Agent: I have openings tomorrow at 10am, 2pm, or 6pm. Which works best for you?",
        ],
      },
    ],
    trustCards: [
      {
        title: "24/7 availability",
        description: "Capture motivated prospects whenever inspiration strikes.",
      },
      {
        title: "Consistent messaging",
        description: "Every prospect gets accurate pricing and info.",
      },
      {
        title: "Automated nurture",
        description: "Trial members convert with perfectly timed follow-ups.",
      },
    ],
  },
  {
    name: "HVAC",
    slug: "hvac",
    icon: Thermometer,
    category: "Home Services",
    tagline: "Master the summer rush with automated dispatch.",
    description: "Handle emergency calls and routine maintenance bookings without a massive call center.",
    benefits: ["Emergency Routing", "Maintenance Reminders", "Repair Quoting"],
    features: ["Unit Diagnostics", "Geo-Fenced Dispatch", "Warranty Lookup"],
    benefitCards: [
      {
        title: "Emergency triage and routing",
        description:
          "No cool, no heat, leaks, breaker trips. Brobot captures symptoms, prioritizes urgency, and routes to the right path fast.",
        icon: PhoneCall,
      },
      {
        title: "Books dispatch windows",
        description:
          "Schedules service calls against real availability and sends confirmations so your team stops playing phone tag.",
        icon: CalendarCheck,
      },
      {
        title: "Maintenance plan engine",
        description:
          "Converts seasonal tune up demand into booked appointments and recurring maintenance revenue.",
        icon: RefreshCcw,
      },
    ],
    painPoints: [
      "Calls spike during heat waves and after hours. Leads leak to competitors",
      "Front desk gets overloaded. Booking details are incomplete",
      "Emergency calls need fast triage and clear escalation rules",
      "No shows and missed confirmations waste technician time",
    ],
    outcomes: [
      "Higher booking rate from inbound calls and SMS",
      "Cleaner dispatch info (address, system type, symptoms, urgency)",
      "Fewer missed calls and faster first response time",
      "More tune ups and maintenance plan signups",
    ],
    playbook: {
      intakeQuestions: [
        "What is the service address and zip code?",
        "Is it no cool, no heat, not cooling well, leak, or other?",
        "What type of system? (furnace, heat pump, AC) and any brand info?",
        "How long has it been happening? Any breaker trips or water issues?",
        "Do you want the earliest available dispatch window or a scheduled time?",
      ],
      routingRules: [
        "If gas smell or suspected CO, immediate safety script and escalate to human",
        "If no cool or no heat, mark urgent and prioritize dispatch",
        "If outside service area, decline or offer referral",
      ],
      afterCallActions: [
        "Send SMS confirmation, ETA window, and prep checklist (access, pets, filter size)",
        "Create CRM record with symptoms, system type, and urgency tag",
        "Notify on call tech or team for emergency categories",
      ],
    },
    integrations: [
      "ServiceTitan, Housecall Pro, Jobber (or your CRM)",
      "Google Calendar and Outlook",
      "SMS follow up workflows",
      "Google Reviews automation (RevuBro)",
    ],
    objections: [
      {
        question: "How much will it cost?",
        answer:
          "The agent can provide your standard diagnostic and dispatch policy and set expectations, then the technician confirms final pricing onsite based on the actual issue.",
      },
      {
        question: "Can I talk to a human?",
        answer:
          "Yes. If it is complex or urgent, the agent can transfer the call or notify your team immediately.",
      },
      {
        question: "Do you handle emergencies after hours?",
        answer:
          "If your business offers after hours dispatch, the agent follows your rules to prioritize and route the right emergencies to the right on call contact.",
      },
    ],
    examples: [
      {
        title: "No cool emergency to urgent dispatch booked",
        channel: "Call",
        lines: [
          "Agent: Thanks for calling. Is this a no cool emergency or a routine appointment?",
          "Customer: No cool. It is 90 degrees inside.",
          "Agent: I can help. What is the service address and what type of system do you have (AC, heat pump, furnace)?",
          "Customer: 456 Oak St. AC.",
          "Agent: Got it. I can book the earliest dispatch window today or schedule tomorrow morning. Which do you prefer?",
        ],
      },
      {
        title: "Maintenance tune up booked and reminder set",
        channel: "SMS",
        lines: [
          "Customer: Do you do spring tune ups?",
          "Agent: Yes. What is your address and zip so I can confirm we are in your service area?",
          "Customer: 789 Pine, 12345.",
          "Agent: Perfect. I can book you Tuesday 10 to 12 or Thursday 2 to 4. Which works?",
          "Customer: Thursday.",
          "Agent: Confirmed. Thursday 2 to 4. I will send a reminder the day before and the morning of the appointment.",
        ],
      },
    ],
    trustCards: [
      {
        title: "Safety first rules",
        description: "Gas and CO scripts and escalation pathways follow your SOPs.",
      },
      {
        title: "Dispatch ready details",
        description: "Captures system, symptoms, and urgency so techs arrive prepared.",
      },
      {
        title: "Less phone tag",
        description: "Confirmations and reminders reduce no shows and reschedules.",
      },
    ],
  },
  {
    name: "Junk Removal",
    slug: "junk-removal",
    icon: Trash2,
    category: "Home Services",
    tagline: "Close jobs faster with instant photo-to-quote.",
    description: "Let AI estimate load sizes and book the truck while you're on the road.",
    benefits: ["Visual Estimating", "Truck Scheduling", "Review Boosting"],
    features: ["MMS Integration", "Volume Calculator", "Dynamic Pricing"],
    benefitCards: [
      {
        title: "Photo-based quotes",
        description: "Customers send photos, AI estimates load size and provides a quote range before you even arrive.",
        icon: Camera,
      },
      {
        title: "Books jobs instantly",
        description: "Once pricing is accepted, the job is scheduled into your route without back-and-forth phone tag.",
        icon: CalendarCheck,
      },
      {
        title: "Fills your truck",
        description: "Optimized scheduling helps you book jobs in the same area to maximize each trip.",
        icon: Truck,
      },
    ],
    painPoints: [
      "Phone tag trying to understand what needs to be removed",
      "Wasted trips for jobs that are not worth it",
      "Customers want instant quotes but you are on the road",
      "Scheduling gaps leave money on the table",
    ],
    outcomes: [
      "Accurate estimates from photos before you arrive",
      "Only take jobs that are worth your time",
      "Instant quotes keep customers from calling competitors",
      "Fuller schedules with optimized routing",
    ],
    playbook: {
      intakeQuestions: [
        "What items do you need removed? (furniture, appliances, yard waste, construction debris, full cleanout)",
        "Can you send photos of the items?",
        "What is the pickup address?",
        "Is everything accessible or are there stairs/obstacles?",
        "When do you need this done?",
      ],
      routingRules: [
        "If hazardous materials mentioned, explain limitations and route to specialist",
        "If commercial or large cleanout, route to estimator for on-site quote",
        "If same-day urgent, check availability and offer premium pricing",
      ],
      afterCallActions: [
        "Send quote confirmation with arrival window",
        "Add job to route optimization with address and load estimate",
        "Trigger day-before reminder with prep instructions",
      ],
    },
    integrations: [
      "Jobber / Housecall Pro / Service Fusion",
      "Route optimization software",
      "Payment processing (Stripe, Square)",
      "Google Reviews automation (RevuBro)",
    ],
    objections: [
      {
        question: "How accurate are photo-based quotes?",
        answer: "Photos provide a solid estimate range. Final pricing is confirmed on arrival, but estimates are typically within 10-15% accuracy.",
      },
      {
        question: "What if the job is bigger than the photos showed?",
        answer: "The AI sets expectations that final pricing is confirmed on-site. You adjust as needed with no surprises for the customer.",
      },
      {
        question: "Can you handle hazardous materials?",
        answer: "The AI identifies hazardous items and explains limitations. Those jobs route to appropriate specialists or are declined politely.",
      },
    ],
    examples: [
      {
        title: "Photo quote to job booked",
        channel: "SMS",
        lines: [
          "Customer: How much to haul away a couch and old mattress?",
          "Agent: Happy to help! Can you send a photo of the items and let me know the pickup address?",
          "Customer: (sends photo) 456 Pine Street.",
          "Agent: Got it. Based on the photo, that looks like about 1/8 truck load. Your quote is $120-150. Are the items at ground level or are there stairs?",
          "Customer: Ground level, easy access.",
          "Agent: Perfect. I can schedule pickup tomorrow between 2-4pm or Saturday morning. Which works better?",
          "Customer: Tomorrow works.",
          "Agent: You are all set for tomorrow 2-4pm. We will text when we are on the way.",
        ],
      },
    ],
    trustCards: [
      {
        title: "Visual estimates",
        description: "Photos provide accurate quotes without wasted site visits.",
      },
      {
        title: "Instant booking",
        description: "Jobs scheduled before customers call a competitor.",
      },
      {
        title: "Route optimization",
        description: "Fill your truck with jobs in the same area.",
      },
    ],
  },
  {
    name: "Life Insurance",
    slug: "life-insurance",
    icon: ShieldCheck,
    category: "Finance & Real Estate",
    tagline: "Scale your agency with 24/7 lead qualification.",
    description: "Qualify prospects and set appointments so your agents only talk to ready-to-buy clients.",
    benefits: ["Policy Qualification", "Agent Assignment", "E-App Integration"],
    features: ["Health Screening", "Quote Comparison", "Beneficiary Updates"],
    benefitCards: [
      {
        title: "Qualifies leads instantly",
        description: "Collect age, health info, coverage needs, and budget upfront so agents only speak with qualified prospects.",
        icon: Target,
      },
      {
        title: "Books appointments 24/7",
        description: "Prospects researching at night can schedule with an agent immediately while they are thinking about their family's protection.",
        icon: CalendarCheck,
      },
      {
        title: "Routes to right agent",
        description: "Match prospects with the right agent based on product type, location, or specialization.",
        icon: UserCheck,
      },
    ],
    painPoints: [
      "Leads go cold waiting for agent callbacks",
      "Unqualified prospects waste agent selling time",
      "Night and weekend inquiries are not captured",
      "Manual lead distribution is slow and inconsistent",
    ],
    outcomes: [
      "Agents only meet with pre-qualified, ready-to-buy prospects",
      "Faster speed-to-lead increases close rates",
      "24/7 coverage captures every inquiry",
      "Automated routing ensures fair and fast distribution",
    ],
    playbook: {
      intakeQuestions: [
        "What type of coverage are you looking for? (term, whole life, final expense)",
        "Who would be covered? (yourself, spouse, family)",
        "What is your age and general health status?",
        "Do you have a coverage amount in mind?",
        "What is your budget for monthly premiums?",
      ],
      routingRules: [
        "If final expense, route to FE specialist",
        "If high coverage amount, route to senior agent",
        "If health issues mentioned, flag for underwriting review",
      ],
      afterCallActions: [
        "Send appointment confirmation with agent info and what to prepare",
        "Add to CRM with coverage type, health notes, and budget",
        "Trigger pre-appointment email with policy comparison info",
      ],
    },
    integrations: [
      "Agency CRM (Salesforce, AgencyBloc, HawkSoft)",
      "E-application platforms",
      "Calendar scheduling (Calendly, Acuity)",
      "Quote engines and carrier portals",
    ],
    objections: [
      {
        question: "Can AI handle sensitive health questions?",
        answer: "The AI gathers basic health info professionally. Detailed underwriting questions are handled by your licensed agents.",
      },
      {
        question: "What about compliance requirements?",
        answer: "All scripts follow insurance marketing guidelines. No quotes or guarantees are made. The AI qualifies and schedules only.",
      },
      {
        question: "How does agent assignment work?",
        answer: "You set the rules. Route by product type, geography, round-robin, or any custom criteria.",
      },
    ],
    examples: [
      {
        title: "Term life inquiry qualified and booked",
        channel: "Call",
        lines: [
          "Agent: Thanks for calling about life insurance. What type of coverage are you interested in?",
          "Customer: I need term life insurance.",
          "Agent: Great choice. Who would be covered under this policy?",
          "Customer: Just myself. I want to make sure my family is protected.",
          "Agent: Absolutely. And what is your age?",
          "Customer: 35.",
          "Agent: Perfect. Do you have a coverage amount in mind, or would you like our agent to help you determine the right amount?",
          "Customer: I was thinking around 500,000.",
          "Agent: Got it. I can schedule you with a licensed agent who specializes in term policies. I have openings tomorrow at 11am or Thursday at 3pm. Which works better?",
        ],
      },
    ],
    trustCards: [
      {
        title: "Licensed agent handoff",
        description: "All policy discussions happen with your licensed team.",
      },
      {
        title: "Compliance safe",
        description: "No quotes or promises made by AI, just qualification.",
      },
      {
        title: "Smart routing",
        description: "Right prospect matched to right agent automatically.",
      },
    ],
  },
  {
    name: "Med Spa",
    slug: "med-spa",
    icon: Sparkles,
    category: "Health & Wellness",
    tagline: "Book consultations for premium aesthetic treatments.",
    description: "Handle complex inquiries about treatments and availability with specialized AI.",
    benefits: ["Pre-consult Qualification", "Package Upselling", "Cancellation Filling"],
    features: ["Treatment Guide", "Provider Sync", "Follow-up Sequences"],
    benefitCards: [
      {
        title: "Educates on treatments",
        description: "Answer questions about Botox, fillers, laser treatments, and more so prospects arrive informed and ready to book.",
        icon: MessageSquare,
      },
      {
        title: "Books consultations 24/7",
        description: "Capture leads researching treatments at night and schedule consultations before they move on to a competitor.",
        icon: CalendarCheck,
      },
      {
        title: "Fills cancellations fast",
        description: "When appointments cancel, AI reaches out to waitlist clients and fills the slot within minutes.",
        icon: Clock,
      },
    ],
    painPoints: [
      "Staff spends hours explaining treatment options on calls",
      "Evening and weekend inquiries go unanswered",
      "Last-minute cancellations leave expensive provider time empty",
      "Prospects research and book with whoever responds first",
    ],
    outcomes: [
      "Educated prospects who are ready to book during consultations",
      "24/7 response captures more leads than competitors",
      "Cancellations filled quickly, protecting revenue",
      "Front desk focuses on in-spa client experience",
    ],
    playbook: {
      intakeQuestions: [
        "What treatment or concern brings you in? (wrinkles, volume loss, skin texture, body contouring)",
        "Have you had this treatment before?",
        "Are you looking for a specific treatment or would you like a consultation to explore options?",
        "Do you have any upcoming events you are preparing for?",
        "Would you like to schedule a consultation with our provider?",
      ],
      routingRules: [
        "If medical concern or contraindication mentioned, route to clinical staff",
        "If asking about surgical procedures, explain limitations and refer appropriately",
        "If VIP or high-value client, priority scheduling with senior provider",
      ],
      afterCallActions: [
        "Send consultation confirmation with provider bio and before/after gallery",
        "Add to CRM with treatment interest and any noted concerns",
        "Trigger pre-consultation email with what to expect and prep instructions",
      ],
    },
    integrations: [
      "Med spa software (Vagaro, Boulevard, Zenoti)",
      "Patient management systems",
      "Payment processing for deposits",
      "Google Reviews automation (RevuBro)",
    ],
    objections: [
      {
        question: "Can AI answer medical questions?",
        answer: "The AI provides general treatment education. Medical questions and contraindications are routed to your clinical staff.",
      },
      {
        question: "What about sensitive cosmetic concerns?",
        answer: "The AI handles inquiries with discretion and professionalism, making clients feel comfortable discussing their goals.",
      },
      {
        question: "How do you handle pricing questions?",
        answer: "You control how pricing is shared. The AI can provide ranges, packages, or direct to consultation for custom quotes.",
      },
    ],
    examples: [
      {
        title: "Botox inquiry to consultation booked",
        channel: "Call",
        lines: [
          "Agent: Thanks for calling. What treatment are you interested in learning about?",
          "Customer: I have been thinking about Botox for my forehead lines.",
          "Agent: Great choice. Have you had Botox before?",
          "Customer: No, this would be my first time.",
          "Agent: Perfect. Our providers are experts at natural-looking results for first-timers. Would you like to schedule a complimentary consultation to discuss your goals and see if Botox is right for you?",
          "Customer: Yes, that sounds good.",
          "Agent: I have openings Wednesday at 2pm or Friday at 10am. Which works better for you?",
        ],
      },
    ],
    trustCards: [
      {
        title: "Treatment education",
        description: "Prospects arrive informed and ready to make decisions.",
      },
      {
        title: "Cancellation recovery",
        description: "Empty slots filled fast with automated waitlist outreach.",
      },
      {
        title: "Premium experience",
        description: "Professional, discreet handling of all inquiries.",
      },
    ],
  },
  {
    name: "Mortgage",
    slug: "mortgage",
    icon: Home,
    category: "Finance & Real Estate",
    tagline: "Speed up the pipeline with instant pre-qual support.",
    description: "Gather initial data and answer rate questions to keep your pipeline moving faster than the bank.",
    benefits: ["Pre-qual Data Collection", "Rate Inquiries", "Partner Routing"],
    features: ["Document Upload", "Loan Officer Sync", "Status Portal"],
    benefitCards: [
      {
        title: "Collects pre-qual info",
        description: "Gather income, assets, credit range, and purchase timeline so loan officers start with complete applications.",
        icon: ClipboardCheck,
      },
      {
        title: "Answers rate questions",
        description: "Provide general rate info and program details instantly so prospects stay engaged while waiting for custom quotes.",
        icon: MessageSquare,
      },
      {
        title: "Routes to right LO",
        description: "Match borrowers with the right loan officer based on loan type, location, or specialization.",
        icon: UserCheck,
      },
    ],
    painPoints: [
      "Leads from realtors and Zillow expect instant responses",
      "Loan officers spend hours on initial data collection",
      "Rate shoppers tie up phone lines with basic questions",
      "After-hours inquiries sit until morning",
    ],
    outcomes: [
      "Faster speed-to-lead beats competing lenders",
      "Loan officers start with complete borrower profiles",
      "Basic rate questions answered instantly, 24/7",
      "More loans closed with same team size",
    ],
    playbook: {
      intakeQuestions: [
        "Are you looking to purchase or refinance?",
        "What is the property address or location you are considering?",
        "What is your estimated purchase price or current loan balance?",
        "What is your approximate credit score range?",
        "What is your timeline for closing?",
      ],
      routingRules: [
        "If VA or FHA loan, route to government loan specialist",
        "If jumbo loan amount, route to senior loan officer",
        "If refinance with cash-out, collect additional purpose details",
      ],
      afterCallActions: [
        "Send secure link for document upload (paystubs, tax returns, bank statements)",
        "Add to LOS with borrower profile and loan scenario",
        "Trigger rate quote email from assigned loan officer",
      ],
    },
    integrations: [
      "Loan origination systems (Encompass, Calyx, BytePro)",
      "CRM (Salesforce, Velocify, Jungo)",
      "Document collection (Blend, SimpleNexus)",
      "Rate engines and pricing tools",
    ],
    objections: [
      {
        question: "Can AI provide accurate rate quotes?",
        answer: "The AI provides general rate ranges and program info. Specific quotes come from your licensed loan officers with full scenario details.",
      },
      {
        question: "What about compliance and disclosures?",
        answer: "All scripts follow mortgage marketing guidelines. No commitments or guarantees are made. The AI gathers info and schedules only.",
      },
      {
        question: "How do you handle realtor partner leads?",
        answer: "Partner leads can be tagged and prioritized. Loan officers are notified immediately with full borrower details.",
      },
    ],
    examples: [
      {
        title: "Purchase inquiry to pre-qual started",
        channel: "Call",
        lines: [
          "Agent: Thanks for calling about your mortgage needs. Are you looking to purchase a new home or refinance?",
          "Customer: I am looking to purchase.",
          "Agent: Great. What area are you looking to buy in?",
          "Customer: Austin, Texas.",
          "Agent: Perfect. And what is your price range?",
          "Customer: Around 400,000.",
          "Agent: Got it. To get you pre-approved quickly, what is your approximate credit score range?",
          "Customer: Around 720.",
          "Agent: Excellent. I can have a loan officer reach out with rate options and next steps within the hour. Is this the best number to reach you?",
        ],
      },
    ],
    trustCards: [
      {
        title: "Speed to lead",
        description: "Respond to inquiries faster than big banks and competitors.",
      },
      {
        title: "Complete profiles",
        description: "Loan officers start with all the info they need.",
      },
      {
        title: "Compliance safe",
        description: "No rate locks or commitments without licensed LO review.",
      },
    ],
  },
  {
    name: "Moving Company",
    slug: "moving-company",
    icon: Truck,
    category: "Home Services",
    tagline: "Book moves and estimate inventory 24/7.",
    description: "Capture leads during the high-stress moving process with instant, calm, and accurate responses.",
    benefits: ["Inventory Walkthrough", "Booking Deposits", "Claims Assistance"],
    features: ["Route Optimization", "Pack-out Support", "Storage Management"],
    benefitCards: [
      {
        title: "Collects move details",
        description: "Gather origin, destination, inventory size, and move date to provide accurate estimates without endless phone tag.",
        icon: ClipboardCheck,
      },
      {
        title: "Books moves instantly",
        description: "Qualified leads secure their move date with a deposit before calling a competitor.",
        icon: CalendarCheck,
      },
      {
        title: "Calms stressed customers",
        description: "Moving is stressful. The AI provides patient, clear answers at any hour when customers are anxious.",
        icon: MessageSquare,
      },
    ],
    painPoints: [
      "Phone rings constantly during busy season and calls are missed",
      "Customers call multiple companies and book whoever answers first",
      "Estimating requires lengthy calls to understand inventory",
      "After-hours inquiries sit until morning and book elsewhere",
    ],
    outcomes: [
      "Every inquiry gets instant response, even during peak season",
      "Win more jobs by being first to respond and book",
      "Better estimates from detailed inventory collection upfront",
      "24/7 coverage captures anxious late-night planners",
    ],
    playbook: {
      intakeQuestions: [
        "What is your move date or date range?",
        "What is the pickup address and destination?",
        "What size home are you moving? (studio, 1BR, 2BR, 3BR+, office)",
        "Do you need packing services or just moving?",
        "Are there any special items? (piano, antiques, gun safe, etc.)",
      ],
      routingRules: [
        "If long-distance or interstate, route to long-haul coordinator",
        "If commercial or office move, route to commercial sales",
        "If move date within 48 hours, check emergency availability",
      ],
      afterCallActions: [
        "Send estimate range with link to book and pay deposit",
        "Add to CRM with move details, inventory notes, and special items",
        "Trigger confirmation and packing tips email sequence",
      ],
    },
    integrations: [
      "Moving software (MoveitPro, SmartMoving, Elromco)",
      "CRM and lead management",
      "Payment processing for deposits",
      "Google Reviews automation (RevuBro)",
    ],
    objections: [
      {
        question: "How accurate are phone estimates?",
        answer: "The AI collects detailed inventory info for accurate ranges. Final pricing is confirmed after visual or video survey if needed.",
      },
      {
        question: "What about specialty items like pianos?",
        answer: "Special items are flagged and pricing adjusted accordingly. Complex items can trigger a follow-up from your estimator.",
      },
      {
        question: "Can you handle last-minute moves?",
        answer: "The AI checks availability and can offer rush pricing for last-minute bookings when crews are available.",
      },
    ],
    examples: [
      {
        title: "Local move inquiry to deposit booked",
        channel: "Call",
        lines: [
          "Agent: Thanks for calling. When are you looking to move?",
          "Customer: March 15th if possible.",
          "Agent: Great. And where are you moving from and to?",
          "Customer: From downtown to the suburbs, about 20 miles.",
          "Agent: Perfect. What size home are you moving?",
          "Customer: A 2 bedroom apartment.",
          "Agent: Got it. Do you need packing services or just the move itself?",
          "Customer: Just the move, we will pack ourselves.",
          "Agent: Based on a 2 bedroom local move, your estimate is in the range of $X to $Y. I can lock in March 15th with a deposit. Would you like to secure that date?",
        ],
      },
    ],
    trustCards: [
      {
        title: "Detailed estimates",
        description: "Accurate pricing from thorough inventory collection.",
      },
      {
        title: "Instant booking",
        description: "Secure move dates before customers call competitors.",
      },
      {
        title: "Stress-free service",
        description: "Patient, calm responses for anxious customers.",
      },
    ],
  },
  {
    name: "Plumbing",
    slug: "plumbing",
    icon: Droplets,
    category: "Home Services",
    tagline: "Handle leaks and emergencies at any hour.",
    description: "The AI dispatcher that stays awake when the pipes burst at 3 AM.",
    benefits: ["Urgent Dispatch", "Water Heater Quoting", "Job Scheduling"],
    features: ["Troubleshooting Guide", "Tech Location", "Invoicing Sync"],
    benefitCards: [
      {
        title: "Dispatches emergencies",
        description: "Burst pipes and major leaks are identified and routed to on-call techs immediately, any time of day or night.",
        icon: AlertCircle,
      },
      {
        title: "Qualifies and quotes",
        description: "Collect problem details, photos, and location to provide accurate estimates before rolling a truck.",
        icon: ClipboardCheck,
      },
      {
        title: "Schedules routine work",
        description: "Non-emergency jobs like water heater installs and fixture repairs book directly into your calendar.",
        icon: CalendarCheck,
      },
    ],
    painPoints: [
      "Emergency calls come at 3 AM when no one is awake to answer",
      "Techs are on jobs and cannot answer the phone",
      "Customers call the next plumber when you do not pick up",
      "Dispatching emergencies requires immediate attention",
    ],
    outcomes: [
      "Every emergency call answered and dispatched instantly",
      "Techs stay focused on jobs while AI handles calls",
      "Win more jobs by responding faster than competitors",
      "Organized schedule with emergencies prioritized properly",
    ],
    playbook: {
      intakeQuestions: [
        "Is this an emergency or a routine service call?",
        "What is the problem? (leak, clog, no hot water, backup, etc.)",
        "Where is the issue located? (kitchen, bathroom, basement, etc.)",
        "What is the service address?",
        "Is there active water damage happening right now?",
      ],
      routingRules: [
        "If active leak, flooding, or sewage backup, dispatch immediately",
        "If no hot water and elderly or infant in home, priority dispatch",
        "If routine maintenance or non-urgent, schedule for next available",
      ],
      afterCallActions: [
        "Send confirmation with tech name and arrival window",
        "Create job ticket with problem details and photos",
        "Notify assigned tech via text with job summary",
      ],
    },
    integrations: [
      "ServiceTitan / Housecall Pro / Jobber",
      "Google Calendar dispatch",
      "QuickBooks / invoicing software",
      "Google Reviews automation (RevuBro)",
    ],
    objections: [
      {
        question: "Can AI properly triage plumbing emergencies?",
        answer: "The AI uses specific questions to identify true emergencies. Active leaks, flooding, and sewage backups trigger immediate dispatch.",
      },
      {
        question: "What if a customer needs troubleshooting help?",
        answer: "The AI can walk through basic steps like shutting off water valves. Complex troubleshooting routes to your tech team.",
      },
      {
        question: "How do you handle after-hours calls?",
        answer: "Emergencies dispatch to on-call tech immediately. Routine calls schedule for next business day with confirmation sent.",
      },
    ],
    examples: [
      {
        title: "Emergency leak dispatched immediately",
        channel: "Call",
        lines: [
          "Agent: Thanks for calling. Is this an emergency or a routine service call?",
          "Customer: Emergency! I have water pouring from my ceiling.",
          "Agent: I understand. Let me get help to you right away. What is your address?",
          "Customer: 789 Maple Drive.",
          "Agent: Got it. Do you know where your main water shutoff is? Turning it off can help stop the damage.",
          "Customer: Yes, I will do that now.",
          "Agent: Perfect. I am dispatching a tech to you now. You will receive a call within 15 minutes with an arrival time. Stay safe.",
        ],
      },
    ],
    trustCards: [
      {
        title: "True emergency triage",
        description: "Urgent calls identified and dispatched immediately.",
      },
      {
        title: "24/7 coverage",
        description: "Never miss a 3 AM emergency call again.",
      },
      {
        title: "Tech notifications",
        description: "Your team gets instant alerts with job details.",
      },
    ],
  },
  {
    name: "Pressure Washing",
    slug: "pressure-washing",
    icon: Droplets,
    category: "Home Services",
    tagline: "Quote driveways and roofs while you're on the ladder.",
    description: "Automate your lead flow so you never have to put down the wand to answer the phone.",
    benefits: ["Square Footage Quoting", "Service Add-ons", "Package Sales"],
    features: ["Google Maps Integration", "Weather Scheduling", "Review Gating"],
    benefitCards: [
      {
        title: "Photo and address for fast estimate",
        description:
          "Collect address, job type, and photos, then reply instantly with a clear estimate range and booking options.",
        icon: MapPin,
      },
      {
        title: "Package builder and upsells",
        description:
          "Driveway, house wash, roof softwash, gutters. Add ons are suggested automatically using your pricing logic.",
        icon: Package,
      },
      {
        title: "Weather aware scheduling",
        description:
          "Books around your availability and can reschedule when weather changes. Keeping your route tight and your customers informed.",
        icon: CloudSun,
      },
    ],
    painPoints: [
      "Leads come in while you are on a ladder or driving. Calls go unanswered",
      "Customers won't share details. You waste time chasing info",
      "Quote requests pile up in SMS and DMs and never get booked",
      "Weather forces reschedules and creates chaos",
    ],
    outcomes: [
      "More quotes turned into booked jobs same day",
      "Cleaner intake: address, surfaces, stains, access notes",
      "Higher average ticket with automatic add ons",
      "Fewer missed calls and faster response time",
    ],
    playbook: {
      intakeQuestions: [
        "What service do you need? (driveway, house wash, roof, deck, commercial)",
        "What is the address?",
        "Approx size or simple option (1 car, 2 car, 3 car driveway)",
        "Any stains? (oil, rust, algae) and any access constraints (gates, backyard)?",
        "Preferred day and time window?",
      ],
      routingRules: [
        "If roof wash, confirm roof material and pitch. Route steep or unsafe to human",
        "If commercial or very large job, route to sales or owner for custom bid",
        "If outside service area, decline or offer referral",
      ],
      afterCallActions: [
        "Send SMS confirmation and prep checklist (pets, water access, gates unlocked)",
        "Request photos if needed for firm quoting",
        "Create CRM record and tag job type and priority",
      ],
    },
    integrations: [
      "Google Maps (address validation)",
      "Google Calendar and Outlook",
      "Jobber, Housecall Pro (or your CRM)",
      "Review request automation (RevuBro)",
    ],
    objections: [
      {
        question: "Can you quote without coming out?",
        answer:
          "Most jobs can be quoted from address and photos with a range, then confirmed quickly before the service. For edge cases, we schedule a fast on site estimate.",
      },
      {
        question: "Do you do roof washing or softwash?",
        answer:
          "Yes. Your agent can explain the process, confirm roof type, and book the right service based on your safety rules.",
      },
      {
        question: "What if the weather changes?",
        answer:
          "The agent can automatically reschedule and message the customer so your schedule stays organized.",
      },
    ],
    examples: [
      {
        title: "Driveway quote to photo request to booked",
        channel: "SMS",
        lines: [
          "Customer: How much to clean a driveway?",
          "Agent: Happy to help. What is the address, and is it 1 car, 2 car, or 3 car?",
          "Customer: 2 car, 123 Main St.",
          "Agent: Great. Most 2 car driveways range $X to $Y depending on staining. If you send a quick photo here, I will confirm and book you.",
          "Customer: (sends photo)",
          "Agent: Perfect. I can schedule you Tuesday 3 to 5 or Thursday 10 to 12. Which works?",
        ],
        note: "Replace $X to $Y with your range or remove pricing entirely.",
      },
      {
        title: "Inbound call to service selection to appointment booked",
        channel: "Call",
        lines: [
          "Agent: Thanks for calling. Is this for a driveway, house wash, roof wash, or commercial?",
          "Customer: House wash.",
          "Agent: Got it. What is the address and is it one story or two story?",
          "Customer: 12 Cedar Ln, two story.",
          "Agent: Perfect. I can get you booked this week. Do you prefer weekday or weekend?",
        ],
      },
    ],
    trustCards: [
      {
        title: "Instant response",
        description: "Every lead gets a reply while you are working. No more voicemail leaks.",
      },
      {
        title: "Your packages",
        description: "It sells your packages and add ons the same way your best closer does.",
      },
      {
        title: "Clean handoff",
        description: "Edge cases route to you with the details already collected.",
      },
    ],
  },
  {
    name: "Real Estate",
    slug: "real-estate",
    icon: Home,
    category: "Finance & Real Estate",
    tagline: "Qualify buyers and book showings instantly.",
    description: "The digital assistant that handles the Zillow flood so you can focus on closings.",
    benefits: ["Buyer Qualification", "Showing Scheduling", "Listing Explainer"],
    features: ["MLS Integration", "Lender Handoff", "Open House Follow-up"],
    benefitCards: [
      {
        title: "Qualifies buyers instantly",
        description: "Ask about pre-approval, timeline, and must-haves so you only show homes to serious, ready buyers.",
        icon: Target,
      },
      {
        title: "Books showings 24/7",
        description: "Buyers browsing Zillow at midnight can schedule showings immediately instead of waiting for your callback.",
        icon: CalendarCheck,
      },
      {
        title: "Answers listing questions",
        description: "Property details, neighborhood info, and availability answered instantly on every listing inquiry.",
        icon: MessageSquare,
      },
    ],
    painPoints: [
      "Zillow and Realtor.com leads expect instant responses",
      "Unqualified buyers waste time on showings that go nowhere",
      "Weekends and evenings are peak inquiry times but you need a break",
      "Following up with every open house visitor is impossible",
    ],
    outcomes: [
      "Respond to portal leads faster than competing agents",
      "Only meet with pre-qualified, motivated buyers",
      "Capture weekend and evening leads automatically",
      "Systematic follow-up converts more open house visitors",
    ],
    playbook: {
      intakeQuestions: [
        "Are you looking to buy, sell, or both?",
        "What area or neighborhoods are you interested in?",
        "What is your price range?",
        "Are you pre-approved for a mortgage?",
        "What is your timeline for buying or selling?",
      ],
      routingRules: [
        "If seller inquiry, route to listing presentation scheduling",
        "If not pre-approved, offer lender partner introduction",
        "If investor or multiple properties, route to investment specialist",
      ],
      afterCallActions: [
        "Send showing confirmation with property address and your contact",
        "Add to CRM with search criteria, pre-approval status, and timeline",
        "Trigger property match alerts based on their criteria",
      ],
    },
    integrations: [
      "CRM (Follow Up Boss, KVCore, Chime, LionDesk)",
      "MLS and listing platforms",
      "Showing scheduling (ShowingTime, Calendly)",
      "Lender partner systems for warm handoffs",
    ],
    objections: [
      {
        question: "Will buyers feel like they are talking to a robot?",
        answer: "The AI sounds natural and helpful. Most buyers appreciate the instant response and easy scheduling experience.",
      },
      {
        question: "What about complex buyer questions?",
        answer: "The AI handles common questions. Specific property or negotiation questions route to you with full context.",
      },
      {
        question: "Can it handle seller inquiries too?",
        answer: "Yes. Seller leads are qualified and routed to your listing presentation booking flow.",
      },
    ],
    examples: [
      {
        title: "Zillow lead to showing booked",
        channel: "SMS",
        lines: [
          "Customer: Is the house on Oak Street still available?",
          "Agent: Yes, 123 Oak Street is still available! Are you currently working with a real estate agent?",
          "Customer: No, not yet.",
          "Agent: Perfect, I would be happy to help. Are you pre-approved for a mortgage?",
          "Customer: Yes, I am pre-approved up to 400k.",
          "Agent: Great. Would you like to schedule a showing? I have availability tomorrow at 2pm or Saturday at 11am.",
          "Customer: Saturday works.",
          "Agent: You are confirmed for Saturday at 11am at 123 Oak Street. I will send you the details and my contact info. See you then!",
        ],
      },
    ],
    trustCards: [
      {
        title: "Speed to lead",
        description: "Respond to portal leads faster than any competitor.",
      },
      {
        title: "Qualified showings",
        description: "Only meet with pre-approved, motivated buyers.",
      },
      {
        title: "Lender handoffs",
        description: "Non-approved buyers connected to your lending partners.",
      },
    ],
  },
  {
    name: "Roofing",
    slug: "roofing",
    icon: Hammer,
    category: "Home Services",
    tagline: "Storm damage response at lightning speed.",
    description: "Capture the surge of leads after a storm before your competitors can even pick up.",
    benefits: ["Claim Assistance", "Inspection Booking", "Material Selection"],
    features: ["Satellite Measurements", "Permit Tracking", "Drone Integration"],
    benefitCards: [
      {
        title: "Captures storm surge leads",
        description: "When storms hit, phones explode. AI handles the flood and books inspections while competitors send calls to voicemail.",
        icon: PhoneCall,
      },
      {
        title: "Books free inspections",
        description: "Homeowners schedule roof inspections instantly, before they call three other roofers.",
        icon: CalendarCheck,
      },
      {
        title: "Guides insurance claims",
        description: "Walk homeowners through the claims process so they arrive at inspections informed and ready to move forward.",
        icon: ClipboardCheck,
      },
    ],
    painPoints: [
      "Storm hits and 200 calls come in at once",
      "Homeowners call multiple roofers and go with whoever answers",
      "Crews are busy with repairs and cannot answer phones",
      "Insurance claim questions require lengthy explanations",
    ],
    outcomes: [
      "Handle storm surge volume without missing leads",
      "Win more jobs by responding first",
      "Crews stay productive while AI books inspections",
      "Homeowners arrive educated on the claims process",
    ],
    playbook: {
      intakeQuestions: [
        "Is this for storm damage or a routine roof issue?",
        "What type of damage are you seeing? (missing shingles, leaks, hail damage, fallen tree)",
        "What is the property address?",
        "Do you have a homeowners insurance policy?",
        "Would you like to schedule a free inspection?",
      ],
      routingRules: [
        "If active leak into home, priority dispatch for tarp service",
        "If commercial property, route to commercial division",
        "If asking about financing, collect info for finance team follow-up",
      ],
      afterCallActions: [
        "Send inspection confirmation with what to expect and insurance tips",
        "Add to CRM with damage type, insurance status, and address",
        "Trigger pre-inspection email with documentation checklist",
      ],
    },
    integrations: [
      "Roofing CRM (JobNimbus, AccuLynx, RoofSnap)",
      "Satellite measurement tools (EagleView, Hover)",
      "Calendar scheduling",
      "Google Reviews automation (RevuBro)",
    ],
    objections: [
      {
        question: "How do you handle the storm call surge?",
        answer: "AI scales instantly. Whether 10 calls or 200, every homeowner gets an immediate response and inspection booking.",
      },
      {
        question: "Can AI help with insurance claims?",
        answer: "The AI provides general guidance on the claims process and what to document. Specific claim questions route to your team.",
      },
      {
        question: "What about emergency leak situations?",
        answer: "Active leaks are identified immediately and can trigger emergency tarp service dispatch.",
      },
    ],
    examples: [
      {
        title: "Storm damage to inspection booked",
        channel: "Call",
        lines: [
          "Agent: Thanks for calling. Is this regarding storm damage or another roof issue?",
          "Customer: We had that hailstorm last night and I think my roof got damaged.",
          "Agent: I understand. A lot of homeowners in your area are seeing damage. What is your address?",
          "Customer: 456 Elm Street.",
          "Agent: Got it. Do you have homeowners insurance?",
          "Customer: Yes.",
          "Agent: Perfect. I can schedule a free inspection. We will document any damage and help you with the insurance claim process. I have openings tomorrow at 9am or 2pm. Which works better?",
        ],
      },
    ],
    trustCards: [
      {
        title: "Storm surge ready",
        description: "Handle hundreds of calls without missing a lead.",
      },
      {
        title: "Insurance guidance",
        description: "Homeowners arrive informed about the claims process.",
      },
      {
        title: "Fast inspections",
        description: "Book before competitors even return their calls.",
      },
    ],
  },
  {
    name: "Solar",
    slug: "solar",
    icon: Sun,
    category: "Home Services",
    tagline: "Qualify roof suitability and set consultations.",
    description: "Stop wasting time on low-sunlight roofs. Let AI filter the best leads for your closers.",
    benefits: ["Utility Bill Analysis", "Savings Estimation", "Consultation Booking"],
    features: ["Sunlight Analysis", "Finance Qualification", "Incentive Guide"],
    benefitCards: [
      {
        title: "Qualifies roof and utility",
        description: "Collect address, utility bill, and roof details to filter out poor-fit homes before your closers spend time.",
        icon: Target,
      },
      {
        title: "Explains savings potential",
        description: "Walk homeowners through estimated savings and incentives so they arrive at consultations motivated to buy.",
        icon: MessageSquare,
      },
      {
        title: "Books qualified appointments",
        description: "Only schedule consultations with homeowners who have good roof exposure, ownership, and genuine interest.",
        icon: CalendarCheck,
      },
    ],
    painPoints: [
      "Sales reps waste time on shaded roofs and renters",
      "Homeowners have questions about savings before committing to a consultation",
      "Lead quality from online sources varies wildly",
      "Explaining incentives and financing takes time on every call",
    ],
    outcomes: [
      "Higher close rates from better qualified appointments",
      "Educated homeowners ready to make decisions",
      "Filter out renters, shaded roofs, and poor credit early",
      "Sales reps focus on closing, not qualifying",
    ],
    playbook: {
      intakeQuestions: [
        "Do you own your home?",
        "What is your address?",
        "What is your average monthly electric bill?",
        "Is your roof less than 15 years old?",
        "Are you interested in purchasing or financing?",
      ],
      routingRules: [
        "If renter, explain they need to own and offer to follow up when they buy",
        "If utility bill under threshold, explain minimum requirements",
        "If interested in battery storage, route to premium consultation",
      ],
      afterCallActions: [
        "Send consultation confirmation with savings estimate preview",
        "Add to CRM with address, utility cost, roof age, and finance preference",
        "Trigger pre-consultation email with incentive information",
      ],
    },
    integrations: [
      "Solar CRM (Salesforce, EnergySage, SolarNexus)",
      "Proposal software (Aurora, OpenSolar)",
      "Calendar scheduling",
      "Credit pre-qualification tools",
    ],
    objections: [
      {
        question: "How do you know if a roof is suitable?",
        answer: "The AI collects address and basic roof info. Your team verifies with satellite imagery before the consultation.",
      },
      {
        question: "Can AI explain complex financing?",
        answer: "The AI covers basics like loan vs lease and incentives. Detailed financing discussions happen with your sales team.",
      },
      {
        question: "What about renters who inquire?",
        answer: "Renters are politely informed they need to own their home and can be added to a nurture list for future follow-up.",
      },
    ],
    examples: [
      {
        title: "Solar inquiry qualified and booked",
        channel: "Call",
        lines: [
          "Agent: Thanks for your interest in solar. First, do you own your home?",
          "Customer: Yes, I do.",
          "Agent: Great. What is your address?",
          "Customer: 123 Sunny Lane.",
          "Agent: Perfect. And what is your average monthly electric bill?",
          "Customer: Around $250.",
          "Agent: Excellent, that is a great candidate for solar savings. Is your roof less than 15 years old?",
          "Customer: Yes, we replaced it 5 years ago.",
          "Agent: Wonderful. I can schedule a free consultation where we will show you exactly how much you could save. I have openings Thursday at 10am or Saturday at 1pm. Which works better?",
        ],
      },
    ],
    trustCards: [
      {
        title: "Pre-qualified leads",
        description: "Only meet with homeowners who are a good fit.",
      },
      {
        title: "Savings education",
        description: "Homeowners arrive understanding the value proposition.",
      },
      {
        title: "Higher close rates",
        description: "Better appointments mean more deals closed.",
      },
    ],
  },
  {
    name: "Weight Loss",
    slug: "weight-loss",
    icon: Scale,
    category: "Health & Wellness",
    tagline: "Book consultations and track progress 24/7.",
    description: "Support your clients and capture new leads with specialized health-focused AI.",
    benefits: ["Program Enrollment", "Support Triage", "Coach Booking"],
    features: ["BMI Calculator", "Nutrition Guide", "Progress Sync"],
    benefitCards: [
      {
        title: "Books consultations 24/7",
        description: "Capture motivated prospects at 2am when they decide to make a change. Schedule before the motivation fades.",
        icon: CalendarCheck,
      },
      {
        title: "Answers program questions",
        description: "Explain pricing, what is included, and expected results so prospects arrive ready to enroll.",
        icon: MessageSquare,
      },
      {
        title: "Supports current clients",
        description: "Handle check-ins, answer common questions, and route concerns to coaches without overwhelming your team.",
        icon: Heart,
      },
    ],
    painPoints: [
      "Prospects inquire late at night when motivation strikes",
      "Staff spends hours explaining program details on every call",
      "Current clients need support but coaches are in sessions",
      "Following up with leads who did not enroll takes time",
    ],
    outcomes: [
      "Capture motivated prospects whenever they reach out",
      "Educated prospects who are ready to commit",
      "Clients feel supported even between coaching sessions",
      "Consistent follow-up converts more inquiries to enrollments",
    ],
    playbook: {
      intakeQuestions: [
        "What are your health and weight loss goals?",
        "Have you tried weight loss programs before?",
        "Do you have any health conditions we should know about?",
        "What is your timeline for achieving your goals?",
        "Would you like to schedule a consultation to learn about our program?",
      ],
      routingRules: [
        "If mentions medical condition or medication, route to clinical staff",
        "If existing client with concern, route to assigned coach",
        "If asking about specific medications like Ozempic, route to medical team",
      ],
      afterCallActions: [
        "Send consultation confirmation with what to expect",
        "Add to CRM with goals, history, and health notes",
        "Trigger pre-consultation email with success stories and program overview",
      ],
    },
    integrations: [
      "Practice management software",
      "CRM (GoHighLevel, HubSpot)",
      "Payment processing for program enrollment",
      "Google Reviews automation (RevuBro)",
    ],
    objections: [
      {
        question: "Can AI handle sensitive health discussions?",
        answer: "The AI gathers basic health info professionally. Medical questions and concerns route to your clinical team.",
      },
      {
        question: "What about clients on medication programs?",
        answer: "Medication-related inquiries are flagged and routed to your medical staff immediately.",
      },
      {
        question: "How do you handle existing client questions?",
        answer: "Current clients can get answers to common questions 24/7. Specific concerns route to their assigned coach.",
      },
    ],
    examples: [
      {
        title: "Late night inquiry to consultation booked",
        channel: "SMS",
        lines: [
          "Customer: How much does your weight loss program cost?",
          "Agent: Great question! Our programs range from $199 to $499 per month depending on the level of coaching and support. What are your weight loss goals?",
          "Customer: I want to lose about 40 pounds.",
          "Agent: That is absolutely achievable with the right support. Have you tried weight loss programs before?",
          "Customer: Yes but I always gain it back.",
          "Agent: That is exactly what our program addresses. We focus on sustainable habits, not quick fixes. Would you like to schedule a free consultation to learn how we can help you succeed long-term?",
          "Customer: Yes, that sounds good.",
          "Agent: Perfect. I have openings tomorrow at 6pm or Saturday at 10am. Which works better?",
        ],
      },
    ],
    trustCards: [
      {
        title: "24/7 availability",
        description: "Capture motivated prospects whenever inspiration strikes.",
      },
      {
        title: "Sensitive handling",
        description: "Health topics handled with care and professionalism.",
      },
      {
        title: "Client support",
        description: "Current clients feel supported between sessions.",
      },
    ],
  }
];
