import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScholarshipDetails } from "@/types/admission";

interface ScholarshipDetailsFormProps {
  data: ScholarshipDetails;
  onChange: (data: ScholarshipDetails) => void;
}

const ScholarshipDetailsForm = ({ data, onChange }: ScholarshipDetailsFormProps) => {
  const handleChange = (field: keyof ScholarshipDetails, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Aadhar Details */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 gradient-accent rounded-full" />
          <h3 className="text-lg font-semibold font-display text-foreground">
            Aadhar Details
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="studentAadhar">Student Aadhar No.</Label>
            <Input
              id="studentAadhar"
              placeholder="Enter 12-digit Aadhar"
              value={data.studentAadhar}
              onChange={(e) => handleChange("studentAadhar", e.target.value)}
              maxLength={12}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="motherAadhar">Mother Aadhar No.</Label>
            <Input
              id="motherAadhar"
              placeholder="Enter 12-digit Aadhar"
              value={data.motherAadhar}
              onChange={(e) => handleChange("motherAadhar", e.target.value)}
              maxLength={12}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fatherAadhar">Father Aadhar No.</Label>
            <Input
              id="fatherAadhar"
              placeholder="Enter 12-digit Aadhar"
              value={data.fatherAadhar}
              onChange={(e) => handleChange("fatherAadhar", e.target.value)}
              maxLength={12}
            />
          </div>
        </div>
      </div>

      {/* Bank Details */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 gradient-accent rounded-full" />
          <h3 className="text-lg font-semibold font-display text-foreground">
            Bank Details
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="motherBankAccount">Mother Bank A/C No.</Label>
            <Input
              id="motherBankAccount"
              placeholder="Enter bank account number"
              value={data.motherBankAccount}
              onChange={(e) => handleChange("motherBankAccount", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bankIfscCode">Bank IFSC Code</Label>
            <Input
              id="bankIfscCode"
              placeholder="Enter IFSC code"
              value={data.bankIfscCode}
              onChange={(e) => handleChange("bankIfscCode", e.target.value.toUpperCase())}
              maxLength={11}
            />
          </div>
        </div>
      </div>

      {/* Contact Details */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 gradient-accent rounded-full" />
          <h3 className="text-lg font-semibold font-display text-foreground">
            Contact Details
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="studentMobile">Student Mobile No.</Label>
            <Input
              id="studentMobile"
              placeholder="Enter 10-digit mobile"
              value={data.studentMobile}
              onChange={(e) => handleChange("studentMobile", e.target.value)}
              maxLength={10}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="parentMobile">Parent Mobile No.</Label>
            <Input
              id="parentMobile"
              placeholder="Enter 10-digit mobile"
              value={data.parentMobile}
              onChange={(e) => handleChange("parentMobile", e.target.value)}
              maxLength={10}
            />
          </div>
        </div>
      </div>

      {/* Certificate Details */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 gradient-accent rounded-full" />
          <h3 className="text-lg font-semibold font-display text-foreground">
            Certificate Details
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="riceCardNo">Rice Card / Income Certificate No.</Label>
            <Input
              id="riceCardNo"
              placeholder="Enter certificate number"
              value={data.riceCardNo}
              onChange={(e) => handleChange("riceCardNo", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="casteCertificateNo">Caste Certificate No.</Label>
            <Input
              id="casteCertificateNo"
              placeholder="Enter certificate number"
              value={data.casteCertificateNo}
              onChange={(e) => handleChange("casteCertificateNo", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Identification Marks */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 gradient-accent rounded-full" />
          <h3 className="text-lg font-semibold font-display text-foreground">
            Identification Marks (Moles)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="mole1">Mole 1</Label>
            <Input
              id="mole1"
              placeholder="Describe first identification mark"
              value={data.mole1}
              onChange={(e) => handleChange("mole1", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mole2">Mole 2</Label>
            <Input
              id="mole2"
              placeholder="Describe second identification mark"
              value={data.mole2}
              onChange={(e) => handleChange("mole2", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetailsForm;
