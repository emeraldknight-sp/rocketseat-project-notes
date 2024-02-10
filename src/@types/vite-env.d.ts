/// <reference types="vite/client" />
interface Note {
  id: string;
  date: Date;
  content: string;
}

interface NoteCardProps {
  note: {
    id: string;
    date: Date;
    content: string;
  };
  onNoteDeleted: (id: string) => void;
}

interface NewNoteCardProps {
  onNoteCreated: (content: string) => void;
}
