import { useAppContextContainer } from "../../../../context/AppContext";
import ConfirmIcon from "../../../../svg/ConfirmIcon";
import DeleteIcon from "../../../../svg/DeleteIcon";
import EditIcon from "../../../../svg/EditIcon";

const FamBBisPartFeesRender = () => {
  const { feeList, setFeeList, isDarkmode } = useAppContextContainer();

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
            }),
          );
        };

        const onChangeFeeCost = (e: React.ChangeEvent<HTMLInputElement>) => {
          setFeeList((prev) =>
            prev.map((item) => {
              if (item.id === el.id) {
                return {
                  ...item,
                  feeCost: e.target.value === "" ? 0 : parseInt(e.target.value),
                };
              }

              return item;
            }),
          );
        };

        const onClickEdited = () => {
          setFeeList((prev) =>
            prev.map((item) => {
              if (item.id === el.id) {
                return {
                  ...item,
                  isEdited: !el.isEdited,
                  name: el.name === "" ? "Name the item" : el.name,
                };
              }

              return item;
            }),
          );
        };

        const onClickDelete = () => {
          setFeeList((prev) =>
            prev.filter((item) => {
              return item.id !== el.id;
            }),
          );
        };

        if (el.isEdited === true) {
          return (
            <article key={el.id} className="flex w-full animate-fee gap-2">
              <label className=" w-full">
                <input
                  type="text"
                  placeholder="Fee"
                  onChange={onChangeName}
                  value={el.name}
                  className="w-full rounded-md bg-gray-400 px-2 py-1 text-black placeholder:text-zinc-700 dark:bg-gray-600 dark:text-darkmode"
                />
              </label>
              <button
                onClick={onClickEdited}
                className="aspect-square h-8 rounded-md bg-gray-400 px-2 py-1 dark:bg-gray-600"
              >
                <ConfirmIcon fill={isDarkmode ? "#999999" : "black"} />
              </button>
              <button
                onClick={onClickDelete}
                className="aspect-square h-8 rounded-md bg-gray-400 px-2 py-1 dark:bg-gray-600"
              >
                <DeleteIcon fill={isDarkmode ? "#999999" : "black"} />
              </button>
            </article>
          );
        } else {
          return (
            <article
              key={el.id}
              className="flex w-full flex-col items-center justify-center md:flex-row md:justify-between"
            >
              <h3>{el.name}</h3>
              <div className="flex w-full flex-row gap-2 md:w-auto">
                <label className="w-full md:w-auto">
                  <input
                    type="number"
                    placeholder="Fee"
                    onChange={onChangeFeeCost}
                    value={el.feeCost}
                    className="w-full rounded-md bg-gray-400 bg-gradient-to-l px-2 py-1 text-black placeholder:text-zinc-600 dark:bg-gray-600 dark:text-darkmode md:w-auto"
                  />
                </label>
                <div className=" flex h-full gap-2">
                  <button
                    onClick={onClickEdited}
                    className="aspect-square h-full w-8 rounded-md bg-gray-400 px-2 py-1 dark:bg-gray-600"
                  >
                    <EditIcon fill={isDarkmode ? "#999999" : "black"} />
                  </button>
                  <button
                    onClick={onClickDelete}
                    className="aspect-square h-full w-8 rounded-md bg-gray-400 px-2 py-1 dark:bg-gray-600"
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
