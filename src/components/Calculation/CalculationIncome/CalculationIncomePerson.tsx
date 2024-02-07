import { useRef } from "react";
import { useAppContextContainer } from "../../../context/AppContext";
import CalculationIncomePersonDefault from "./CalculationIncomePersonDefault";
import CalculationIncomePersonEditing from "./CalculationIncomePersonEditing";

const CalculationIncomePerson = () => {
  const { partnersInfo, setPartnersInfo } = useAppContextContainer();

  const firstPerson = useRef<HTMLDivElement>(null);
  const secondPerson = useRef<HTMLDivElement>(null);
  const refGiven = <T,>(condition: T): React.RefObject<HTMLDivElement> => {
    return condition === "1" ? firstPerson : secondPerson;
  };

  const onClickEditName = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedNum = e.currentTarget.dataset.clicked;
    const firstPersonRef = firstPerson.current!;
    const secondPersonRef = secondPerson.current!;
    const classChoosen = clickedNum === "1" ? firstPersonRef : secondPersonRef;

    classChoosen.classList.toggle("before:w-full");
    classChoosen.classList.toggle("before:w-0");
    classChoosen.addEventListener(
      "transitionend",
      () => {
        classChoosen.classList.toggle("before:w-full");
        classChoosen.classList.toggle("before:w-0");
        setPartnersInfo((partner) =>
          partner.map((element) => {
            if (element.id === clickedNum) {
              return {
                ...element,
                edited: !element.edited,
                partner: element.partner === "" ? "Set name" : element.partner,
              };
            }
            return element;
          }),
        );
      },
      { once: true },
    );
  };

  const onChangeSalary = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clickedNum = e.target.dataset.clicked!;

    setPartnersInfo((partner) =>
      partner.map((element) => {
        if (element.id === clickedNum) {
          return {
            ...element,
            salary: e.target.value === "" ? 0 : Number(e.target.value),
          };
        }

        return element;
      }),
    );
  };

  const onChageEditedName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clickedNum = e.currentTarget.dataset.clicked!;

    setPartnersInfo((partner) =>
      partner.map((element) => {
        if (element.id === clickedNum) {
          return { ...element, partner: e.target.value };
        }

        return element;
      }),
    );
  };

  return (
    <>
      {partnersInfo.map((person) =>
        person.edited ? (
          <CalculationIncomePersonEditing
            key={person.id}
            reference={refGiven(person.id)}
            id={person.id}
            personName={person.partner}
            personSalary={person.salary}
            onClickEditName={onClickEditName}
            onChageEditedName={onChageEditedName}
            onChangeSalary={onChangeSalary}
          />
        ) : (
          <CalculationIncomePersonDefault
            key={person.id}
            reference={refGiven(person.id)}
            id={person.id}
            personName={person.partner}
            personSalary={person.salary}
            onClickEditName={onClickEditName}
            onChangeSalary={onChangeSalary}
          />
        ),
      )}
    </>
  );
};

export default CalculationIncomePerson;
