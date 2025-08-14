import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SharedNavigation from "@/components/shared-navigation"
import SharedFooter from "@/components/shared-footer"
import Link from "next/link"
import {
  Shield,
  FileText
} from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SharedNavigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-slate-700 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-white text-slate-700 mb-4">
              Legal Information
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Please read these terms carefully before using our commission advance services
            </p>
            <p className="text-sm text-slate-400 mt-4">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-slate max-w-none">

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1" />
       

            <h2>1. About These Terms</h2>
            <p>
              These Terms and Conditions ("Terms") govern your use of commission advance services provided by
              Agents Capital Ltd ("we", "us", "our"). By applying for or using our services, you agree to be
              bound by these Terms.
            </p>

            <h2>2. Our Services</h2>
            <h3>2.1 Commission Advance</h3>
            <p>
              We provide commission advance services to UK estate agents and brokerages, allowing you to
              receive your commission payment immediately upon exchange of contracts rather than waiting
              for completion.
            </p>

            <h3>2.2 Eligibility</h3>
            <p>To be eligible for our services, you must:</p>
            <ul>
              <li>Be a licensed estate agent or brokerage operating in the UK</li>
              <li>Have a confirmed property sale with contracts ready to exchange</li>
              <li>Provide accurate and complete information in your application</li>
              <li>Meet our credit and risk assessment criteria</li>
            </ul>

            <h2>3. Application Process</h2>
            <h3>3.1 Application</h3>
            <p>
              You may apply for commission advance by completing our online application form.
              Applications are subject to our approval process and credit assessment.
            </p>

            <h3>3.2 Information Accuracy</h3>
            <p>
              You warrant that all information provided in your application is true, accurate,
              and complete. Any false or misleading information may result in immediate
              termination of services.
            </p>

            <h2>4. Fees and Charges</h2>
            <h3>4.1 Commission Fee</h3>
            <p>
              Our fees start from 9% of the commission amount for our advance service.
              This fee is deducted from your commission before payment.
            </p>

            <h3>4.2 No Additional Fees</h3>
            <p>
              There are no setup fees, admin charges, monthly subscriptions, or other
              hidden costs. You only pay the commission fee when you use our service.
            </p>

            <h2>5. Payment Terms</h2>
            <h3>5.1 Payment Timing</h3>
            <p>
              Upon exchange of contracts and notification to us, we will transfer your
              commission (less our fee) within 24 hours via bank transfer.
            </p>

            <h3>5.2 Exchange Verification</h3>
            <p>
              You must notify us promptly when exchange occurs. We may require confirmation
              from your solicitor or legal representative for larger transactions.
            </p>

            <h2>6. Risk and Liability</h2>
            <h3>6.1 Deal Completion</h3>
            <p>
              If a property deal fails to complete after exchange, you retain the commission
              advance. This represents the risk transfer that forms part of our service.
            </p>

            <h3>6.2 Limitation of Liability</h3>
            <p>
              Our liability is limited to the amount of commission advanced. We are not
              liable for any consequential, indirect, or punitive damages.
            </p>

            <h2>7. Data Protection</h2>
            <h3>7.1 Privacy</h3>
            <p>
              We process your personal data in accordance with UK GDPR and our Privacy Policy.
              Your information is used solely for providing our services and regulatory compliance.
            </p>

            <h3>7.2 Confidentiality</h3>
            <p>
              Our arrangement with you is completely confidential. We do not disclose details
              of our services to your clients or third parties without your consent.
            </p>

            <h2>8. Regulatory Compliance</h2>
            <h3>8.1 FCA Regulation</h3>
            <p>
              Agents Capital Ltd is authorised and regulated by the Financial Conduct Authority.
              We operate under FCA guidelines and maintain appropriate professional indemnity insurance.
            </p>

            <h3>8.2 Anti-Money Laundering</h3>
            <p>
              We comply with UK anti-money laundering regulations and may require additional
              documentation to verify your identity and source of funds.
            </p>

            <h2>9. Termination</h2>
            <h3>9.1 Termination Rights</h3>
            <p>
              Either party may terminate the service relationship at any time with written notice.
              Termination does not affect existing commission advance arrangements.
            </p>

            <h3>9.2 Immediate Termination</h3>
            <p>
              We may immediately terminate services if you breach these Terms or provide
              false information.
            </p>

            <h2>10. General Provisions</h2>
            <h3>10.1 Governing Law</h3>
            <p>
              These Terms are governed by English law and subject to the exclusive jurisdiction
              of the English courts.
            </p>

            <h3>10.2 Changes to Terms</h3>
            <p>
              We may update these Terms from time to time. Changes will be posted on our website
              and take effect 30 days after publication.
            </p>

            <h3>10.3 Contact Information</h3>
            <p>
              For questions about these Terms, contact us at:
            </p>
            <ul>
              <li>Email: Valentina@agentscapital.co</li>
              <li>Phone: 07368162737</li>
              <li>Post: Unit 1 Syds Quay, Eel Pie Island, Twickenham TW1 3DY</li>
            </ul>

            <div className="border-t my-8 pt-8">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Additional Documents
                </h3>
                <div className="space-y-2">
                  <p>
                    <Link href="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link> - How we collect, use and protect your personal data
                  </p>
                  <p>
                    <Link href="/help" className="text-blue-600 hover:underline">
                      Help Centre
                    </Link> - Frequently asked questions and support
                  </p>
                  <p>
                    <Link href="/contact" className="text-blue-600 hover:underline">
                      Contact Us
                    </Link> - Get in touch with our team
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}
