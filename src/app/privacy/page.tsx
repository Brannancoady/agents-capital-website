import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SharedNavigation from "@/components/shared-navigation"
import SharedFooter from "@/components/shared-footer"
import Link from "next/link"
import {
  Shield,
  Lock,
  FileText
} from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SharedNavigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-white-600 to-white-700 text-black py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-white text-black-600 mb-4">
              Data Protection
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-white-100 max-w-2xl mx-auto">
              How we collect, use, and protect your personal information in compliance with UK GDPR
            </p>
            <p className="text-sm text-white-200 mt-4">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-slate max-w-none">

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <Lock className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white-900 mb-2">Your Privacy Matters</h3>
                  <p className="text-white-800">
                    We are committed to protecting your privacy and handling your personal data responsibly.
                    This policy explains how we collect, use, and safeguard your information.
                  </p>
                </div>
              </div>
            </div>

            <h2>1. Who We Are</h2>
            <p>
              Agents Capital Ltd is a UK company that provides commission advance services to estate agents.
              We are registered in England and Wales (Company Number: 12345678) and are authorised and
              regulated by the Financial Conduct Authority.
            </p>

            <p><strong>Data Controller:</strong></p>
            <ul>
              <li>Company: Agents Capital Ltd</li>
              <li>Address: Unit 1 Syds Quay, Eel Pie Island, Twickenham TW1 3DY</li>
              <li>Email: Hello@agentscapital.co </li>
              <li>Phone: 07368162737</li>
            </ul>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>When you apply for our services, we collect:</p>
            <ul>
              <li>Name, email address, and phone number</li>
              <li>Business address and company details</li>
              <li>Estate agent license information</li>
              <li>Bank account details for payments</li>
              <li>Property transaction details</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may collect:</p>
            <ul>
              <li>IP address and browser information</li>
              <li>Pages visited and time spent on site</li>
              <li>Device type and operating system</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <h3>3.1 Providing Our Services</h3>
            <p>We use your personal data to:</p>
            <ul>
              <li>Assess and process commission advance applications</li>
              <li>Verify property transaction details</li>
              <li>Make commission payments to your account</li>
              <li>Provide customer support and account management</li>
              <li>Communicate about your applications and services</li>
            </ul>

            <h3>3.2 Legal and Regulatory Compliance</h3>
            <p>We may use your information to:</p>
            <ul>
              <li>Comply with FCA regulations and reporting requirements</li>
              <li>Conduct anti-money laundering checks</li>
              <li>Respond to legal requests and court orders</li>
              <li>Prevent fraud and protect our business</li>
            </ul>

            <h3>3.3 Marketing (with your consent)</h3>
            <p>With your permission, we may use your contact details to:</p>
            <ul>
              <li>Send updates about our services</li>
              <li>Share relevant industry news and insights</li>
              <li>Invite you to events or webinars</li>
            </ul>

            <h2>4. Legal Basis for Processing</h2>
            <p>We process your personal data based on:</p>
            <ul>
              <li><strong>Contract:</strong> To provide commission advance services you've requested</li>
              <li><strong>Legal obligation:</strong> To comply with FCA regulations and AML requirements</li>
              <li><strong>Legitimate interest:</strong> To operate our business and prevent fraud</li>
              <li><strong>Consent:</strong> For marketing communications (where applicable)</li>
            </ul>

            <h2>5. Information Sharing</h2>
            <h3>5.1 Third-Party Service Providers</h3>
            <p>We may share your data with trusted partners who help us provide our services:</p>
            <ul>
              <li>Payment processors for bank transfers</li>
              <li>Credit reference agencies for risk assessment</li>
              <li>IT service providers for data hosting and security</li>
              <li>Legal and professional advisors</li>
            </ul>

            <h3>5.2 Regulatory Bodies</h3>
            <p>We may share information with:</p>
            <ul>
              <li>Financial Conduct Authority (FCA)</li>
              <li>HM Revenue & Customs (HMRC)</li>
              <li>Law enforcement agencies (when legally required)</li>
            </ul>

            <h3>5.3 What We Don't Share</h3>
            <p>We never:</p>
            <ul>
              <li>Sell your personal data to third parties</li>
              <li>Share your information with your clients or competitors</li>
              <li>Use your data for purposes unrelated to our services</li>
            </ul>

            <h2>6. Data Security</h2>
            <h3>6.1 Security Measures</h3>
            <p>We protect your data using:</p>
            <ul>
              <li>Bank-level encryption for all data transmission</li>
              <li>Secure cloud hosting with regular backups</li>
              <li>Multi-factor authentication for staff access</li>
              <li>Regular security audits and penetration testing</li>
              <li>Staff training on data protection best practices</li>
            </ul>

            <h3>6.2 Data Breach Response</h3>
            <p>
              In the unlikely event of a data breach, we will notify the ICO within 72 hours
              and inform affected individuals if there's a high risk to their rights and freedoms.
            </p>

            <h2>7. Data Retention</h2>
            <p>We retain your personal data for:</p>
            <ul>
              <li><strong>Active clients:</strong> Duration of our business relationship plus 6 years</li>
              <li><strong>Declined applications:</strong> 12 months from application date</li>
              <li><strong>Marketing contacts:</strong> Until you withdraw consent</li>
              <li><strong>Financial records:</strong> 6 years as required by law</li>
            </ul>

            <h2>8. Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your data (in certain circumstances)</li>
              <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Restriction:</strong> Limit how we process your data</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Withdraw consent:</strong> For marketing communications</li>
            </ul>

            <p>To exercise these rights, contact us at Hello@agentscapital.co </p>

            <h2>9. Cookies and Website Analytics</h2>
            <h3>9.1 Cookie Types</h3>
            <p>Our website uses:</p>
            <ul>
              <li><strong>Essential cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics cookies:</strong> To understand how visitors use our site</li>
              <li><strong>Marketing cookies:</strong> To show relevant advertisements (with consent)</li>
            </ul>

            <h3>9.2 Cookie Management</h3>
            <p>
              You can manage cookie preferences through your browser settings or our cookie banner.
              Disabling certain cookies may affect website functionality.
            </p>

            <h2>10. International Transfers</h2>
            <p>
              Your data is primarily processed within the UK. If we need to transfer data outside
              the UK, we ensure appropriate safeguards are in place, such as adequacy decisions
              or standard contractual clauses.
            </p>

            <h2>11. Contact and Complaints</h2>
            <h3>11.1 Contact Our Privacy Team</h3>
            <p>For privacy-related questions or to exercise your rights:</p>
            <ul>
              <li>Email: Hello@agentscapital.co</li>
              <li>Phone: 07368162737</li>
              <li>Post: Privacy Team, Agents Capital Ltd, Unit 1 Syds Quay, Eel Pie Island, Twickenham TW1 3DY</li>
            </ul>

            <h3>11.2 Complaints</h3>
            <p>
              If you're unhappy with how we've handled your data, you can complain to the
              Information Commissioner's Office (ICO):
            </p>
            <ul>
              <li>Website: ico.org.uk</li>
              <li>Phone: 0303 123 1113</li>
              <li>Post: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow SK9 5AF</li>
            </ul>

            <h2>12. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time to reflect changes in our
              practices or legal requirements. We'll notify you of significant changes by
              email or through our website.
            </p>

            <div className="border-t my-8 pt-8">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Related Documents
                </h3>
                <div className="space-y-2">
                  <p>
                    <Link href="/terms" className="text-black bold-600 hover:underline">
                      Terms & Conditions
                    </Link> - Our service terms and legal agreements
                  </p>
                  <p>
                    <Link href="/help" className="text-black bold-600 hover:underline">
                      Help Centre
                    </Link> - Frequently asked questions about data protection
                  </p>
                  <p>
                    <Link href="/contact" className="text-black bold-600 hover:underline">
                      Contact Us
                    </Link> - Get in touch with our privacy team
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
