import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StudyDetail, ExamMark } from "@/types/admission";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface StudyDetailsFormProps {
  studyData: StudyDetail[];
  examData: ExamMark[];
  onStudyChange: (data: StudyDetail[]) => void;
  onExamChange: (data: ExamMark[]) => void;
}

const StudyDetailsForm = ({
  studyData,
  examData,
  onStudyChange,
  onExamChange,
}: StudyDetailsFormProps) => {
  const handleStudyChange = (index: number, field: keyof StudyDetail, value: string) => {
    const newData = [...studyData];
    newData[index] = { ...newData[index], [field]: value };
    onStudyChange(newData);
  };

  const handleExamChange = (index: number, field: keyof ExamMark, value: string) => {
    const newData = [...examData];
    newData[index] = { ...newData[index], [field]: value };
    onExamChange(newData);
  };

  return (
    <div className="space-y-8 animate-slide-up">
      {/* Study Details Table */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 gradient-accent rounded-full" />
          <h3 className="text-lg font-semibold font-display text-foreground">
            Study Details (6th to Inter)
          </h3>
        </div>

        <div className="rounded-lg border bg-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-32 font-semibold">Class</TableHead>
                <TableHead className="font-semibold">Name of School / College</TableHead>
                <TableHead className="font-semibold">Village / Town / District</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studyData.map((item, index) => (
                <TableRow key={item.class}>
                  <TableCell className="font-medium text-foreground">{item.class}</TableCell>
                  <TableCell>
                    <Input
                      placeholder="Enter school/college name"
                      value={item.schoolName}
                      onChange={(e) => handleStudyChange(index, "schoolName", e.target.value)}
                      className="border-0 bg-transparent focus-visible:ring-1"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      placeholder="Enter location"
                      value={item.villageDistrict}
                      onChange={(e) => handleStudyChange(index, "villageDistrict", e.target.value)}
                      className="border-0 bg-transparent focus-visible:ring-1"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Exam Marks Table */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 gradient-accent rounded-full" />
          <h3 className="text-lg font-semibold font-display text-foreground">
            Qualified Exam Marks
          </h3>
        </div>

        <div className="rounded-lg border bg-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-16 font-semibold">S.No</TableHead>
                <TableHead className="font-semibold">Subject</TableHead>
                <TableHead className="w-32 font-semibold">Max Marks</TableHead>
                <TableHead className="w-32 font-semibold">Obtained</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {examData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-foreground">{index + 1}</TableCell>
                  <TableCell>
                    <Input
                      placeholder="Enter subject name"
                      value={item.subject}
                      onChange={(e) => handleExamChange(index, "subject", e.target.value)}
                      className="border-0 bg-transparent focus-visible:ring-1"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      placeholder="Max"
                      value={item.maxMarks}
                      onChange={(e) => handleExamChange(index, "maxMarks", e.target.value)}
                      className="border-0 bg-transparent focus-visible:ring-1"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      placeholder="Obtained"
                      value={item.obtainedMarks}
                      onChange={(e) => handleExamChange(index, "obtainedMarks", e.target.value)}
                      className="border-0 bg-transparent focus-visible:ring-1"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default StudyDetailsForm;
