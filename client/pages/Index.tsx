import {
  CreditCard,
  Zap,
  Navigation,
  Shield,
  Receipt,
  User,
  Bell,
  Search,
  ChevronRight,
  Wallet,
  Car,
  MapPin,
  QrCode,
  FileText,
  Star,
  TrendingUp,
} from "lucide-react";

export default function Index() {
  const services = [
    {
      id: "fastag",
      name: "FASTag",
      description: "Recharge & Manage",
      icon: Car,
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      route: "/fastag",
    },
    {
      id: "ev-chargers",
      name: "EV Chargers",
      description: "Find & Book Slots",
      icon: Zap,
      color: "bg-green-500",
      lightColor: "bg-green-50",
      route: "/ev-chargers",
    },
    {
      id: "gps",
      name: "GPS Navigation",
      description: "Smart Routes",
      icon: Navigation,
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      route: "/gps",
    },
    {
      id: "raksha-qr",
      name: "Raksha QR",
      description: "Safety First",
      icon: Shield,
      color: "bg-red-500",
      lightColor: "bg-red-50",
      route: "/raksha-qr",
    },
    {
      id: "bill-payments",
      name: "Bill Payments",
      description: "Pay All Bills",
      icon: Receipt,
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      route: "/bill-payments",
    },
  ];

  const quickActions = [
    { icon: QrCode, label: "Scan QR", color: "text-blue-600" },
    { icon: MapPin, label: "Locate", color: "text-green-600" },
    { icon: Wallet, label: "Wallet", color: "text-purple-600" },
    { icon: FileText, label: "History", color: "text-orange-600" },
  ];

  const recentActivity = [
    {
      service: "FASTag Recharge",
      amount: "₹500",
      time: "2 hours ago",
      status: "Success",
    },
    {
      service: "EV Charging",
      amount: "₹150",
      time: "Yesterday",
      status: "Success",
    },
    {
      service: "Electricity Bill",
      amount: "₹2,840",
      time: "3 days ago",
      status: "Success",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary px-4 pt-12 pb-6 text-primary-foreground">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm opacity-90">Good morning</p>
              <p className="font-semibold text-lg">Priya Sharma</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bell className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search services..."
            className="w-full bg-white rounded-2xl py-3 pl-10 pr-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 -mt-4">
        {/* Balance Card */}
        <div className="bg-card rounded-2xl p-6 shadow-sm border mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Wallet Balance</p>
              <p className="text-3xl font-bold text-foreground">₹4,250</p>
            </div>
            <div className="text-right">
              <div className="flex items-center text-success text-sm mb-1">
                <TrendingUp className="w-4 h-4 mr-1" />
                +12.5%
              </div>
              <p className="text-xs text-muted-foreground">This month</p>
            </div>
          </div>
          <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium">
            Add Money
          </button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {quickActions.map((action, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-14 h-14 bg-card rounded-2xl flex items-center justify-center shadow-sm border mb-2">
                <action.icon className={`w-6 h-6 ${action.color}`} />
              </div>
              <p className="text-xs text-center text-muted-foreground font-medium">
                {action.label}
              </p>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Services</h2>
            <button className="text-primary text-sm font-medium">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-card rounded-2xl p-4 shadow-sm border hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 ${service.lightColor} rounded-xl flex items-center justify-center`}
                    >
                      <service.icon
                        className={`w-6 h-6 ${service.color.replace("bg-", "text-")}`}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {service.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">
              Recent Activity
            </h2>
            <button className="text-primary text-sm font-medium">
              View All
            </button>
          </div>

          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-4 shadow-sm border"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">
                      {activity.service}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">
                      {activity.amount}
                    </p>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                      <p className="text-xs text-success">{activity.status}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl p-6 text-white mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg mb-2">Special Offer!</h3>
              <p className="text-sm opacity-90 mb-3">
                Get 10% cashback on your next FASTag recharge
              </p>
              <button className="bg-white text-brand-600 px-4 py-2 rounded-lg text-sm font-medium">
                Claim Now
              </button>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Star className="w-8 h-8" />
            </div>
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="h-20"></div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t px-4 py-3">
        <div className="flex items-center justify-around">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-primary-foreground" />
            </div>
            <p className="text-xs text-primary font-medium mt-1">Home</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">History</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
              <Wallet className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Wallet</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
              <User className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}
