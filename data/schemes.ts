import { Scheme } from "../types";

export const ALL_SCHEMES: Scheme[] = [
  {
    id: "pm-kisan",
    title: "PM-Kisan Samman Nidhi",
    description: "Financial assistance to landholding farmer families across the country.",
    benefits: [
      "₹6,000 per year in three equal installments",
      "Direct Benefit Transfer (DBT) to bank accounts",
      "Support for agricultural inputs and domestic needs"
    ],
    eligibilitySummary: "Small and marginal farmers with landholding up to 2 hectares.",
    category: "Central",
    sourceUrl: "https://pmkisan.gov.in/",
    relevanceScore: 95
  },
  {
    id: "ayushman-bharat",
    title: "Ayushman Bharat (PM-JAY)",
    description: "The world's largest health insurance scheme providing free healthcare to the poor.",
    benefits: [
      "₹5 Lakh health cover per family per year",
      "Cashless access to healthcare services",
      "Covers pre-existing diseases and secondary/tertiary care"
    ],
    eligibilitySummary: "Families listed in the SECC 2011 database or low-income households.",
    category: "Central",
    sourceUrl: "https://pmjay.gov.in/",
    relevanceScore: 90
  },
  {
    id: "pmay",
    title: "Pradhan Mantri Awas Yojana (PMAY)",
    description: "Housing for all by providing financial assistance to build or buy a house.",
    benefits: [
      "Subsidy on home loan interest rates",
      "Financial assistance for house construction",
      "Preference for women, SC/ST, and minorities"
    ],
    eligibilitySummary: "Economically Weaker Sections (EWS) and Low Income Groups (LIG).",
    category: "Central",
    sourceUrl: "https://pmay-urban.gov.in/",
    relevanceScore: 85
  },
  {
    id: "sukanya-samriddhi",
    title: "Sukanya Samriddhi Yojana",
    description: "A small deposit scheme for the girl child to meet her education and marriage expenses.",
    benefits: [
      "High interest rates compared to other savings schemes",
      "Tax benefits under Section 80C",
      "Partial withdrawal for higher education"
    ],
    eligibilitySummary: "Parents or legal guardians of a girl child below 10 years of age.",
    category: "Central",
    sourceUrl: "https://www.indiapost.gov.in/",
    relevanceScore: 80
  },
  {
    id: "atal-pension",
    title: "Atal Pension Yojana (APY)",
    description: "A pension scheme for citizens in the unorganized sector.",
    benefits: [
      "Guaranteed minimum pension of ₹1,000 to ₹5,000 per month",
      "Government co-contribution for eligible subscribers",
      "Pension to spouse after the death of the subscriber"
    ],
    eligibilitySummary: "Any Indian citizen between 18 and 40 years of age with a bank account.",
    category: "Central",
    sourceUrl: "https://www.npscra.nsdl.co.in/scheme-details.php",
    relevanceScore: 75
  },
  {
    id: "pm-mudra",
    title: "PM Mudra Yojana",
    description: "Loans up to ₹10 Lakh to non-corporate, non-farm small/micro enterprises.",
    benefits: [
      "No collateral required for loans",
      "Three categories: Shishu, Kishor, and Tarun",
      "Low interest rates for small businesses"
    ],
    eligibilitySummary: "Small business owners, shopkeepers, and micro-enterprises.",
    category: "Central",
    sourceUrl: "https://www.mudra.org.in/",
    relevanceScore: 88
  },
  {
    id: "jan-dhan",
    title: "Jan Dhan Yojana (PMJDY)",
    description: "Financial inclusion program to ensure access to financial services.",
    benefits: [
      "Zero balance savings account",
      "Accident insurance cover up to ₹2 Lakh",
      "Overdraft facility up to ₹10,000"
    ],
    eligibilitySummary: "Any Indian citizen who does not have a bank account.",
    category: "Central",
    sourceUrl: "https://pmjdy.gov.in/",
    relevanceScore: 92
  },
  {
    id: "ujjwala",
    title: "Ujjwala Yojana (PMUY)",
    description: "Providing LPG connections to women from BPL households.",
    benefits: [
      "Free LPG connection",
      "Subsidy on gas cylinders",
      "Promotes clean cooking fuel and health"
    ],
    eligibilitySummary: "Women belonging to BPL households or SC/ST categories.",
    category: "Central",
    sourceUrl: "https://www.pmuy.gov.in/",
    relevanceScore: 82
  },
  {
    id: "mgnrega",
    title: "MGNREGA",
    description: "Guaranteed 100 days of wage employment in a financial year to rural households.",
    benefits: [
      "Right to work guaranteed by law",
      "Unemployment allowance if work is not provided",
      "Creation of durable community assets"
    ],
    eligibilitySummary: "Adult members of rural households willing to do unskilled manual work.",
    category: "Central",
    sourceUrl: "https://nrega.nic.in/",
    relevanceScore: 94
  },
  {
    id: "stand-up-india",
    title: "Stand Up India",
    description: "Promoting entrepreneurship among women and SC/ST communities.",
    benefits: [
      "Bank loans between ₹10 Lakh and ₹1 Crore",
      "Support for setting up greenfield enterprises",
      "Handholding support and training"
    ],
    eligibilitySummary: "SC/ST and women entrepreneurs above 18 years of age.",
    category: "Central",
    sourceUrl: "https://www.standupmitra.in/",
    relevanceScore: 78
  }
];
