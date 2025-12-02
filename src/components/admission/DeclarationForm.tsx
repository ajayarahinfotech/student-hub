import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { AlertTriangle } from "lucide-react";

interface DeclarationFormProps {
  accepted: boolean;
  onChange: (accepted: boolean) => void;
}

const DeclarationForm = ({ accepted, onChange }: DeclarationFormProps) => {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex items-center gap-3">
        <div className="w-1 h-6 gradient-accent rounded-full" />
        <h3 className="text-lg font-semibold font-display text-foreground">
          Declaration
        </h3>
      </div>

      <div className="rounded-lg border bg-card p-6 space-y-4">
        <div className="flex gap-3 p-4 rounded-lg bg-accent/10 border border-accent/20">
          <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            Please read the declaration carefully before accepting.
          </p>
        </div>

        <div className="prose prose-sm max-w-none text-muted-foreground">
          <p className="leading-relaxed">
            I, the undersigned, hereby declare that I have carefully read and understood
            all the rules, regulations, and disciplinary guidelines of the institution.
            I agree to abide by all the rules and regulations set forth by the school
            authorities if I am granted admission.
          </p>
          <p className="leading-relaxed mt-4">
            I further declare that all the information provided in this application form
            is true and correct to the best of my knowledge and belief. I understand that
            any false or misleading information may result in the cancellation of my
            admission at any stage.
          </p>
          <p className="leading-relaxed mt-4">
            I agree to follow the academic and disciplinary regulations of the institution
            and accept that all decisions made by the authorities regarding education,
            training, and discipline shall be final and binding.
          </p>
        </div>

        <div className="pt-4 border-t">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="declaration"
              checked={accepted}
              onCheckedChange={(checked) => onChange(!!checked)}
              className="mt-1"
            />
            <Label htmlFor="declaration" className="font-normal cursor-pointer leading-relaxed">
              I hereby declare that I have read, understood, and agree to abide by all the
              rules and regulations of Venkatesa School of Nursing. I confirm that all the
              information provided in this application is true and accurate.
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeclarationForm;
