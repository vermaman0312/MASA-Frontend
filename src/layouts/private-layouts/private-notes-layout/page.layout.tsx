import { noteList } from "../../../mock/note-data";
import PrivateNotePadPageTemplate from "../../../templates/private-templates/private-notes-template/page.template";
import "../../../css/scroll-container.css";

const PrivateNotePageLayout = () => {
  return (
    <div className="w-full h-full">
      <PrivateNotePadPageTemplate items={noteList} />
    </div>
  );
};

export default PrivateNotePageLayout;
