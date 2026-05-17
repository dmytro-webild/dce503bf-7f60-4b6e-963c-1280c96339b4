"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="largeSmall"
        background="noise"
        cardStyle="layered-gradient"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Capabilities",
          id: "features",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Oilex"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Premium Soybean Oil from Seed to Supply"
      description="Oilex delivers refined, foodgrade soybean oil with certified quality and reliable bulk supply for manufacturers and distributors worldwide."
      buttons={[
        {
          text: "Request a Quote",
          href: "#contact",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=d11jvf&_wi=1"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/researchers-biotechnology-laboratory-with-plants_23-2148776130.jpg",
          alt: "Research team representative",
        },
        {
          src: "http://img.b2bpic.net/free-photo/closeup-chemist-scientist-injecting-nature-strawberry-with-chemical-pesticides_482257-4563.jpg",
          alt: "Quality control scientist",
        },
        {
          src: "http://img.b2bpic.net/free-photo/closeup-biologist-woman-taking-strawberry-with-tweezers-analyzing-genetic-mutation-fruits_482257-4094.jpg",
          alt: "Field inspection officer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/researcher-biotechnology-laboratory-with-test-tube_23-2148776129.jpg",
          alt: "Laboratory lead",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-orange-injected-with-chemicals_23-2148536500.jpg",
          alt: "Supply chain executive",
        },
      ]}
      avatarText="Trusted by 500+ global industry leaders"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Trusted Partner in Agricultural Supply"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "1",
          label: "Quality",
          title: "Certified Extraction",
          items: [
            "ISO 22000 Certified",
            "Non-GMO Verification",
            "Traceability Documentation",
          ],
        },
        {
          id: "2",
          label: "Capacity",
          title: "Industrial Scale",
          items: [
            "10,000 MT Monthly Capacity",
            "Global Logistics Support",
            "Bulk Storage Availability",
          ],
        },
        {
          id: "3",
          label: "Refining",
          title: "Advanced Purification",
          items: [
            "Advanced Filtration",
            "Low Impurity Levels",
            "Standardized Specifications",
          ],
        },
      ]}
      title="Our Extraction Capabilities"
      description="State-of-the-art facilities and stringent quality protocols."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",
          value: "25+",
          description: "Global Markets Served",
        },
        {
          id: "2",
          value: "120K+",
          description: "Metric Tons Exported Annually",
        },
        {
          id: "3",
          value: "99.9%",
          description: "Order Fulfillment Rate",
        },
      ]}
      title="Industry Performance"
      description="Quantifiable commitment to our partners."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          brand: "Oilex",
          name: "Refined Soybean Oil (Food Grade)",
          price: "Request Quote",
          rating: 5,
          reviewCount: "500+",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=r3csws&_wi=1",
        },
        {
          id: "2",
          brand: "Oilex",
          name: "Organic Soybean Oil",
          price: "Request Quote",
          rating: 5,
          reviewCount: "200+",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=jc59j6&_wi=1",
        },
        {
          id: "3",
          brand: "Oilex",
          name: "Crude Soybean Oil",
          price: "Request Quote",
          rating: 4,
          reviewCount: "150+",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=o5vi0o&_wi=1",
        },
        {
          id: "4",
          brand: "Oilex",
          name: "High Oleic Blend",
          price: "Request Quote",
          rating: 5,
          reviewCount: "300+",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=vvev1g",
        },
        {
          id: "5",
          brand: "Oilex",
          name: "Industrial Soybean Extract",
          price: "Request Quote",
          rating: 4,
          reviewCount: "80+",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=sy07ye",
        },
        {
          id: "6",
          brand: "Oilex",
          name: "Custom Specification Oil",
          price: "Request Quote",
          rating: 5,
          reviewCount: "120+",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-researchers-laboratory-with-safety-glasses_23-2148776168.jpg",
        },
      ]}
      title="Our Refined Product Portfolio"
      description="Meeting the diverse requirements of food manufacturing and wholesale."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Alex Rivers",
          date: "Oct 2023",
          title: "Procurement Manager",
          quote: "Oilex has transformed our supply chain consistency.",
          tag: "Global Logistics",
          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=qb4st7",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=d11jvf&_wi=2",
          imageAlt: "portrait professional logistics manager",
        },
        {
          id: "2",
          name: "Maria Garcia",
          date: "Nov 2023",
          title: "Manufacturing Lead",
          quote: "Unparalleled certification transparency, essential for our food brand.",
          tag: "Manufacturing",
          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=zzvg8l",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=p1lf7v",
          imageAlt: "portrait professional logistics manager",
        },
        {
          id: "3",
          name: "Sam Thorne",
          date: "Dec 2023",
          title: "VP of Operations",
          quote: "Top-tier quality levels across every bulk shipment.",
          tag: "Wholesale",
          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=gcydwz",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=r3csws&_wi=2",
          imageAlt: "portrait professional logistics manager",
        },
        {
          id: "4",
          name: "Julie Kim",
          date: "Jan 2024",
          title: "Brand Founder",
          quote: "Consistent, reliable, and professional every single time.",
          tag: "CPG",
          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=66zty8",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=jc59j6&_wi=2",
          imageAlt: "portrait professional logistics manager",
        },
        {
          id: "5",
          name: "David Wu",
          date: "Feb 2024",
          title: "Distributor",
          quote: "Oilex quality standards are the benchmark of our sector.",
          tag: "Distributor",
          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=nj8fo3",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=o5vi0o&_wi=2",
          imageAlt: "portrait professional logistics manager",
        },
      ]}
      title="Client Perspectives"
      description="Trusted by manufacturers worldwide."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "What certifications does Oilex hold?",
          content: "We are ISO 22000, HACCP, and Kosher certified, ensuring rigorous food safety compliance.",
        },
        {
          id: "2",
          title: "Do you provide international bulk shipping?",
          content: "Yes, we ship via sea freight to over 25 countries worldwide with robust export documentation.",
        },
        {
          id: "3",
          title: "How can I request technical specifications?",
          content: "Our procurement team provides full documentation, COAs, and purity data per batch upon inquiry.",
        },
      ]}
      title="Common Questions"
      description="Information on our supply operations."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Contact Us"
      title="Request a Quote"
      description="Ready to discuss your supply needs? Get a custom quote tailored to your volume requirements."
      buttons={[
        {
          text: "Contact Sales",
          href: "mailto:sales@oilex.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Oilex"
      columns={[
        {
          title: "Resources",
          items: [
            {
              label: "Quality Certs",
              href: "#",
            },
            {
              label: "Logistics",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Oilex Refinery. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
