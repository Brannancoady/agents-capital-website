import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SharedNavigation from "@/components/shared-navigation"
import SharedFooter from "@/components/shared-footer"
import Link from "next/link"
import {
  CheckCircle,
  Clock,
  Shield,
  Zap,
  TrendingUp,
  Calculator,
  FileText,
  Users
} from "lucide-react"

export default function CommissionAdvancePage() {
  return (
    <div className="min-h-screen bg-background">
      <SharedNavigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-white text-green-600 mb-4">
              Commission Advance
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Transform Your Cash Flow</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Get immediate access to your commission at exchange, not completion.
              The smart way to manage your property business finances.
            </p>
          </div>
        </div>
      </section>

      {/* What is Commission Advance */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What is Commission Advance?</h2>
              <p className="text-xl text-slate-600">
                Commission advance is a financial service that allows estate agents to access their commission immediately upon exchange of contracts, rather than waiting for completion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Traditional Property Sales</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-semibold">1</span>
                    </div>
                    <span>Property goes under offer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-semibold">2</span>
                    </div>
                    <span>Contracts exchange</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-semibold">3</span>
                    </div>
                    <span className="text-red-600">Wait 2-8+ weeks for completion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-semibold">4</span>
                    </div>
                    <span>Finally receive commission</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">With Agents Capital</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold">1</span>
                    </div>
                    <span>Property goes under offer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold">2</span>
                    </div>
                    <span>Contracts exchange</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Zap className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-green-600 font-semibold">Receive commission within 24 hours!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Commission Advance?</h2>
              <p className="text-xl text-slate-600">
                Immediate benefits for your property business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Improved Cash Flow</CardTitle>
                  <CardDescription>
                    Access your earnings immediately to invest in marketing, lead generation, and business growth
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Reduced Waiting Time</CardTitle>
                  <CardDescription>
                    No more waiting 2-8+ weeks for completion. Get paid within hours of exchange
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Business Growth</CardTitle>
                  <CardDescription>
                    Reinvest your commission immediately into marketing, staff, and expansion opportunities
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Calculator className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle>Predictable Finances</CardTitle>
                  <CardDescription>
                    Plan your finances with certainty, knowing exactly when you'll receive payment
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle>Scale Your Business</CardTitle>
                  <CardDescription>
                    Take on more clients and expand your operations without worrying about cash flow gaps
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle>Simple Process</CardTitle>
                  <CardDescription>
                    Quick application, same-day approval, and funding within 24 hours
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works in Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">How It Works in Detail</h2>
              <p className="text-xl text-slate-600">
                A step-by-step guide to getting your commission advance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-semibold mb-2">Tri-lateral Agreement Signed</h3>
                <p className="text-slate-600 text-sm">Initial agreement between all parties is established and signed</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-semibold mb-2">Partner Agent Completes Form</h3>
                <p className="text-slate-600 text-sm">Agent completes required documentation and returns it to us</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-semibold mb-2">Information Form Issued</h3>
                <p className="text-slate-600 text-sm">Agents Capital issues detailed information form for completion</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4">4</div>
                <h3 className="text-lg font-semibold mb-2">Commission Requested</h3>
                <p className="text-slate-600 text-sm">Partner agent submits request for commission advance</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4">5</div>
                <h3 className="text-lg font-semibold mb-2">E-sign Agreement</h3>
                <p className="text-slate-600 text-sm">Agents Capital issues electronic signature agreement for completion</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4">6</div>
                <h3 className="text-lg font-semibold mb-2">Invoice & Payment</h3>
                <p className="text-slate-600 text-sm">Agent issues invoice to Agents Capital, paid within 24 hours</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4">7</div>
                <h3 className="text-lg font-semibold mb-2">Commission Invoice</h3>
                <p className="text-slate-600 text-sm">Agents Capital issues invoice to agent for commission amount</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4">8</div>
                <h3 className="text-lg font-semibold mb-2">Sale Completes</h3>
                <p className="text-slate-600 text-sm">Property sale reaches completion stage</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4">9</div>
                <h3 className="text-lg font-semibold mb-2">Settlement</h3>
                <p className="text-slate-600 text-sm">Brokerage settles outstanding invoice with Agents Capital</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your cash flow today with commission advance from Agents Capital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Zap className="mr-2 h-5 w-5" />
                Apply Now - Free
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white !text-white bg-transparent hover:bg-white hover:!text-green-600">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}
