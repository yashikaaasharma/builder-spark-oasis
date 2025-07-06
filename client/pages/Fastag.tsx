import { ArrowLeft, Car, CreditCard, History, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Fastag() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary px-4 pt-12 pb-6 text-primary-foreground">
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold">FASTag Services</h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 -mt-4">
        <div className="bg-card rounded-2xl p-6 shadow-sm border mb-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
              <Car className="w-8 h-8 text-blue-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">FASTag</h2>
              <p className="text-muted-foreground">Recharge & Manage</p>
            </div>
          </div>

          <div className="text-center py-12">
            <CreditCard className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Coming Soon
            </h3>
            <p className="text-muted-foreground">
              FASTag recharge and management features will be available soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
