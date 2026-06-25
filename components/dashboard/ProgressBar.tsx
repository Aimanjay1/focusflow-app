import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";

export function ProgressBar() {
  return (
    <div className="w-full max-w-sm">
      <Field className="w-full max-w-sm">
        <FieldLabel htmlFor="progress-upload">
          <span>Today's progress</span>
          <span className="text-label-sm text-on-surface-variant">75%</span>
        </FieldLabel>
        <Progress value={75} id="progress-upload" />
      </Field>
    </div>
  );
}
