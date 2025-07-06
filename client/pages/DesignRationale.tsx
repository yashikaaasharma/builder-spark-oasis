import {
  ArrowLeft,
  Lightbulb,
  Target,
  Users,
  Palette,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DesignRationale() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-500 px-4 pt-12 pb-6 text-white">
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold">Design Rationale</h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 -mt-4 pb-8">
        <div className="bg-card rounded-2xl p-6 shadow-sm border mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Lightbulb className="w-6 h-6 mr-3 text-yellow-500" />
            Highway Delite: Design Rationale
          </h2>

          {/* Problem Statement */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2 text-red-500" />
              Problems Identified & Solved
            </h3>

            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <h4 className="font-semibold text-red-800 mb-2">
                  Problem: Generic Financial App Design
                </h4>
                <p className="text-red-700 text-sm mb-2">
                  <strong>Issue:</strong> Original design looked like a generic
                  fintech app, not specific to highway travel needs.
                </p>
                <p className="text-green-700 text-sm">
                  <strong>Solution:</strong> Created highway-specific branding
                  with road-inspired colors (blue/orange like highway signs),
                  travel iconography, and route-based navigation metaphors.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <h4 className="font-semibold text-orange-800 mb-2">
                  Problem: Poor Information Hierarchy
                </h4>
                <p className="text-orange-700 text-sm mb-2">
                  <strong>Issue:</strong> Services weren't prioritized for
                  highway travelers' immediate needs.
                </p>
                <p className="text-green-700 text-sm">
                  <strong>Solution:</strong> Implemented progressive information
                  hierarchy: Current Trip → Emergency Services → Quick Actions →
                  Detailed Services.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h4 className="font-semibold text-blue-800 mb-2">
                  Problem: Lack of Real-Time Context
                </h4>
                <p className="text-blue-700 text-sm mb-2">
                  <strong>Issue:</strong> No awareness of user's current travel
                  state or real-time information.
                </p>
                <p className="text-green-700 text-sm">
                  <strong>Solution:</strong> Added live trip tracking, real-time
                  weather, ETA calculations, and progress indicators.
                </p>
              </div>
            </div>
          </div>

          {/* Design Decisions */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
              <Palette className="w-5 h-5 mr-2 text-purple-500" />
              Key Design Decisions
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Color Strategy */}
              <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl p-5 border border-brand-200">
                <h4 className="font-semibold text-brand-800 mb-3">
                  Color Psychology
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-brand-500 rounded-full"></div>
                    <span className="text-brand-700">
                      <strong>Blue Primary:</strong> Trust, reliability, safety
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-highway-500 rounded-full"></div>
                    <span className="text-highway-700">
                      <strong>Orange Accent:</strong> Energy, caution, highway
                      signs
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-green-700">
                      <strong>Green Status:</strong> Success, go signals, safe
                      travel
                    </span>
                  </div>
                </div>
              </div>

              {/* Typography */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-3">
                  Typography Hierarchy
                </h4>
                <div className="space-y-2 text-sm text-purple-700">
                  <p>
                    <strong>Headlines:</strong> Bold, large for quick scanning
                    while driving
                  </p>
                  <p>
                    <strong>Body Text:</strong> High contrast for roadside
                    readability
                  </p>
                  <p>
                    <strong>Labels:</strong> Concise, action-oriented language
                  </p>
                  <p>
                    <strong>Status Text:</strong> Color-coded for immediate
                    recognition
                  </p>
                </div>
              </div>

              {/* Interaction Design */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border border-green-200">
                <h4 className="font-semibold text-green-800 mb-3">
                  Interaction Patterns
                </h4>
                <div className="space-y-2 text-sm text-green-700">
                  <p>
                    <strong>Large Touch Targets:</strong> 48px minimum for
                    mobile use
                  </p>
                  <p>
                    <strong>Haptic Feedback:</strong> Visual scale animations
                    simulate touch
                  </p>
                  <p>
                    <strong>Progressive Disclosure:</strong> Most important
                    actions first
                  </p>
                  <p>
                    <strong>Emergency Priority:</strong> Red pulsing for
                    immediate attention
                  </p>
                </div>
              </div>

              {/* Animation Strategy */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-5 border border-yellow-200">
                <h4 className="font-semibold text-yellow-800 mb-3">
                  Animation Purpose
                </h4>
                <div className="space-y-2 text-sm text-yellow-700">
                  <p>
                    <strong>Entrance Animations:</strong> Staggered loading
                    reduces cognitive load
                  </p>
                  <p>
                    <strong>Micro-interactions:</strong> Provide feedback and
                    delight
                  </p>
                  <p>
                    <strong>Status Indicators:</strong> Pulsing shows
                    live/active states
                  </p>
                  <p>
                    <strong>Hover Effects:</strong> Clear affordances for
                    clickable elements
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* User Experience Strategy */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-blue-500" />
              User Experience Strategy
            </h3>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-4">
                Highway Traveler Personas
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <h5 className="font-semibold text-blue-700 mb-2">
                    Daily Commuter
                  </h5>
                  <p className="text-sm text-blue-600">
                    Needs predictable, automated services like FASTag
                    auto-recharge
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <h5 className="font-semibold text-blue-700 mb-2">
                    Long-Distance Traveler
                  </h5>
                  <p className="text-sm text-blue-600">
                    Requires route planning, fuel stops, and emergency services
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <h5 className="font-semibold text-blue-700 mb-2">
                    EV Driver
                  </h5>
                  <p className="text-sm text-blue-600">
                    Needs charging station finder and range planning
                  </p>
                </div>
              </div>

              <h4 className="font-semibold text-blue-800 mb-3">
                UX Improvements Implemented
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-blue-800">
                      Context-Aware Interface
                    </p>
                    <p className="text-sm text-blue-600">
                      Shows current trip status, weather, and time-sensitive
                      information prominently
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-blue-800">
                      Emergency-First Design
                    </p>
                    <p className="text-sm text-blue-600">
                      Emergency services are always visible and accessible with
                      distinctive red pulsing
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-blue-800">
                      Predictive Features
                    </p>
                    <p className="text-sm text-blue-600">
                      Smart insights predict toll costs, suggest recharge
                      timing, and show usage patterns
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-blue-800">
                      Simplified Navigation
                    </p>
                    <p className="text-sm text-blue-600">
                      Bottom navigation uses travel metaphors (Home=Route, Map,
                      Trips, Profile)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Marketing Graphic Rationale */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-yellow-500" />
              Marketing Graphic Strategy
            </h3>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-4">
                Social Media Campaign: "Travel Smarter, Save More"
              </h4>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-yellow-100">
                  <h5 className="font-semibold text-yellow-700 mb-2">
                    Visual Hierarchy
                  </h5>
                  <p className="text-sm text-yellow-600 mb-2">
                    <strong>1. Brand Recognition:</strong> Large Highway Delite
                    logo with route icon
                  </p>
                  <p className="text-sm text-yellow-600 mb-2">
                    <strong>2. Value Proposition:</strong> "Travel Smarter, Save
                    More" headline
                  </p>
                  <p className="text-sm text-yellow-600">
                    <strong>3. Call-to-Action:</strong> 20% cashback offer with
                    clear download buttons
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-yellow-100">
                  <h5 className="font-semibold text-yellow-700 mb-2">
                    Design Elements
                  </h5>
                  <div className="grid grid-cols-2 gap-3 text-sm text-yellow-600">
                    <div>
                      • <strong>Road metaphors:</strong> Dotted lines, floating
                      elements
                    </div>
                    <div>
                      • <strong>Trust signals:</strong> User count, ratings,
                      savings
                    </div>
                    <div>
                      • <strong>Service showcase:</strong> FASTag, EV, Emergency
                      icons
                    </div>
                    <div>
                      • <strong>Urgency:</strong> "Limited time offer" with star
                      animations
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-yellow-100">
                  <h5 className="font-semibold text-yellow-700 mb-2">
                    Square Format Optimization
                  </h5>
                  <p className="text-sm text-yellow-600">
                    1080x1080px format ensures perfect display across Instagram,
                    Facebook, LinkedIn, and Twitter. Content is arranged in
                    vertical hierarchy for mobile viewing while maintaining
                    readability at smaller sizes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              Expected Impact & Success Metrics
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  +40%
                </div>
                <p className="text-sm text-green-700">User Engagement</p>
                <p className="text-xs text-green-600">
                  Improved task completion rates
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  -60%
                </div>
                <p className="text-sm text-green-700">Support Tickets</p>
                <p className="text-xs text-green-600">Better self-service UX</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  +25%
                </div>
                <p className="text-sm text-green-700">App Downloads</p>
                <p className="text-xs text-green-600">
                  From marketing campaign
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
