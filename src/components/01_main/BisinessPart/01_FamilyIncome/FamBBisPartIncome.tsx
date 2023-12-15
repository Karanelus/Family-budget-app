import { useRef } from "react";
import { useFamBContextContainer } from "../../../../context/FamBContext";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import ConfirmIcon from "../../../../svg/ConfirmIcon";
import EditIcon from "../../../../svg/EditIcon";

type isEditingType = {
  edited_1: boolean;
  edited_2: boolean;
};

const FamBBisPartIncome = () => {
  const { isDarkmode, partnersInfo, setPartnersInfo } = useFamBContextContainer();

  const [isEditing, setIsEditing] = useLocalStorage<isEditingType>("nameEditing", {
    edited_1: false,
    edited_2: false,
  });
  const firstPerson = useRef<HTMLDivElement>(null);
  const secondPerson = useRef<HTMLDivElement>(null);

  const onClickEditName = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedNum = e.currentTarget.dataset.clicked!;
    const firstPersonRef = firstPerson.current!;
    const secondPersonRef = secondPerson.current!;
    if (clickedNum === "1") {
      firstPersonRef.classList.toggle("before:w-full");
      firstPersonRef.classList.toggle("before:w-0");
      firstPersonRef.addEventListener(
        "transitionend",
        () => {
          firstPersonRef.classList.toggle("before:w-full");
          firstPersonRef.classList.toggle("before:w-0");
          setIsEditing((prev) => ({ ...prev, edited_1: !prev.edited_1 }));
          setPartnersInfo((prev) => ({ ...prev, partner_1: prev.partner_1 === "" ? "Set name" : prev.partner_1 }));
        },
        { once: true }
      );
    } else {
      secondPersonRef.classList.toggle("before:w-full");
      secondPersonRef.classList.toggle("before:w-0");
      secondPersonRef.addEventListener(
        "transitionend",
        () => {
          secondPersonRef.classList.toggle("before:w-full");
          secondPersonRef.classList.toggle("before:w-0");
          setIsEditing((prev) => ({ ...prev, edited_2: !prev.edited_2 }));
          setPartnersInfo((prev) => ({ ...prev, partner_2: prev.partner_2 === "" ? "Set name" : prev.partner_2 }));
        },
        { once: true }
      );
    }
  };

  const onChangeSalary = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeNum = e.target.dataset.clicked!;
    changeNum === "1"
      ? setPartnersInfo((prev) => ({ ...prev, salary_1: e.target.value === "" ? 0 : parseInt(e.target.value) }))
      : setPartnersInfo((prev) => ({ ...prev, salary_2: e.target.value === "" ? 0 : parseInt(e.target.value) }));
  };

  const onChageEditedName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeNum = e.currentTarget.dataset.clicked!;
    changeNum === "1"
      ? setPartnersInfo((prev) => ({ ...prev, partner_1: e.target.value }))
      : setPartnersInfo((prev) => ({ ...prev, partner_2: e.target.value }));
  };

  return (
    <article className="grid xl:grid-cols-2 place-items-center mb-4 gap-2">
      <div
        ref={firstPerson}
        className="before:h-[45%] before:block before:absolute before:w-0 before:bg-zinc-500 before:dark:bg-zinc-700 before:-skew-x-[30deg] before:ease-in before:-translate-x-1 before:origin-right before:z-10 relative before:duration-150"
      >
        {isEditing.edited_1 ? (
          <label className="relative grid mb-1 place-items-center">
            <input
              type="text"
              value={partnersInfo.partner_1}
              onChange={onChageEditedName}
              data-clicked={1}
              className="bg-gray-400 dark:bg-gray-600 rounded-md px-1 dark:text-darkmode"
            />
            <button
              onClick={onClickEditName}
              data-clicked={1}
              className="absolute top-0 -right-8 md:h-6 h-7 p-1 aspect-square bg-gray-400 dark:bg-gray-600 rounded-md"
            >
              <ConfirmIcon fill={isDarkmode ? "#999999" : "black"} />
            </button>
          </label>
        ) : (
          <div className="relative">
            <p className="text-center">{partnersInfo.partner_1}</p>
            <button
              onClick={onClickEditName}
              data-clicked={1}
              className="absolute top-0 -right-8 md:h-6 h-7 p-1 aspect-square bg-gray-400 dark:bg-gray-600 rounded-md"
            >
              <EditIcon fill={isDarkmode ? "#999999" : "black"} />
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
            className="text-black dark:text-darkmode py-1 px-2 rounded-md bg-gradient-to-r bg-gray-400 dark:bg-gray-600 h-8"
          />
        </label>
      </div>
      <div
        ref={secondPerson}
        className="before:h-[45%] before:block before:absolute before:w-0 before:bg-zinc-500 before:dark:bg-zinc-700 before:-skew-x-[30deg] before:ease-in before:-translate-x-1 before:origin-right before:z-10 relative before:duration-150"
      >
        {isEditing.edited_2 ? (
          <label className="relative grid mb-1 place-items-center">
            <input
              type="text"
              value={partnersInfo.partner_2}
              onChange={onChageEditedName}
              data-clicked={2}
              className="bg-gray-400 dark:bg-gray-600 rounded-md px-1 dark:text-darkmode"
            />
            <button
              onClick={onClickEditName}
              data-clicked={2}
              className="absolute top-0 -right-8 md:h-6 h-7 p-1 aspect-square bg-gray-400 dark:bg-gray-600 rounded-md"
            >
              <ConfirmIcon fill={isDarkmode ? "#999999" : "black"} />
            </button>
          </label>
        ) : (
          <div className="relative">
            <p className="text-center">{partnersInfo.partner_2}</p>
            <button
              onClick={onClickEditName}
              data-clicked={2}
              className="absolute top-0 -right-8 md:h-6 h-7 p-1 aspect-square bg-gray-400 dark:bg-gray-600 rounded-md"
            >
              <EditIcon fill={isDarkmode ? "#999999" : "black"} />
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
            className="text-black dark:text-darkmode py-1 px-2 rounded-md bg-gradient-to-r bg-gray-400 dark:bg-gray-600 h-8"
          />
        </label>
      </div>
    </article>
  );
};

export default FamBBisPartIncome;
