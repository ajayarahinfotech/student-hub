import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft, ChevronRight, Send, Save } from "lucide-react";
import FormProgress from "./FormProgress";
import PersonalDetailsForm from "./PersonalDetailsForm";
import AddressDetailsForm from "./AddressDetailsForm";
import EducationDetailsForm from "./EducationDetailsForm";
import ScholarshipDetailsForm from "./ScholarshipDetailsForm";
import StudyDetailsForm from "./StudyDetailsForm";
import DeclarationForm from "./DeclarationForm";
import { AdmissionFormData, initialFormData } from "@/types/admission";

const steps = [
  "Personal",
  "Address",
  "Education",
  "Scholarship",
  "Academic",
  "Declaration",
];

const AdmissionForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<AdmissionFormData>(initialFormData);
  const { toast } = useToast();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSave = () => {
    localStorage.setItem("admissionFormData", JSON.stringify(formData));
    toast({
      title: "Progress Saved",
      description: "Your application has been saved. You can continue later.",
    });
  };

  const handleSubmit = () => {
    if (!formData.declarationAccepted) {
      toast({
        title: "Declaration Required",
        description: "Please accept the declaration to submit your application.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to a backend
    console.log("Form submitted:", formData);
    toast({
      title: "Application Submitted!",
      description: "Your admission application has been submitted successfully.",
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonalDetailsForm
            data={formData.personalDetails}
            onChange={(data) => setFormData({ ...formData, personalDetails: data })}
          />
        );
      case 1:
        return (
          <AddressDetailsForm
            data={formData.addressDetails}
            onChange={(data) => setFormData({ ...formData, addressDetails: data })}
          />
        );
      case 2:
        return (
          <EducationDetailsForm
            schoolData={formData.schoolDetails}
            qualifiedData={formData.qualifiedExamDetails}
            onSchoolChange={(data) => setFormData({ ...formData, schoolDetails: data })}
            onQualifiedChange={(data) => setFormData({ ...formData, qualifiedExamDetails: data })}
          />
        );
      case 3:
        return (
          <ScholarshipDetailsForm
            data={formData.scholarshipDetails}
            onChange={(data) => setFormData({ ...formData, scholarshipDetails: data })}
          />
        );
      case 4:
        return (
          <StudyDetailsForm
            studyData={formData.studyDetails}
            examData={formData.examMarks}
            onStudyChange={(data) => setFormData({ ...formData, studyDetails: data })}
            onExamChange={(data) => setFormData({ ...formData, examMarks: data })}
          />
        );
      case 5:
        return (
          <DeclarationForm
            accepted={formData.declarationAccepted}
            onChange={(accepted) => setFormData({ ...formData, declarationAccepted: accepted })}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <FormProgress currentStep={currentStep} totalSteps={steps.length} steps={steps} />

      <Card className="shadow-medium border-0">
        <CardContent className="p-6 md:p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold font-display text-foreground">
              {steps[currentStep]} Details
            </h2>
            <p className="text-muted-foreground mt-1">
              Step {currentStep + 1} of {steps.length}
            </p>
          </div>

          {renderStep()}

          <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className="flex-1" />

            <Button variant="outline" onClick={handleSave} className="gap-2">
              <Save className="w-4 h-4" />
              Save Progress
            </Button>

            {currentStep < steps.length - 1 ? (
              <Button onClick={handleNext} className="gap-2">
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="gap-2">
                <Send className="w-4 h-4" />
                Submit Application
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdmissionForm;
