import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PersonalDetails } from "@/types/admission";

interface PersonalDetailsFormProps {
  data: PersonalDetails;
  onChange: (data: PersonalDetails) => void;
}

const PersonalDetailsForm = ({ data, onChange }: PersonalDetailsFormProps) => {
  const handleChange = (field: keyof PersonalDetails, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6 animate-slide-up">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="admissionNo">Admission Number</Label>
          <Input
            id="admissionNo"
            placeholder="Enter admission number"
            value={data.admissionNo}
            onChange={(e) => handleChange("admissionNo", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="academicYear">Academic Year</Label>
          <Input
            id="academicYear"
            placeholder="e.g., 2024-2025"
            value={data.academicYear}
            onChange={(e) => handleChange("academicYear", e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="studentName">Name of the Student (as per SSC Certificate)</Label>
        <Input
          id="studentName"
          placeholder="Enter full name"
          value={data.studentName}
          onChange={(e) => handleChange("studentName", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fatherName">Father's Name</Label>
          <Input
            id="fatherName"
            placeholder="Enter father's name"
            value={data.fatherName}
            onChange={(e) => handleChange("fatherName", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="motherName">Mother's Name</Label>
          <Input
            id="motherName"
            placeholder="Enter mother's name"
            value={data.motherName}
            onChange={(e) => handleChange("motherName", e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth (as per SSC Certificate)</Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={data.dateOfBirth}
            onChange={(e) => handleChange("dateOfBirth", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            placeholder="Enter age"
            value={data.age}
            onChange={(e) => handleChange("age", e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-3">
        <Label>Gender</Label>
        <RadioGroup
          value={data.gender}
          onValueChange={(value) => handleChange("gender", value)}
          className="flex flex-wrap gap-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male" className="font-normal cursor-pointer">Male</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female" className="font-normal cursor-pointer">Female</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="transgender" id="transgender" />
            <Label htmlFor="transgender" className="font-normal cursor-pointer">Transgender</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
