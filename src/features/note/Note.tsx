type NotePropsType = {
  id: number,
  shouldIncludeAuthor: boolean
}

// Maybe `use` signature
const use: <T>(promise: Promise<T>) => T

export const Note = ({id, shouldIncludeAuthor}: NotePropsType) => {
  /**
   * - Retrieves the results out of the Promise
   * - Suspend occurs if Promise is unresolved
   * - Need cache fetched results
   **/
  const note = use(fetchNote(id.toString()));

  let byline = null;
  if (shouldIncludeAuthor) {
    /**
     * Can be used in conditional branches.
     * Because this only retrieves the contents of the Promise, it does not require storage space.
     **/
    const author = use(fetchNoteAuthor(note.authorId));
    byline = <h2>{author.displayName}</h2>;
  }

  return (
    <div>
      <h1>{note.title}</h1>
      {byline}
      <section>{note.body}</section>
    </div>
  );
}

const fetchNote = async (id: string) => {
  const res = await fetch(`/api/note/${id}`);
  return res.json();
};
const fetchNoteAuthor = async (id: string) => {
  const res = await fetch(`/api/author/${id}`);
  return res.json();
};