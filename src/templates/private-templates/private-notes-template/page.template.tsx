import { useCallback, useState } from "react";
import "../../../css/scroll-container.css";
import PrivateNotesHeadingPageComponent from "./components/page.noteheading.component";
import PrivateNoteDetailsPageComponent from "./components/page.notedetails.component";
import PrivateNoteNotFoundPageComponent from "./components/page.notfound.component";
import CustomLoader from "../../../components/custom-loader/custom-loader.component";
import CustomAlertDialogBox from "../../../components/custom-alert-dialogbox/custom.alert-dialogbox.component";
import PrivateNoteFormPageComponent from "./components/page.noteform.component";

type noteType = {
  id: string;
  title: string;
  description: string | undefined;
  isSelected: boolean;
  isHide: boolean;
  isPinned: boolean;
  isDeleted: boolean;
  timeStamp: Date;
};

type props = {
  items?: Array<noteType>;
};

const PrivateNotePadPageTemplate = ({ items }: props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCreateNoteOpen, setIsCreateNoteOpen] = useState<boolean>(false);
  const [notes, setNotes] = useState<Array<noteType>>(items || []);
  const [addNote, setAddNote] = useState<noteType>({
    id: "",
    title: "",
    description: "",
    isSelected: false,
    isHide: false,
    isPinned: false,
    isDeleted: false,
    timeStamp: new Date(),
  });
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [isNotePadOpen, setIsNotePadOpen] = useState<boolean>(false);
  const [isNoteDetails, setIsNoteDetails] = useState<noteType>();
  const [isDeletedNoteOpen, setIsDeletedNoteOpen] = useState<boolean>(false);
  const [noteId, setNoteId] = useState<string>("");

  const onChangeNoteTitle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setAddNote({
        ...addNote,
        id: Math.floor(Math.random() * 16777215).toString(16),
        title: event.target.value,
        description: " ",
      });
    },
    [addNote]
  );
  const handleCreateNote = useCallback(() => {
    setNotes((currentNotes) => [...currentNotes, addNote]);
    setIsCreateNoteOpen(false);
  }, [addNote]);
  const handleSelectUnSelect = useCallback((id: string) => {
    setNotes((currentNotes) =>
      currentNotes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            isSelected: !note.isSelected,
          };
        }
        return note;
      })
    );
  }, []);
  const handlePinnedUnPinned = useCallback((id: string) => {
    setNotes((currentNotes) =>
      currentNotes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            isPinned: !note.isPinned,
          };
        }
        return note;
      })
    );
  }, []);
  const handleHideUnhide = useCallback((id: string) => {
    setNotes((currentNotes) =>
      currentNotes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            isHide: !note.isHide,
          };
        }
        return note;
      })
    );
  }, []);
  const handleNoteDelete = useCallback(() => {
    setNotes((currentNotes) =>
      currentNotes.map((note) => {
        if (note.id === noteId) {
          return {
            ...note,
            isDeleted: !note.isDeleted,
          };
        }
        return note;
      })
    );
  }, [noteId]);
  const handleUpdateNote = useCallback(() => {
    setNotes((currentNotes) =>
      currentNotes.map((note) => {
        if (note.id === noteId) {
          return {
            ...note,
            description: isNoteDetails?.description,
          };
        }
        return note;
      })
    );
  }, [isNoteDetails?.description, noteId]);
  return (
    <div className="w-full h-full">
      <div>
        <PrivateNotesHeadingPageComponent
          isOpen={isCreateNoteOpen}
          onOpenChange={setIsCreateNoteOpen}
          onClickAddNote={() => setIsCreateNoteOpen(true)}
          onChange={onChangeNoteTitle}
          onSubmitAddNot={handleCreateNote}
          onClickUnhide={() => setIsHidden(false)}
          onClickHide={() => setIsHidden(true)}
          isHidden={isHidden}
        />
      </div>
      <div>
        {!isNotePadOpen && (
          <div>
            {notes && notes.length > 0 ? (
              <div className="w-full grid grid-cols-2 md:grid-cols-6 gap-2 mt-5 p-1">
                {!isHidden &&
                  notes
                    .filter((note) => !note.isHide && !note.isDeleted)
                    ?.sort((a, b) => Number(b.isPinned) - Number(a.isPinned))
                    .map((note, index) => {
                      return (
                        <PrivateNoteDetailsPageComponent
                          key={index}
                          onClick={() => {
                            setNoteId(note.id);
                            setIsNoteDetails(note);
                            setIsLoading(true);
                            setTimeout(() => {
                              setIsLoading(false);
                              setIsNotePadOpen(true);
                            }, 500);
                          }}
                          title={note.title}
                          isSelected={note.isSelected}
                          isPinned={note.isPinned}
                          isHide={note.isHide}
                          timeStamp={note.timeStamp}
                          description={note.description}
                          onClickSelectUnSelect={() =>
                            handleSelectUnSelect(note.id)
                          }
                          onClickHideUnhide={() => handleHideUnhide(note.id)}
                          onClickPinnedUnPinned={() =>
                            handlePinnedUnPinned(note.id)
                          }
                          onClickDelete={() => {
                            setNoteId(note.id);
                            setIsDeletedNoteOpen(true);
                          }}
                        />
                      );
                    })}

                {isHidden &&
                  notes
                    .filter((note) => note.isHide && !note.isDeleted)
                    ?.sort((a, b) => Number(b.isPinned) - Number(a.isPinned))
                    ?.slice()
                    ?.reverse()
                    .map((note, index) => {
                      return (
                        <PrivateNoteDetailsPageComponent
                          key={index}
                          onClick={() => {
                            setNoteId(note.id);
                            setIsNoteDetails(note);
                            setIsLoading(true);
                            setTimeout(() => {
                              setIsLoading(false);
                              setIsNotePadOpen(true);
                            }, 500);
                          }}
                          title={note.title}
                          isSelected={note.isSelected}
                          isPinned={note.isPinned}
                          isHide={note.isHide}
                          timeStamp={note.timeStamp}
                          description={note.description}
                          onClickSelectUnSelect={() =>
                            handleSelectUnSelect(note.id)
                          }
                          onClickHideUnhide={() => handleHideUnhide(note.id)}
                          onClickPinnedUnPinned={() =>
                            handlePinnedUnPinned(note.id)
                          }
                          onClickDelete={() => {
                            setNoteId(note.id);
                            setIsDeletedNoteOpen(true);
                          }}
                        />
                      );
                    })}
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <PrivateNoteNotFoundPageComponent />
              </div>
            )}
          </div>
        )}
      </div>

      <div>
        <div>
          {isNotePadOpen && (
            <div className="h-[50px] w-full mt-5">
              <PrivateNoteFormPageComponent
                onClickBack={() => setIsNotePadOpen(false)}
                value={isNoteDetails?.description}
                title={isNoteDetails?.title}
                timeStamp={isNoteDetails?.timeStamp}
                setValue={(value) =>
                  setIsNoteDetails((prevState) => ({
                    ...prevState,
                    description: value,
                    id: prevState?.id ?? "",
                    title: prevState?.title ?? "",
                    isSelected: prevState?.isSelected ?? false,
                    isHide: prevState?.isHide ?? false,
                    isPinned: prevState?.isPinned ?? false,
                    isDeleted: prevState?.isDeleted ?? false,
                    timeStamp: new Date(),
                  }))
                }
                onClick={handleUpdateNote}
              />
            </div>
          )}
        </div>
        <div>
          <CustomAlertDialogBox
            isDeleteOpen={isDeletedNoteOpen}
            onOpenChange={setIsDeletedNoteOpen}
            title="Are you absolutely sure?"
            description="This action cannot be undone. This will permanently delete your
            account and remove your data from our servers."
            buttonTitle1="Cancel"
            buttonTitle2="Delete"
            onClick={handleNoteDelete}
          />
        </div>
        <div>{isLoading && <CustomLoader />}</div>
      </div>
    </div>
  );
};

export default PrivateNotePadPageTemplate;
