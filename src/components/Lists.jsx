import List from "./List";

const Lists = ({ lists, setLists }) => {
  const handleRemoveList = (id) => {
    let updatedList = [...lists];
    updatedList = updatedList.filter((list) => list.id !== id);
    setLists(updatedList);
  };
  return (
    <div className="w-[80%] flex flex-wrap justify-center gap-4">
      {lists.map((l) => {
        return <List key={l.id} list={l} onClick={handleRemoveList} />;
      })}
    </div>
  );
};

export default Lists;
