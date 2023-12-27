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
  const { isDarkmode, partnersInfo, setPartnersInfo } =
    useFamBContextContainer();

  const [isEditing, setIsEditing] = useLocalStorage<isEditingType>(
    "nameEditing",
    {
      edited_1: false,
      edited_2: false,
    },
  );
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
          setPartnersInfo((prev) => ({
            ...prev,
            partner_1: prev.partner_1 === "" ? "Set name" : prev.partner_1,
          }));
        },
        { once: true },
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
          setPartnersInfo((prev) => ({
            ...prev,
            partner_2: prev.partner_2 === "" ? "Set name" : prev.partner_2,
          }));
        },
        { once: true },
      );
    }
  };

  const onChangeSalary = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeNum = e.target.dataset.clicked!;

    const numberTypeProver = (): number => {
      if (e.target.value.charAt(0) === "0" && e.target.value.length >= 1) {
        const numero = e.target.value.slice(1);
        return Number(numero);
      } else if (e.target.value.charAt(0) !== "0" && e.target.value !== "") {
        return parseInt(e.target.value, 10);
      }

      return 0;
    };

    numberTypeProver();

    changeNum === "1"
      ? setPartnersInfo((prev) => ({
          ...prev,
          salary_1: e.target.value.length === 0 ? 0 : parseInt(e.target.value),
        }))
      : setPartnersInfo((prev) => ({
          ...prev,
          salary_2: numberTypeProver(),
        }));
  };

  const onChageEditedName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeNum = e.currentTarget.dataset.clicked!;
    changeNum === "1"
      ? setPartnersInfo((prev) => ({ ...prev, partner_1: e.target.value }))
      : setPartnersInfo((prev) => ({ ...prev, partner_2: e.target.value }));
  };

  return (
    <article className="mb-4 grid place-items-center gap-2 xl:grid-cols-2">
      <div
        ref={firstPerson}
        className="relative before:absolute before:z-10 before:block before:h-[45%] before:w-0 before:origin-right before:-translate-x-1 before:-skew-x-[30deg] before:bg-zinc-500 before:duration-150 before:ease-in before:dark:bg-zinc-700"
      >
        {isEditing.edited_1 ? (
          <label className="relative mb-1 grid place-items-center">
            <input
              type="text"
              value={partnersInfo.partner_1}
              onChange={onChageEditedName}
              data-clicked={1}
              className="rounded-md bg-gray-400 px-1 dark:bg-gray-600 dark:text-darkmode"
            />
            <button
              onClick={onClickEditName}
              data-clicked={1}
              className="absolute -right-8 top-0 aspect-square h-7 rounded-md bg-gray-400 p-1 dark:bg-gray-600 md:h-6"
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
              className="absolute -right-8 top-0 aspect-square h-7 rounded-md bg-gray-400 p-1 dark:bg-gray-600 md:h-6"
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
            className="h-8 rounded-md bg-gray-400 bg-gradient-to-r px-2 py-1 text-black dark:bg-gray-600 dark:text-darkmode"
          />
        </label>
      </div>
      <div
        ref={secondPerson}
        className="relative before:absolute before:z-10 before:block before:h-[45%] before:w-0 before:origin-right before:-translate-x-1 before:-skew-x-[30deg] before:bg-zinc-500 before:duration-150 before:ease-in before:dark:bg-zinc-700"
      >
        {isEditing.edited_2 ? (
          <label className="relative mb-1 grid place-items-center">
            <input
              type="text"
              value={partnersInfo.partner_2}
              onChange={onChageEditedName}
              data-clicked={2}
              className="rounded-md bg-gray-400 px-1 dark:bg-gray-600 dark:text-darkmode"
            />
            <button
              onClick={onClickEditName}
              data-clicked={2}
              className="absolute -right-8 top-0 aspect-square h-7 rounded-md bg-gray-400 p-1 dark:bg-gray-600 md:h-6"
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
              className="absolute -right-8 top-0 aspect-square h-7 rounded-md bg-gray-400 p-1 dark:bg-gray-600 md:h-6"
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
            className="h-8 rounded-md bg-gray-400 bg-gradient-to-r px-2 py-1 text-black dark:bg-gray-600 dark:text-darkmode"
          />
        </label>
      </div>
    </article>
  );
};

export default FamBBisPartIncome;
