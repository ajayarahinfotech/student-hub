import { GraduationCap } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="gradient-hero text-primary-foreground py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border-2 border-accent">
            <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display">
              Venkatesa School of Nursing
            </h1>
            <p className="text-primary-foreground/80 text-sm sm:text-base mt-1">
              Recognized by Government of Andhra Pradesh • Andhra Pradesh Nursing Council, Vijayawada
            </p>
            <p className="text-primary-foreground/60 text-xs sm:text-sm mt-1">
              Near Gandhi Nagar Park, Gandhi Nagar, Kakinada, E.G. Dt., A.P., India
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block px-6 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30">
            <span className="text-accent font-semibold">Student Admission Application</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
