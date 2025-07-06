import {
  Car,
  Zap,
  Navigation,
  Shield,
  Receipt,
  User,
  Bell,
  Search,
  ChevronRight,
  Wallet,
  MapPin,
  QrCode,
  FileText,
  Star,
  TrendingUp,
  Route,
  Clock,
  Fuel,
  Phone,
  AlertTriangle,
  ArrowRight,
  Play,
  Sparkles,
  Wind,
  Compass,
  Activity,
  MapIcon,
  Layers,
  Zap as Lightning,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Index() {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weatherTemp] = useState(28);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Simulate loading for smooth entrance animations
    setTimeout(() => setIsLoading(false), 1500);

    return () => clearInterval(timer);
  }, []);

  const primaryServices = [
    {
      id: "fastag",
      name: "FASTag",
      description: "Toll & Recharge",
      icon: Car,
      color: "bg-brand-500",
      lightColor: "bg-brand-50",
      route: "/fastag",
      isActive: true,
    },
    {
      id: "ev-chargers",
      name: "EV Charging",
      description: "Find Stations",
      icon: Zap,
      color: "bg-green-500",
      lightColor: "bg-green-50",
      route: "/ev-chargers",
      isActive: false,
    },
    {
      id: "gps",
      name: "Smart GPS",
      description: "Route Planning",
      icon: Navigation,
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      route: "/gps",
      isActive: false,
    },
    {
      id: "raksha-qr",
      name: "Emergency SOS",
      description: "Safety First",
      icon: Shield,
      color: "bg-red-500",
      lightColor: "bg-red-50",
      route: "/raksha-qr",
      isActive: false,
    },
  ];

  const quickActions = [
    {
      icon: QrCode,
      label: "Scan QR",
      color: "text-brand-600",
      bg: "bg-brand-50",
    },
    {
      icon: Route,
      label: "Plan Route",
      color: "text-highway-600",
      bg: "bg-highway-50",
    },
    { icon: Phone, label: "Emergency", color: "text-red-600", bg: "bg-red-50" },
    {
      icon: Fuel,
      label: "Fuel Stops",
      color: "text-green-600",
      bg: "bg-green-50",
    },
  ];

  const currentTrip = {
    from: "Mumbai",
    to: "Pune",
    distance: "148 km",
    eta: "2h 45m",
    tollCost: "₹320",
  };

  const recentActivity = [
    {
      service: "Mumbai-Pune Toll",
      location: "Khopoli Plaza",
      amount: "₹165",
      time: "2 hours ago",
      status: "Success",
      icon: Car,
    },
    {
      service: "EV Charging",
      location: "Lonavala Station",
      amount: "₹280",
      time: "Yesterday",
      status: "Success",
      icon: Zap,
    },
    {
      service: "Fuel Payment",
      location: "Highway Petrol Pump",
      amount: "₹2,500",
      time: "2 days ago",
      status: "Success",
      icon: Fuel,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with floating animation elements */}
      <div className="bg-gradient-to-r from-brand-600 via-brand-500 to-highway-500 px-4 pt-12 pb-6 text-white relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-8 right-8 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div
            className="absolute top-20 left-12 w-16 h-16 bg-highway-300/10 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-8 right-20 w-20 h-20 bg-white/5 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Weather and Time Strip */}
        <div className="flex items-center justify-between mb-4 bg-white/10 rounded-xl p-3 backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-yellow-200" />
              <span className="text-sm font-medium">{weatherTemp}°C</span>
            </div>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-blue-200" />
              <span className="text-sm font-medium">
                {currentTime.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Wind className="w-4 h-4 text-green-200 animate-pulse" />
            <span className="text-sm">Clear Roads</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg">
              <Route className="w-7 h-7 animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-bold flex items-center">
                Highway Delite
                <Sparkles
                  className="w-5 h-5 ml-2 text-yellow-200 animate-spin"
                  style={{ animationDuration: "3s" }}
                />
              </h1>
              <p className="text-sm opacity-90 flex items-center">
                Your Smart Travel Companion
                <Compass className="w-3 h-3 ml-1 animate-pulse" />
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all duration-300 cursor-pointer">
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all duration-300 cursor-pointer">
              <User className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Enhanced Search with Voice Input */}
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-brand-500 transition-colors" />
          <input
            type="text"
            placeholder="Search destinations, highways, services..."
            className="w-full bg-white/95 backdrop-blur-md rounded-2xl py-4 pl-12 pr-16 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white shadow-lg border border-white/20 transition-all duration-300 focus:scale-[1.02]"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-500 to-highway-500 rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <MapIcon className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 -mt-4">
        {/* Enhanced Current Trip Card with Live Progress */}
        <div className="bg-gradient-to-r from-highway-500 via-highway-400 to-highway-500 rounded-2xl p-6 text-white shadow-xl mb-6 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
            <div
              className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-highway-100">
                    LIVE TRACKING
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Current Trip</h3>
                <div className="flex items-center space-x-3">
                  <span className="text-highway-100 font-medium">
                    {currentTrip.from}
                  </span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white/70 rounded-full animate-pulse"></div>
                    <div
                      className="w-1 h-1 bg-white/50 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <ArrowRight className="w-4 h-4 animate-pulse" />
                  </div>
                  <span className="text-highway-100 font-medium">
                    {currentTrip.to}
                  </span>
                </div>
              </div>
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-7 h-7 animate-pulse" />
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-xs text-highway-100 mb-2">
                <span>Progress</span>
                <span>67% Complete</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-400 to-yellow-400 h-2 rounded-full w-2/3 relative">
                  <div className="absolute right-0 top-0 w-3 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                <p className="text-highway-100 text-xs mb-1">Distance</p>
                <p className="font-bold text-lg">{currentTrip.distance}</p>
              </div>
              <div className="text-center bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                <p className="text-highway-100 text-xs mb-1">ETA</p>
                <p className="font-bold text-lg">{currentTrip.eta}</p>
              </div>
              <div className="text-center bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                <p className="text-highway-100 text-xs mb-1">Toll Cost</p>
                <p className="font-bold text-lg">{currentTrip.tollCost}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wallet Balance */}
        <div className="bg-card rounded-2xl p-5 shadow-sm border mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                FASTag Balance
              </p>
              <p className="text-2xl font-bold text-foreground">₹1,250</p>
            </div>
            <div className="text-right">
              <div className="flex items-center text-success text-sm mb-1">
                <TrendingUp className="w-4 h-4 mr-1" />
                +5.2%
              </div>
              <p className="text-xs text-muted-foreground">This month</p>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button className="flex-1 bg-brand-500 text-white py-2.5 rounded-xl font-medium text-sm">
              Recharge FASTag
            </button>
            <button className="flex-1 bg-muted text-muted-foreground py-2.5 rounded-xl font-medium text-sm">
              View History
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {quickActions.map((action, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-16 h-16 ${action.bg} rounded-2xl flex items-center justify-center shadow-sm mb-2`}
              >
                <action.icon className={`w-7 h-7 ${action.color}`} />
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
            <h2 className="text-xl font-bold text-foreground">
              Travel Services
            </h2>
            <button className="text-brand-500 text-sm font-medium">
              View All
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {primaryServices.map((service) => (
              <div
                key={service.id}
                onClick={() =>
                  service.id === "fastag" ? navigate(service.route) : null
                }
                className="bg-card rounded-2xl p-5 shadow-sm border hover:shadow-md transition-all cursor-pointer relative overflow-hidden"
              >
                {service.isActive && (
                  <div className="absolute top-3 right-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                )}

                <div
                  className={`w-14 h-14 ${service.lightColor} rounded-2xl flex items-center justify-center mb-4`}
                >
                  <service.icon
                    className={`w-7 h-7 ${service.color.replace("bg-", "text-")}`}
                  />
                </div>

                <h3 className="font-semibold text-foreground mb-1">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {service.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-brand-500 font-medium">
                    {service.isActive ? "Active" : "Available"}
                  </span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Services Banner */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-5 text-white mb-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">Emergency Services</h3>
              <p className="text-red-100 text-sm">
                24/7 roadside assistance available
              </p>
            </div>
            <button className="bg-white text-red-600 px-4 py-2 rounded-lg text-sm font-medium">
              Call Now
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Recent Trips</h2>
            <button className="text-brand-500 text-sm font-medium">
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
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                      <activity.icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {activity.service}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {activity.location} • {activity.time}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">
                      {activity.amount}
                    </p>
                    <div className="flex items-center justify-end">
                      <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                      <p className="text-xs text-success">{activity.status}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Spacing for Navigation */}
        <div className="h-24"></div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t px-4 py-3 shadow-lg">
        <div className="flex items-center justify-around">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center">
              <Route className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs text-brand-500 font-medium mt-1">Home</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
              <MapPin className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Map</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Trips</p>
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
