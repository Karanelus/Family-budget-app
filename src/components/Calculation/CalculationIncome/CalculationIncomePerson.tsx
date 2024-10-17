import { useRef } from "react";
import { useAppContextContainer } from "../../../context/AppContext";
import CalculationIncomePersonDefault from "./CalculationIncomePersonDefault";
import CalculationIncomePersonEditing from "./CalculationIncomePersonEditing";

const CalculationIncomePerson = () => {
  const { currentDate, expensesList, setExpensesList } =
    useAppContextContainer();

  const firstPerson = useRef<HTMLDivElement>(null);
  const secondPerson = useRef<HTMLDivElement>(null);
  const refGiven = <T,>(condition: T): React.RefObject<HTMLDivElement> => {
    return condition === "1" ? firstPerson : secondPerson;
  };

  const onClickEditName = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedNum = e.currentTarget.dataset.clicked;
    const firstPersonRef = firstPerson.current!;
    const secondPersonRef = secondPerson.current!;
    const classChosen = clickedNum === "1" ? firstPersonRef : secondPersonRef;

    classChosen.classList.toggle("before:w-full");
    classChosen.classList.toggle("before:w-0");
    classChosen.addEventListener(
      "transitionend",
      () => {
        classChosen.classList.toggle("before:w-full");
        classChosen.classList.toggle("before:w-0");
        setExpensesList((prev) => ({
          ...prev,
          [currentDate.year]: {
            ...prev[currentDate.year],
            [currentDate.month]: {
              expenses: [...prev[currentDate.year][currentDate.month].expenses],
              persons: prev[currentDate.year][currentDate.month].persons.map(
                (partner) => {
                  if (partner.id === clickedNum) {
                    return {
                      ...partner,
                      edited: !partner.edited,
                      partner:
                        partner.partner === "" ? "Set name" : partner.partner,
                    };
                  }
                  return partner;
                },
              ),
            },
          },
        }));
      },
      { once: true },
    );
  };

  const onChangeSalary = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clickedNum = e.target.dataset.clicked!;
    const inputValue = e.target.value;
    const personSalary = () => {
      if (inputValue.length > 1 && inputValue.charAt(0) === "0") {
        e.target.value = parseInt(inputValue, 10).toString();
      }
      return parseInt(inputValue);
    };

    setExpensesList((prev) => ({
      ...prev,
      [currentDate.year]: {
        ...prev[currentDate.year],
        [currentDate.month]: {
          expenses: [...prev[currentDate.year][currentDate.month].expenses],
          persons: prev[currentDate.year][currentDate.month].persons.map(
            (partner) => {
              if (partner.id === clickedNum) {
                return {
                  ...partner,
                  salary: e.target.value === "" ? 0 : Number(personSalary()),
                };
              }

              return partner;
            },
          ),
        },
      },
    }));
  };

  const onChangeEditedName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clickedNum = e.currentTarget.dataset.clicked!;

    setExpensesList((prev) => ({
      ...prev,
      [currentDate.year]: {
        ...prev[currentDate.year],
        [currentDate.month]: {
          expenses: [...prev[currentDate.year][currentDate.month].expenses],
          persons: prev[currentDate.year][currentDate.month].persons.map(
            (partner) => {
              if (partner.id === clickedNum) {
                return { ...partner, partner: e.target.value };
              }

              return partner;
            },
          ),
        },
      },
    }));
  };

  return (
    <>
      {expensesList[currentDate.year][currentDate.month].persons.map(
        (person) =>
          person.edited ? (
            <CalculationIncomePersonEditing
              key={person.id}
              reference={refGiven(person.id)}
              id={person.id}
              personName={person.partner}
              personSalary={person.salary}
              onClickEditName={onClickEditName}
              onChangeEditedName={onChangeEditedName}
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
