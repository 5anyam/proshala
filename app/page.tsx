"use client"
import Link from "next/link";
import { ArrowRight, Shield, Clock, Users, CheckCircle, Star, Calendar, TrendingUp, Award, BookOpen, ChevronLeft, ChevronRight, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ServiceCard } from "@/components/ui/service-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { CTA } from "@/components/ui/cta";
import { getFeaturedServices } from "@/lib/data/services";
import { useState, useEffect } from "react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featured_image: string | null;
  author: string;
}

// Hero carousel images - professional CS/business related
const heroImages = [
  {
    id: 1,
    url: "https://5kadvisory.com/wp-content/uploads/2025/06/Accountant-reviewing-financial-data-in-modern-office-1024x683.webp",
    alt: "Modern office building representing professional business services",
    title: "Professional Business Solutions",
    subtitle: "Expert Company Secretary & Compliance Services"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    alt: "Business documents and compliance papers",
    title: "Expert Compliance Services",
    subtitle: "ROC Filing & Annual Returns Made Simple"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    alt: "Professional business meeting and consultation",
    title: "Strategic Business Consulting",
    subtitle: "NCLT Matters & Corporate Advisory"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    alt: "Legal and regulatory documents",
    title: "Legal & Regulatory Expertise",
    subtitle: "IPR Protection & Trademark Registration"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    alt: "Corporate team working together",
    title: "Corporate Advisory Services",
    subtitle: "Comprehensive Business Solutions"
  }
];

