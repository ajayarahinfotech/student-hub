import DashboardHeader from "@/components/admission/DashboardHeader";
import AdmissionForm from "@/components/admission/AdmissionForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="py-8 px-4 sm:px-6">
        <AdmissionForm />
      </main>

      <footer className="py-6 px-4 text-center text-muted-foreground text-sm border-t">
        <p>© {new Date().getFullYear()} Venkatesa School of Nursing. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
