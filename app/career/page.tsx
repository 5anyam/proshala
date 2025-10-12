import { Metadata } from "next";
import { Briefcase, Users, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { JobCard } from "@/components/ui/job-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Career Opportunities - Join CSPKIndia Team',
  description: 'Explore exciting career opportunities at CSPKIndia. Join our team of Company Secretary professionals and grow your career in corporate compliance and law.',
  keywords: 'CS careers, company secretary jobs, compliance careers, corporate law jobs, legal careers India',
};

// // Sample job data
// const jobs = [
//   {
//     title: "Senior Company Secretary",
//     department: "Compliance",
//     location: "Mumbai",
//     type: "Full-time",
//     experience: "5-8 years",
//     salary: "₹8-12 LPA",
//     description: "Lead our compliance team and handle complex corporate matters including NCLT proceedings, mergers, and regulatory filings. Perfect opportunity for experienced CS professionals.",
//     slug: "senior-company-secretary",
//     requirements: [
//       "Qualified Company Secretary (CS) with valid COP",
//       "5+ years experience in corporate compliance",
//       "Experience with NCLT matters and complex filings",
//       "Strong knowledge of Companies Act and SEBI regulations",
//       "Excellent communication and leadership skills"
//     ],
//     responsibilities: [
//       "Handle complex ROC filings and annual compliance",
//       "Manage NCLT matters and court proceedings",
//       "Lead team of junior CS professionals",
//       "Client relationship management",
//       "Ensure timely completion of all statutory requirements"
//     ]
//   },
//   {
//     title: "Junior Company Secretary",
//     department: "Registration Services",
//     location: "Mumbai",
//     type: "Full-time", 
//     experience: "1-3 years",
//     salary: "₹4-6 LPA",
//     description: "Join our registration team to assist with company incorporations, LLP registrations, and basic compliance work. Great opportunity for freshers and junior CS professionals.",
//     slug: "junior-company-secretary",
//     requirements: [
//       "Company Secretary qualification (CS) or pursuing final",
//       "1-3 years relevant experience",
//       "Knowledge of company incorporation process",
//       "Proficiency in MCA portal and ROC procedures",
//       "Strong attention to detail"
//     ],
//     responsibilities: [
//       "Assist in company and LLP registrations",
//       "Prepare incorporation documents",
//       "Handle basic ROC filings",
//       "Client documentation and follow-up",
//       "Support senior team members"
//     ]
//   },
//   {
//     title: "Legal Associate - IPR",
//     department: "Intellectual Property",
//     location: "Mumbai", 
//     type: "Full-time",
//     experience: "2-4 years",
//     salary: "₹5-8 LPA",
//     description: "Specialize in trademark registrations, patent filings, and intellectual property matters. Handle client portfolios and ensure timely renewals and prosecutions.",
//     slug: "legal-associate-ipr",
//     requirements: [
//       "Law degree (LLB) or equivalent qualification",
//       "2+ years experience in IPR/trademark matters",
//       "Knowledge of trademark and patent procedures",
//       "Experience with IP office portals",
//       "Good research and analytical skills"
//     ],
//     responsibilities: [
//       "Handle trademark search and registration",
//       "Manage patent filing process",
//       "Client consultation on IP matters",
//       "Prosecution and renewal of IP rights",
//       "Maintain IP databases and records"
//     ]
//   },
//   {
//     title: "Compliance Executive",
//     department: "Annual Compliance",
//     location: "Mumbai",
//     type: "Full-time",
//     experience: "1-2 years",
//     salary: "₹3-5 LPA", 
//     description: "Support our compliance team with annual filings, statutory returns, and regulatory submissions. Ideal for candidates looking to build expertise in corporate compliance.",
//     slug: "compliance-executive",
//     requirements: [
//       "Commerce graduate or pursuing professional course",
//       "Basic knowledge of Companies Act and ROC procedures",
//       "Proficiency in MS Office and MCA portal",
//       "Strong organizational skills",
//       "Willingness to learn and grow"
//     ],
//     responsibilities: [
//       "Prepare annual returns and financial statements",
//       "Assist in ROC filings and submissions",
//       "Maintain compliance calendars",
//       "Client communication and updates",
//       "Document management and filing"
//     ]
//   },
//   {
//     title: "Business Development Executive",
//     department: "Sales & Marketing",
//     location: "Mumbai",
//     type: "Full-time",
//     experience: "2-5 years", 
//     salary: "₹4-7 LPA + Incentives",
//     description: "Drive business growth by acquiring new clients and expanding our service offerings. Build relationships with corporates and professionals requiring CS services.",
//     slug: "business-development-executive",
//     requirements: [
//       "Bachelor's degree in Business/Marketing",
//       "2+ years B2B sales experience", 
//       "Understanding of corporate services market",
//       "Excellent communication and presentation skills",
//       "Target-oriented with proven track record"
//     ],
//     responsibilities: [
//       "Generate leads and acquire new clients",
//       "Present CS services to potential customers",
//       "Build and maintain client relationships",
//       "Achieve monthly and quarterly targets",
//       "Market research and competitor analysis"
//     ]
//   },
//   {
//     title: "Content Writer - Legal",
//     department: "Marketing",
//     location: "Mumbai/Remote",
//     type: "Full-time",
//     experience: "1-3 years",
//     salary: "₹3-5 LPA",
//     description: "Create compelling content around CS services, legal updates, and compliance matters. Help build our thought leadership through blogs, articles, and marketing materials.",
//     slug: "content-writer-legal", 
//     requirements: [
//       "English/Journalism degree or Law background",
//       "1+ years content writing experience",
//       "Knowledge of corporate law and compliance",
//       "SEO writing skills",
//       "Creative thinking and research abilities"
//     ],
//     responsibilities: [
//       "Write blogs and articles on CS topics",
//       "Create marketing content and brochures",
//       "Develop web content and service descriptions",
//       "Social media content creation",
//       "Research industry trends and updates"
//     ]
//   }
// ];