// Full Width Professional Carousel Component - Reduced Height
const FullWidthCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? heroImages.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === heroImages.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full h-[60vh] lg:h-[70vh] overflow-hidden">
      {/* Main carousel container */}
      <div 
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {heroImages.map((image) => (
          <div key={image.id} className="w-full h-full flex-shrink-0 relative">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            
            {/* Center content overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                  {image.title}
                </h1>
                <p className="text-xl lg:text-2xl mb-8 opacity-90">
                  {image.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="bg-[#3AA6FF] hover:bg-[#2690E6] text-white font-semibold">
                    <Link href="/services">
                    View All Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Simple Contact Form Component
const SimpleContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', phone: '' });
  };

  return (
    <Section className="bg-[#3AA6FF]">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for expert CS services. We will get back to you within 24 hours.
          </p>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-lg max-w-md mx-auto">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3AA6FF] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-left text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3AA6FF] focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-[#3AA6FF] hover:bg-[#2690E6] text-white font-semibold py-3"
              >
                Request Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4 text-center">
              We respect your privacy. Your information will not be shared.
            </p>
          </form>
        </div>
      </Container>
    </Section>
  );
};

const usps = [
  {
    icon: Shield,
    title: "Expert ROC Compliance",
    description: "Complete ROC filings, annual returns, and statutory compliance with 100% accuracy"
  },
  {
    icon: Clock,
    title: "NCLT Matters",
    description: "Specialized handling of mergers, amalgamations, and revival cases before NCLT"
  },
  {
    icon: Users,
    title: "IPR Protection",
    description: "Comprehensive trademark registration and intellectual property rights services"
  },
  {
    icon: CheckCircle,
    title: "Annual Filings",
    description: "Timely completion of all annual compliance requirements for your business"
  }
];

const firmHighlights = [
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Serving businesses with expert CS services since our establishment"
  },
  {
    icon: TrendingUp,
    title: "500+ Successful Cases",
    description: "Successfully handled diverse compliance and regulatory matters"
  },
  {
    icon: Users,
    title: "Qualified Professionals",
    description: "Team of experienced Company Secretaries and legal experts"
  },
  {
    icon: Shield,
    title: "100% Compliance Rate",
    description: "Maintaining perfect track record in statutory compliances"
  }
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Tech Innovations Pvt Ltd",
    rating: 5,
    testimonial: "CS Praveen Kumar helped us with our company registration and annual compliance. Their team is professional and always delivers on time. Highly recommended for any CS services."
  },
  {
    name: "Priya Sharma",
    company: "Green Earth NGO",
    rating: 5,
    testimonial: "Excellent service for our Section 8 company registration. They guided us through the entire process and made it hassle-free. Very knowledgeable team."
  },
  {
    name: "Amit Patel",
    company: "Digital Solutions LLP",
    rating: 5,
    testimonial: "We've been working with CS Praveen Kumar for our LLP compliance for over 2 years. Their expertise in regulatory matters is outstanding. Great value for money."
  }
];

// Dummy blog posts data
const dummyBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "New Annual Filing Requirements for FY 2024-25",
    excerpt: "Important updates on annual filing requirements and compliance deadlines for companies. Learn about the latest changes in ROC regulations and ensure your business stays compliant.",
    slug: "annual-filing-requirements-2024-25",
    date: "2024-09-15T10:30:00Z",
    featured_image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "CS Praveen Kumar Team"
  },
  {
    id: 2,
    title: "NCLT Procedures: A Complete Guide for Businesses",
    excerpt: "Comprehensive guide to NCLT procedures, including merger applications, revival cases, and compliance requirements. Expert insights from our legal team.",
    slug: "nclt-procedures-complete-guide",
    date: "2024-09-10T14:15:00Z",
    featured_image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "CS Praveen Kumar"
  },
  {
    id: 3,
    title: "Trademark Registration Process Simplified",
    excerpt: "Step-by-step guide to trademark registration in India. Understand the process, required documents, and timelines for successful trademark protection.",
    slug: "trademark-registration-process-simplified",
    date: "2024-09-05T09:45:00Z",
    featured_image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Legal Team"
  }
];

export default function HomePage() {
  const featuredServices = getFeaturedServices();
  const latestBlogPosts = dummyBlogPosts;

  return (
    <>
      {/* Full Width Hero Carousel - Reduced Height */}
      <FullWidthCarousel />

      {/* Website Introduction */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Welcome to CS Praveen Kumar
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Your Trusted Partner for 
                <span className="block text-[#3AA6FF]">Company Secretary Services</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              CS Praveen Kumar is a leading Company Secretary firm providing comprehensive professional services 
              to businesses across India. We specialize in company incorporation, ROC compliance, NCLT matters, 
              intellectual property rights, and corporate advisory services. Our team of qualified CS professionals 
              ensures your business maintains perfect regulatory compliance while you focus on growth.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#3AA6FF] mb-2">500+</div>
                <div className="text-gray-600">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#3AA6FF] mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#3AA6FF] mb-2">100%</div>
                <div className="text-gray-600">Compliance Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#3AA6FF] mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* About Us Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About CS Praveen Kumar
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Established with the vision to provide comprehensive Company Secretary services, CS Praveen Kumar 
              has grown to become one of India trusted CS firms. Our experienced team specializes in 
              company law matters, regulatory compliance, and corporate advisory services, serving clients 
              from diverse industries including manufacturing, technology, healthcare, and financial services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {firmHighlights.map((highlight, index) => (
              <div key={index} className="text-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#3AA6FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end Company Secretary and compliance services tailored to meet 
              your business requirements with precision and expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDesc}
                href={`/services/${service.slug}`}
                category={service.category}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" asChild className="bg-[#3AA6FF] hover:bg-[#2690E6] text-white">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Latest Updates Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest Updates & Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest articles on compliance, regulatory changes, and business insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {latestBlogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {post.featured_image && (
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.featured_image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 hover:text-[#3AA6FF] transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">By {post.author}</span>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-[#3AA6FF] hover:text-[#2690E6] font-semibold text-sm"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" asChild className="border-[#3AA6FF] text-[#3AA6FF] hover:bg-[#3AA6FF] hover:text-white">
              <Link href="/blog">
                <BookOpen className="mr-2 h-5 w-5" />
                View All Articles
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CS Praveen Kumar?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine expertise, experience, and commitment to deliver exceptional CS services 
              that help your business maintain perfect regulatory compliance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map((usp, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <usp.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{usp.title}</h3>
                <p className="text-gray-600 leading-relaxed">{usp.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Client Testimonials */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Read what our satisfied clients have to say about our professional CS services and expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                company={testimonial.company}
                rating={testimonial.rating}
                testimonial={testimonial.testimonial}
              />
            ))}
          </div>
        </Container>
      </Section>
     
    </>
  );
}
