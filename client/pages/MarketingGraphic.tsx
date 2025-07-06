import {
  Car,
  Zap,
  Shield,
  Star,
  ArrowRight,
  Route,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export default function MarketingGraphic() {
  return (
    <div className="w-[1080px] h-[1080px] bg-gradient-to-br from-brand-600 via-brand-500 to-highway-500 relative overflow-hidden flex items-center justify-center mx-auto">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Floating Road Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div
          className="absolute top-60 right-32 w-24 h-24 bg-highway-300/10 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-40 w-28 h-28 bg-white/5 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Road Lines */}
        <div className="absolute top-0 left-1/3 w-1 h-full bg-white/10 transform rotate-12"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-white/10 transform -rotate-12"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 text-center text-white px-16">
        {/* Logo & Brand */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-20 h-20 bg-yellow-400 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-yellow-300 mr-4">
            <MapPin className="w-12 h-12 text-black" />
          </div>
          <div className="text-left">
            <h1 className="text-5xl font-bold flex items-center">
              highway delite
              <Sparkles
                className="w-8 h-8 ml-3 text-yellow-200 animate-spin"
                style={{ animationDuration: "3s" }}
              />
            </h1>
            <p className="text-xl opacity-90">
              India's largest digitally connected platform
            </p>
          </div>
        </div>

        {/* Main Headline */}
        <div className="mb-12">
          <h2 className="text-6xl font-bold mb-4 leading-tight">
            Travel Smarter,
            <br />
            Save More!
          </h2>
          <p className="text-2xl opacity-90 mb-6">
            Get 20% cashback on your first FASTag recharge
          </p>

          {/* Offer Badge */}
          <div className="inline-flex items-center bg-highway-500 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-xl">
            <Star className="w-6 h-6 mr-2 animate-pulse" />
            LIMITED TIME OFFER
            <Star className="w-6 h-6 ml-2 animate-pulse" />
          </div>
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          {/* FASTag */}
          <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Car className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">FASTag</h3>
            <p className="text-lg opacity-90">Instant Recharge</p>
          </div>

          {/* EV Charging */}
          <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">EV Charging</h3>
            <p className="text-lg opacity-90">Find Stations</p>
          </div>

          {/* Emergency */}
          <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-10 h-10 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Emergency</h3>
            <p className="text-lg opacity-90">24/7 Support</p>
          </div>
        </div>

        {/* Benefits List */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-12 border border-white/20">
          <h3 className="text-3xl font-bold mb-6">
            Why Choose Highway Delite?
          </h3>
          <div className="grid grid-cols-2 gap-6 text-left">
            <div className="flex items-center space-x-4">
              <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
              <span className="text-lg">Instant toll payments</span>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
              <span className="text-lg">Smart route planning</span>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
              <span className="text-lg">24/7 roadside assistance</span>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
              <span className="text-lg">Exclusive travel rewards</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white text-brand-600 rounded-3xl p-8 shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Download Highway Delite Today!
          </h3>
          <p className="text-xl mb-6 text-gray-600">
            Join 50,000+ smart travelers already saving money
          </p>

          <div className="flex items-center justify-center space-x-4">
            <button className="bg-gradient-to-r from-brand-500 to-brand-600 text-white px-12 py-4 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3">
              <span>Get Started</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          {/* App Store Badges Placeholder */}
          <div className="flex items-center justify-center space-x-6 mt-6">
            <div className="bg-gray-900 text-white px-6 py-3 rounded-xl text-sm font-medium">
              📱 App Store
            </div>
            <div className="bg-gray-900 text-white px-6 py-3 rounded-xl text-sm font-medium">
              🤖 Google Play
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="flex items-center justify-center space-x-8 mt-8 text-white/80">
          <div className="text-center">
            <div className="text-3xl font-bold">50K+</div>
            <div className="text-sm">Active Users</div>
          </div>
          <div className="w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <div className="text-3xl font-bold">4.8⭐</div>
            <div className="text-sm">App Rating</div>
          </div>
          <div className="w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <div className="text-3xl font-bold">₹2M+</div>
            <div className="text-sm">Savings Generated</div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
}
