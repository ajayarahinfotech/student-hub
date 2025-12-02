import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AddressDetails } from "@/types/admission";

interface AddressDetailsFormProps {
  data: AddressDetails;
  onChange: (data: AddressDetails) => void;
}

const casteOptions = [
  "OC",
  "BC-A",
  "BC-B",
  "BC-C",
  "BC-D",
  "BC-E",
  "SC",
  "ST",
  "EWS",
  "Other",
];

const AddressDetailsForm = ({ data, onChange }: AddressDetailsFormProps) => {
  const handleChange = (field: keyof AddressDetails, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6 animate-slide-up">
      <div className="space-y-2">
        <Label htmlFor="postalAddress">Postal Address</Label>
        <Textarea
          id="postalAddress"
          placeholder="Enter complete postal address"
          value={data.postalAddress}
          onChange={(e) => handleChange("postalAddress", e.target.value)}
          rows={3}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="district">District</Label>
          <Input
            id="district"
            placeholder="Enter district"
            value={data.district}
            onChange={(e) => handleChange("district", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="mandal">Mandal</Label>
          <Input
            id="mandal"
            placeholder="Enter mandal"
            value={data.mandal}
            onChange={(e) => handleChange("mandal", e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="sachivalayamName">Sachivalayam Name</Label>
          <Input
            id="sachivalayamName"
            placeholder="Enter sachivalayam name"
            value={data.sachivalayamName}
            onChange={(e) => handleChange("sachivalayamName", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="pinCode">Pin Code</Label>
          <Input
            id="pinCode"
            placeholder="Enter pin code"
            value={data.pinCode}
            onChange={(e) => handleChange("pinCode", e.target.value)}
            maxLength={6}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="nationality">Nationality</Label>
          <Input
            id="nationality"
            placeholder="Enter nationality"
            value={data.nationality}
            onChange={(e) => handleChange("nationality", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="religion">Religion</Label>
          <Input
            id="religion"
            placeholder="Enter religion"
            value={data.religion}
            onChange={(e) => handleChange("religion", e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="caste">Caste</Label>
          <Select value={data.caste} onValueChange={(value) => handleChange("caste", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select caste" />
            </SelectTrigger>
            <SelectContent>
              {casteOptions.map((caste) => (
                <SelectItem key={caste} value={caste}>
                  {caste}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subCaste">Sub-Caste</Label>
          <Input
            id="subCaste"
            placeholder="Enter sub-caste"
            value={data.subCaste}
            onChange={(e) => handleChange("subCaste", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressDetailsForm;
