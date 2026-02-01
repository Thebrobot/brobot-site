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
  type LucideIcon
} from "lucide-react";

export interface Industry {
  name: string;
  slug: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  benefits: string[];
  features: string[];
}

export const industries: Industry[] = [
  {
    name: "Business Coaching",
    slug: "business-coaching",
    icon: Briefcase,
    tagline: "Scale your coaching business without the scheduling headache.",
    description: "Automate lead qualification and booking so you can focus on your clients, not your calendar.",
    benefits: ["24/7 Lead Response", "Instant Discovery Calls", "Automated Follow-ups"],
    features: ["Qualification Engine", "Calendar Sync", "CRM Integration"]
  },
  {
    name: "Car Detailing",
    slug: "car-detailing",
    icon: Car,
    tagline: "Book high-ticket ceramic coatings while you work.",
    description: "Don't let dirty hands stop you from closing deals. Brobot handles every inquiry instantly.",
    benefits: ["Instant Quote Assistance", "Service Scheduling", "Review Automation"],
    features: ["Image Upload Support", "Deposit Handling", "Reminder System"]
  },
  {
    name: "Credit Repair",
    slug: "credit-repair",
    icon: CreditCard,
    tagline: "Qualify applicants and collect documents 24/7.",
    description: "Speed up the onboarding process by letting AI handle the initial consultation and data gathering.",
    benefits: ["Document Collection", "Lead Scoring", "Instant Status Updates"],
    features: ["Secure Data Handling", "Process Automation", "Multi-channel Outreach"]
  },
  {
    name: "Dentist",
    slug: "dentist",
    icon: Stethoscope,
    tagline: "Fill your chair without overwhelming your front desk.",
    description: "Automate appointment requests and answer common patient questions instantly.",
    benefits: ["Reduced No-shows", "Emergency Triage", "Insurance Verification"],
    features: ["Patient Portal Sync", "HIPAA Compliant Comms", "Recall Automation"]
  },
  {
    name: "Electrician",
    slug: "electrician",
    icon: Zap,
    tagline: "Quote and dispatch while you're on the job.",
    description: "Stop losing jobs to the 'next guy' because you couldn't pick up the phone.",
    benefits: ["Instant Dispatching", "Emergency Call Handling", "Project Quoting"],
    features: ["Location Verification", "Price Estimator", "Tech Notification"]
  },
  {
    name: "Events",
    slug: "events",
    icon: Calendar,
    tagline: "Manage inquiries for weddings and corporate events seamlessly.",
    description: "Handle the flood of weekend inquiries without sacrificing your personal time.",
    benefits: ["Venue Availability Check", "Package Explainer", "Booking Coordination"],
    features: ["Date Selector", "Capacity Filter", "Vendor Management"]
  },
  {
    name: "Financial Planning",
    slug: "financial-planning",
    icon: PiggyBank,
    tagline: "Qualify high-net-worth leads with professional AI.",
    description: "Ensure every potential client receives a premium, instant response that reflects your firm's standards.",
    benefits: ["Asset Qualification", "Discovery Call Booking", "Compliance Guardrails"],
    features: ["Sophisticated Language", "Meeting Prep", "Data Enrichment"]
  },
  {
    name: "General Contractor Bot",
    slug: "general-contractor",
    icon: HardHat,
    tagline: "The digital foreman that never sleeps.",
    description: "Manage project inquiries, subcontractor updates, and client check-ins automatically.",
    benefits: ["Project In-take", "Subcontractor Routing", "Status Reporting"],
    features: ["File Upload", "Timeline Tracking", "Multi-Project Management"]
  },
  {
    name: "Gym / Fitness",
    slug: "gym-fitness",
    icon: Dumbbell,
    tagline: "Sign up members while they're most motivated.",
    description: "Answer membership questions and book tours at 2 AM when the motivation hits.",
    benefits: ["Tour Scheduling", "Class Registration", "Membership Sales"],
    features: ["Dues Handling", "Waiver Distribution", "Referral Tracking"]
  },
  {
    name: "HVAC",
    slug: "hvac",
    icon: Thermometer,
    tagline: "Master the summer rush with automated dispatch.",
    description: "Handle emergency calls and routine maintenance bookings without a massive call center.",
    benefits: ["Emergency Routing", "Maintenance Reminders", "Repair Quoting"],
    features: ["Unit Diagnostics", "Geo-Fenced Dispatch", "Warranty Lookup"]
  },
  {
    name: "Junk Removal",
    slug: "junk-removal",
    icon: Trash2,
    tagline: "Close jobs faster with instant photo-to-quote.",
    description: "Let AI estimate load sizes and book the truck while you're on the road.",
    benefits: ["Visual Estimating", "Truck Scheduling", "Review Boosting"],
    features: ["MMS Integration", "Volume Calculator", "Dynamic Pricing"]
  },
  {
    name: "Life Insurance",
    slug: "life-insurance",
    icon: ShieldCheck,
    tagline: "Scale your agency with 24/7 lead qualification.",
    description: "Qualify prospects and set appointments so your agents only talk to ready-to-buy clients.",
    benefits: ["Policy Qualification", "Agent Assignment", "E-App Integration"],
    features: ["Health Screening", "Quote Comparison", "Beneficiary Updates"]
  },
  {
    name: "Med Spa",
    slug: "med-spa",
    icon: Sparkles,
    tagline: "Book consultations for premium aesthetic treatments.",
    description: "Handle complex inquiries about treatments and availability with specialized AI.",
    benefits: ["Pre-consult Qualification", "Package Upselling", "Cancellation Filling"],
    features: ["Treatment Guide", "Provider Sync", "Follow-up Sequences"]
  },
  {
    name: "Mortgage",
    slug: "mortgage",
    icon: Home,
    tagline: "Speed up the pipeline with instant pre-qual support.",
    description: "Gather initial data and answer rate questions to keep your pipeline moving faster than the bank.",
    benefits: ["Pre-qual Data Collection", "Rate Inquiries", "Partner Routing"],
    features: ["Document Upload", "Loan Officer Sync", "Status Portal"]
  },
  {
    name: "Moving Company",
    slug: "moving-company",
    icon: Truck,
    tagline: "Book moves and estimate inventory 24/7.",
    description: "Capture leads during the high-stress moving process with instant, calm, and accurate responses.",
    benefits: ["Inventory Walkthrough", "Booking Deposits", "Claims Assistance"],
    features: ["Route Optimization", "Pack-out Support", "Storage Management"]
  },
  {
    name: "Plumbing",
    slug: "plumbing",
    icon: Droplets,
    tagline: "Handle leaks and emergencies at any hour.",
    description: "The AI dispatcher that stays awake when the pipes burst at 3 AM.",
    benefits: ["Urgent Dispatch", "Water Heater Quoting", "Job Scheduling"],
    features: ["Troubleshooting Guide", "Tech Location", "Invoicing Sync"]
  },
  {
    name: "Pressure Washing",
    slug: "pressure-washing",
    icon: Droplets,
    tagline: "Quote driveways and roofs while you're on the ladder.",
    description: "Automate your lead flow so you never have to put down the wand to answer the phone.",
    benefits: ["Square Footage Quoting", "Service Add-ons", "Package Sales"],
    features: ["Google Maps Integration", "Weather Scheduling", "Review Gating"]
  },
  {
    name: "Real Estate",
    slug: "real-estate",
    icon: Home,
    tagline: "Qualify buyers and book showings instantly.",
    description: "The digital assistant that handles the Zillow flood so you can focus on closings.",
    benefits: ["Buyer Qualification", "Showing Scheduling", "Listing Explainer"],
    features: ["MLS Integration", "Lender Handoff", "Open House Follow-up"]
  },
  {
    name: "Roofing",
    slug: "roofing",
    icon: Hammer,
    tagline: "Storm damage response at lightning speed.",
    description: "Capture the surge of leads after a storm before your competitors can even pick up.",
    benefits: ["Claim Assistance", "Inspection Booking", "Material Selection"],
    features: ["Satellite Measurements", "Permit Tracking", "Drone Integration"]
  },
  {
    name: "Solar",
    slug: "solar",
    icon: Sun,
    tagline: "Qualify roof suitability and set consultations.",
    description: "Stop wasting time on low-sunlight roofs. Let AI filter the best leads for your closers.",
    benefits: ["Utility Bill Analysis", "Savings Estimation", "Consultation Booking"],
    features: ["Sunlight Analysis", "Finance Qualification", "Incentive Guide"]
  },
  {
    name: "Weight Loss",
    slug: "weight-loss",
    icon: Scale,
    tagline: "Book consultations and track progress 24/7.",
    description: "Support your clients and capture new leads with specialized health-focused AI.",
    benefits: ["Program Enrollment", "Support Triage", "Coach Booking"],
    features: ["BMI Calculator", "Nutrition Guide", "Progress Sync"]
  }
];
