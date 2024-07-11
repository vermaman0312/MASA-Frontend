import NoteIllustration from "../../../../assets/illustrations/notes-illustration";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";

const PrivateNoteNotFoundPageComponent = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-[18rem]">
        <NoteIllustration />
      </div>
      <div>
        <CustomLabel className="text-4xl font-display font-medium">
          No notes here...
        </CustomLabel>
      </div>
      <div>
        <CustomLabel className="text-xs font-display text-center">
          Add notes and get organize yourself in the best way!
        </CustomLabel>
      </div>
    </div>
  );
};

export default PrivateNoteNotFoundPageComponent;
