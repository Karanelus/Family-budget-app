import { useFamBContextContainer } from "../../../../context/FamBContext";
import useLocalStorage from "../../../../hooks/useLocalStorage";

type isEditingType = {
  edited_1: boolean;
  edited_2: boolean;
};

const FamBBisPartIncome = () => {
  const { partnersInfo, setPartnersInfo } = useFamBContextContainer();
  const [isEditing, setIsEditing] = useLocalStorage<isEditingType>("nameEditing", {
    edited_1: false,
    edited_2: false,
  });

  const onClickEditName = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedNum = e.currentTarget.dataset.clicked!;
    if (clickedNum === "1") {
      setIsEditing((prev) => ({ ...prev, edited_1: !prev.edited_1 }));
      setPartnersInfo((prev) => ({ ...prev, partner_1: prev.partner_1 === "" ? "Set name" : prev.partner_1 }));
    } else if (clickedNum === "2") {
      setIsEditing((prev) => ({ ...prev, edited_2: !prev.edited_2 }));
      setPartnersInfo((prev) => ({ ...prev, partner_2: prev.partner_2 === "" ? "Set name" : prev.partner_2 }));
    }
  };

  const onChangeSalary = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clickedNum = e.target.dataset.clicked!;
    clickedNum === "1"
      ? setPartnersInfo((prev) => ({ ...prev, salary_1: e.target.value === "" ? 0 : parseInt(e.target.value) }))
      : setPartnersInfo((prev) => ({ ...prev, salary_2: e.target.value === "" ? 0 : parseInt(e.target.value) }));
  };

  const onChageEditedName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clickedNum = e.currentTarget.dataset.clicked!;
    clickedNum === "1"
      ? setPartnersInfo((prev) => ({ ...prev, partner_1: e.target.value }))
      : setPartnersInfo((prev) => ({ ...prev, partner_2: e.target.value }));
  };

  return (
    <article className="grid grid-cols-2 place-items-center mb-4">
      <div>
        {isEditing.edited_1 ? (
          <label className="relative grid mb-1 place-items-center">
            <input
              type="text"
              value={partnersInfo.partner_1}
              onChange={onChageEditedName}
              data-clicked={1}
              className="bg-slate-400 rounded-md px-1"
            />
            <button onClick={onClickEditName} data-clicked={1} className="absolute top-0 -right-6 aspect-square w-7">
              <img src={process.env.PUBLIC_URL + "/img/icons/edit.svg"} alt="" className="w-full" />
            </button>
          </label>
        ) : (
          <div className="relative">
            <p className="text-center">{partnersInfo.partner_1}</p>
            <button onClick={onClickEditName} data-clicked={1} className="absolute top-0 -right-6 aspect-square w-7">
              <img src={process.env.PUBLIC_URL + "/img/icons/edit.svg"} alt="" className="w-full" />
            </button>
          </div>
        )}
        <label>
          <input
            type="number"
            placeholder="Salary"
            value={partnersInfo.salary_1}
            onChange={onChangeSalary}
            data-clicked={1}
            className="text-black py-1 px-2 rounded-md bg-gradient-to-r from-slate-500 to-slate-400 h-8"
          />
        </label>
      </div>
      <div>
        {isEditing.edited_2 ? (
          <label className="relative grid mb-1 place-items-center">
            <input
              type="text"
              value={partnersInfo.partner_2}
              onChange={onChageEditedName}
              data-clicked={2}
              className="bg-slate-400 rounded-md px-1"
            />
            <button onClick={onClickEditName} data-clicked={2} className="absolute top-0 -right-6 aspect-square w-7">
              <img src={process.env.PUBLIC_URL + "/img/icons/edit.svg"} alt="" className="w-full" />
            </button>
          </label>
        ) : (
          <div className="relative">
            <p className="text-center">{partnersInfo.partner_2}</p>
            <button onClick={onClickEditName} data-clicked={2} className="absolute top-0 -right-6 aspect-square w-7">
              <img src={process.env.PUBLIC_URL + "/img/icons/edit.svg"} alt="" className="w-full" />
            </button>
          </div>
        )}
        <label>
          <input
            type="number"
            placeholder="Salary"
            value={partnersInfo.salary_2}
            onChange={onChangeSalary}
            data-clicked={2}
            className="text-black py-1 px-2 rounded-md bg-gradient-to-r from-slate-500 to-slate-400 h-8"
          />
        </label>
      </div>
    </article>
  );
};

export default FamBBisPartIncome;
