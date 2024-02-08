import Logo from "./assets/Logo.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

const note = { date: new Date(), content: "Oi" };

export const App = () => {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={Logo} alt="NLW Expert" />
      <form action="" className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />
        <NoteCard note={note} />
        <NoteCard note={note} />
        <NoteCard note={note} />
        <NoteCard note={note} />
      </div>
    </div>
  );
};