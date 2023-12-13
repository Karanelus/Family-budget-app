import { useFamBContextContainer } from "../../../../../context/FamBContext";
import ConfirmIcon from "../../../../../svg/ConfirmIcon";
import DeleteIcon from "../../../../../svg/DeleteIcon";
import EditIcon from "../../../../../svg/EditIcon";

const FamBBisPartFeesRender = () => {
  const { feeList, setFeeList, isDarkmode } = useFamBContextContainer();

  return (
    <>
      {feeList.map((el) => {
        const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
          setFeeList((prev) =>
            prev.map((item) => {
              if (item.id === el.id) {
                return { ...item, name: e.target.value };
              }

              return item;
            })
          );
        };

        const onChangeFeeCost = (e: React.ChangeEvent<HTMLInputElement>) => {
          setFeeList((prev) =>
            prev.map((item) => {
              if (item.id === el.id) {
                return { ...item, feeCost: e.target.value === "" ? 0 : parseInt(e.target.value) };
              }

              return item;
            })
          );
        };

        const onClickEdited = () => {
          setFeeList((prev) =>
            prev.map((item) => {
              if (item.id === el.id) {
                return { ...item, isEdited: !el.isEdited, name: el.name === "" ? "Name the item" : el.name };
              }

              return item;
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
                  className="text-black dark:text-darkmode py-1 px-2 rounded-md bg-gray-400 dark:bg-gray-600 placeholder:text-zinc-700 w-full"
                />
              </label>
              <button
                onClick={onClickEdited}
                className="bg-gray-400 dark:bg-gray-600 rounded-md h-8 py-1 px-2 aspect-square"
              >
                <ConfirmIcon fill={isDarkmode ? "#999999" : "black"} />
              </button>
              <button
                onClick={onClickDelete}
                className="bg-gray-400 dark:bg-gray-600 rounded-md h-8 py-1 px-2 aspect-square"
              >
                <DeleteIcon fill={isDarkmode ? "#999999" : "black"} />
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
              <div className="flex flex-row gap-2 md:w-auto w-full">
                <label className="md:w-auto w-full">
                  <input
                    type="number"
                    placeholder="Fee"
                    onChange={onChangeFeeCost}
                    value={el.feeCost}
                    className="text-black dark:text-darkmode py-1 px-2 rounded-md bg-gradient-to-l bg-gray-400 dark:bg-gray-600 placeholder:text-zinc-600 md:w-auto w-full"
                  />
                </label>
                <div className=" h-full gap-2 flex">
                  <button
                    onClick={onClickEdited}
                    className="bg-gray-400 dark:bg-gray-600 rounded-md h-full w-8 py-1 px-2 aspect-square"
                  >
                    <EditIcon fill={isDarkmode ? "#999999" : "black"} />
                  </button>
                  <button
                    onClick={onClickDelete}
                    className="bg-gray-400 dark:bg-gray-600 rounded-md h-full w-8 py-1 px-2 aspect-square"
                  >
                    <DeleteIcon fill={isDarkmode ? "#999999" : "black"} />
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