const departments = ["All", "Compliance", "Registration Services", "Intellectual Property", "Annual Compliance", "Sales & Marketing", "Marketing"];
const jobTypes = ["All", "Full-time", "Part-time", "Contract", "Internship"];

const stats = [
  { icon: Users, number: "50+", label: "Team Members" },
  { icon: Briefcase, number: "10+", label: "Departments" }, 
  { icon: MapPin, number: "3", label: "Locations" },
  { icon: Clock, number: "24/7", label: "Support" }
];

export default function CareerPage() {
  return (
    <>
      <PageHeader
        title="Join Our Team"
        description="Build your career with India's leading Company Secretary firm. Grow professionally while making a difference."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Career" }
        ]}
      />

      {/* Company Culture */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Work With Us?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At M/s Praveen K & Associates, we believe our people are our greatest asset. 
            We provide a collaborative environment where professionals can grow, learn,
            and make a meaningful impact on businesses across India.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-[#3AA6FF] mr-2">•</span>
                Professional development and continuous learning opportunities
              </li>
              <li className="flex items-start">
                <span className="text-[#3AA6FF] mr-2">•</span>
                Competitive compensation and performance-based incentives
              </li>
              <li className="flex items-start">
                <span className="text-[#3AA6FF] mr-2">•</span>
                Work-life balance with flexible working arrangements
              </li>
              <li className="flex items-start">
                <span className="text-[#3AA6FF] mr-2">•</span>
                Exposure to complex corporate matters and high-profile clients
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
      {/* <Section className="bg-gray-50"> */}
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Openings</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our growing team and take your CS career to the next level
          </p>
        </div> */}

        {/* Filters
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <h3 className="font-medium mb-2">Department</h3>
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <Badge 
                  key={dept}
                  variant={dept === "All" ? "default" : "outline"}
                  className={`cursor-pointer ${
                    dept === "All" 
                      ? "bg-[#3AA6FF] text-white" 
                      : "hover:bg-[#3AA6FF] hover:text-white"
                  }`}
                >
                  {dept}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-medium mb-2">Job Type</h3>
            <div className="flex flex-wrap gap-2">
              {jobTypes.map((type) => (
                <Badge 
                  key={type}
                  variant={type === "All" ? "default" : "outline"}
                  className={`cursor-pointer ${
                    type === "All" 
                      ? "bg-[#3AA6FF] text-white" 
                      : "hover:bg-[#3AA6FF] hover:text-white"
                  }`}
                >
                  {type}
                </Badge>
              ))}
            </div>
          </div>
        </div> */}

        {/* Job Cards
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <JobCard key={job.slug} {...job} />
          ))}
        </div> */}
      {/* </Section> */}

      {/* Application Process */}
      <Section>
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple and transparent hiring process designed to find the best fit
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "1", title: "Apply Online", desc: "Submit your application through our portal with your resume and cover letter" },
            { step: "2", title: "Initial Screening", desc: "Our HR team reviews your application and conducts initial screening" },
            { step: "3", title: "Technical Interview", desc: "Technical assessment by our senior CS professionals" },
            { step: "4", title: "Final Interview", desc: "Final discussion with leadership team and offer negotiation" }
          ].map((process, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                {process.step}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{process.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{process.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Do not See the Right Role?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We are always looking for talented professionals. Send us your resume and we will keep you in mind for future opportunities.
          </p>
          <Button asChild size="lg" className="bg-white text-[#3AA6FF] hover:bg-gray-100">
            <a href="mailto:careers@cspkindia.com?subject=General Application">
              Send Your Resume
            </a>
          </Button>
        </div>
      </Section>
    </>
  );
}