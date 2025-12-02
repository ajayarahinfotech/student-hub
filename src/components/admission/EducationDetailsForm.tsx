import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { SchoolDetails, QualifiedExamDetails } from "@/types/admission";

interface EducationDetailsFormProps {
  schoolData: SchoolDetails;
  qualifiedData: QualifiedExamDetails;
  onSchoolChange: (data: SchoolDetails) => void;
  onQualifiedChange: (data: QualifiedExamDetails) => void;
}

const EducationDetailsForm = ({
  schoolData,
  qualifiedData,
  onSchoolChange,
  onQualifiedChange,
}: EducationDetailsFormProps) => {
  const handleSchoolChange = (field: keyof SchoolDetails, value: string | boolean) => {
    onSchoolChange({ ...schoolData, [field]: value });
  };

  const handleQualifiedChange = (field: keyof QualifiedExamDetails, value: string | boolean) => {
    onQualifiedChange({ ...qualifiedData, [field]: value });
  };

  return (
    <div className="space-y-8 animate-slide-up">
      {/* School Details (10th Class) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 gradient-accent rounded-full" />
          <h3 className="text-lg font-semibold font-display text-foreground">
            School Details (10th Class)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="schoolHallTicket">Hall Ticket No.</Label>
            <Input
              id="schoolHallTicket"
              placeholder="Enter hall ticket number"
              value={schoolData.hallTicketNo}
              onChange={(e) => handleSchoolChange("hallTicketNo", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="schoolTotal">Total Marks</Label>
            <Input
              id="schoolTotal"
              placeholder="Enter total marks"
              value={schoolData.totalMarks}
              onChange={(e) => handleSchoolChange("totalMarks", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="schoolYearOfPass">Year of Pass</Label>
            <Input
              id="schoolYearOfPass"
              placeholder="e.g., 2022"
              value={schoolData.yearOfPass}
              onChange={(e) => handleSchoolChange("yearOfPass", e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Checkbox
            id="schoolStudyCert"
            checked={schoolData.studyCertificate}
            onCheckedChange={(checked) => handleSchoolChange("studyCertificate", !!checked)}
          />
          <Label htmlFor="schoolStudyCert" className="font-normal cursor-pointer">
            Study Certificate (6th to 10th) Available
          </Label>
        </div>
      </div>

      {/* Qualified Exam Details (Intermediate) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 gradient-accent rounded-full" />
          <h3 className="text-lg font-semibold font-display text-foreground">
            Qualified Exam Details (Intermediate)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="interHallTicket">Hall Ticket No.</Label>
            <Input
              id="interHallTicket"
              placeholder="Enter hall ticket number"
              value={qualifiedData.hallTicketNo}
              onChange={(e) => handleQualifiedChange("hallTicketNo", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interTotal">Total Marks</Label>
            <Input
              id="interTotal"
              placeholder="Enter total marks"
              value={qualifiedData.totalMarks}
              onChange={(e) => handleQualifiedChange("totalMarks", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interYearOfPass">Year of Pass</Label>
            <Input
              id="interYearOfPass"
              placeholder="e.g., 2024"
              value={qualifiedData.yearOfPass}
              onChange={(e) => handleQualifiedChange("yearOfPass", e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex items-center space-x-3">
            <Checkbox
              id="interStudyCert"
              checked={qualifiedData.studyCertificate}
              onCheckedChange={(checked) => handleQualifiedChange("studyCertificate", !!checked)}
            />
            <Label htmlFor="interStudyCert" className="font-normal cursor-pointer">
              Study Certificate (Inter) Available
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox
              id="interTransferCert"
              checked={qualifiedData.transferCertificate}
              onCheckedChange={(checked) => handleQualifiedChange("transferCertificate", !!checked)}
            />
            <Label htmlFor="interTransferCert" className="font-normal cursor-pointer">
              Transfer Certificate (Inter) Available
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDetailsForm;
