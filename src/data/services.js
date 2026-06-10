import {
  Car,
  Bike,
  Heart,
  ShieldCheck,
  Truck,
  RefreshCw,
  HandCoins,
  ArrowLeftRight,
  CarFront,
  Banknote,
  FileText,
  Stamp,
  XCircle,
  Copy,
  FilePlus,
  MapPin,
  AlertCircle,
} from "lucide-react";

export const serviceCategories = [
  { id: "insurance", label: "Insurance Services" },
  { id: "loan", label: "Loan Services" },
  { id: "rto", label: "RTO & RC Services" },
];

export const services = {
  insurance: [
    {
      icon: Car,
      title: "Car Insurance",
      desc: "Comprehensive and third-party car insurance with best premium rates from top insurers.",
    },
    {
      icon: Bike,
      title: "Bike Insurance",
      desc: "Affordable two-wheeler insurance plans for new and existing bikes.",
    },
    {
      icon: Heart,
      title: "Health Insurance",
      desc: "Health coverage plans for individuals and families with cashless hospitalization.",
    },
    {
      icon: ShieldCheck,
      title: "Life Insurance",
      desc: "Secure your family's future with term plans, endowment policies, and ULIPs.",
    },
    {
      icon: Truck,
      title: "Commercial Vehicle Insurance",
      desc: "Insurance for trucks, tempos, and commercial vehicles with tailored coverage.",
    },
    {
      icon: RefreshCw,
      title: "Renewal Services",
      desc: "Quick policy renewal for all types of insurance before expiry without hassle.",
    },
  ],
  loan: [
    {
      icon: CarFront,
      title: "Vehicle Loan Assistance",
      desc: "Get the best deals on new and used car/bike loans with lowest interest rates.",
    },
    {
      icon: ArrowLeftRight,
      title: "Refinance",
      desc: "Transfer your existing loan to a lower interest rate and save on EMIs.",
    },
    {
      icon: HandCoins,
      title: "Used Car Loan",
      desc: "Easy financing options for pre-owned cars with quick approval process.",
    },
    {
      icon: Banknote,
      title: "Personal Loan Support",
      desc: "Personal loan assistance with minimal documentation and fast disbursal.",
    },
  ],
  rto: [
    {
      icon: FileText,
      title: "RC Transfer",
      desc: "Complete ownership transfer of vehicle RC with proper documentation and verification.",
    },
    {
      icon: Stamp,
      title: "NOC Services",
      desc: "No Objection Certificate from RTO for vehicle transfer between states or owners.",
    },
    {
      icon: XCircle,
      title: "Hypothecation Removal",
      desc: "Remove bank hypothecation from RC after complete loan repayment.",
    },
    {
      icon: Copy,
      title: "Duplicate RC",
      desc: "Get a duplicate RC book/smart card if original is lost, damaged, or stolen.",
    },
    {
      icon: FilePlus,
      title: "New RC Application",
      desc: "Apply for new Registration Certificate for newly purchased vehicles.",
    },
    {
      icon: MapPin,
      title: "Address Change",
      desc: "Update your address on RC when you relocate to a different city or area.",
    },
    {
      icon: AlertCircle,
      title: "Claim Support",
      desc: "End-to-end assistance for insurance claims — from filing to settlement.",
    },
  ],
};
