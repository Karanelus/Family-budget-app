import { useFamBContextContainer } from "../../../../../context/FamBContext";
// import { v4 as uuidv4 } from "uuid";

const FamBBisPartFeesRender = () => {
  const { feeList, setFeeList } = useFamBContextContainer();

  return (
    <>
      {feeList.map((el) => {
        const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
          setFeeList((prev) =>
            prev.map((item) => {
              if (item.id === el.id) {
                return { ...item, name: e.target.value };
              } else return item;
            })
          );
        };

        const onChangeFeeCost = (e: React.ChangeEvent<HTMLInputElement>) => {
          setFeeList((prev) =>
            prev.map((item) => {
              if (item.id === el.id) {
                return { ...item, feeCost: e.target.value === "" ? 0 : parseInt(e.target.value) };
              } else return item;
            })
          );
        };

        const onClickEdited = () => {
          setFeeList((prev) =>
            prev.map((item) => {
              if (item.id === el.id) {
                return { ...item, isEdited: !el.isEdited, name: el.name === "" ? "Name the item" : el.name };
              } else return item;
            })
          );
        };

        const onClickDelete = () => {
          setFeeList((prev) =>
            prev.filter((item) => {
              return item.id !== el.id;
            })
          );
        };

        if (el.isEdited === true) {
          return (
            <article key={el.id} className="flex gap-2 w-full animate-fee">
              <label className=" w-full">
                <input
                  type="text"
                  placeholder="Fee"
                  onChange={onChangeName}
                  value={el.name}
                  className="text-black py-1 px-2 rounded-md bg-zinc-400 placeholder:text-zinc-700 w-full"
                />
              </label>
              <button onClick={onClickEdited} className="bg-slate-500 rounded-md w-8">
                +
              </button>
            </article>
          );
        } else {
          return (
            <article
              key={el.id}
              className="flex md:justify-between w-full md:flex-row flex-col justify-center items-center"
            >
              <h3>{el.name}</h3>
              <div className="flex flex-row gap-2 ">
                <label>
                  <input
                    type="number"
                    placeholder="Fee"
                    onChange={onChangeFeeCost}
                    value={el.feeCost}
                    className="text-black py-1 px-2 rounded-md bg-gradient-to-l from-slate-500 to-slate-400 placeholder:text-zinc-600"
                  />
                </label>
                <div className=" h-full gap-2 flex">
                  <button onClick={onClickDelete} className="bg-slate-500 rounded-md h-full w-8 py-1 px-2">
                    Del
                  </button>
                  <button onClick={onClickEdited} className="bg-slate-500 rounded-md h-full w-8 py-1 px-2 ">
                    Edit
                  </button>
                </div>
              </div>
            </article>
          );
        }
      })}
    </>
  );
};

export default FamBBisPartFeesRender;
