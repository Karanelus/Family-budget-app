import { useAppContextContainer } from "../../../context/AppContext";
import CalculationExpenseUnitDefault from "./CalculationExpenseUnitDefault";
import CalculationExpenseUnitEdited from "./CalculationExpenseUnitEdited";

const CalculationExpenseUnit = () => {
  const { expensesList, setExpensesList, currentDate } =
    useAppContextContainer();

  return (
    <section className="flex w-full flex-col gap-2">
      {expensesList[currentDate.year][currentDate.month].expenses.map(
        (expense) => {
          const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
            setExpensesList((prev) => ({
              ...prev,
              [currentDate.year]: {
                [currentDate.month]: {
                  expenses: prev[currentDate.year][
                    currentDate.month
                  ].expenses.map((item) => {
                    if (item.id === expense.id) {
                      return { ...item, name: e.target.value };
                    }

                    return item;
                  }),
                  persons: [
                    ...prev[currentDate.year][currentDate.month].persons,
                  ],
                },
              },
            }));
          };

          const onChangeExpenseCost = (
            e: React.ChangeEvent<HTMLInputElement>,
          ) => {
            const inputValue = e.target.value;
            const expenseCost = () => {
              if (inputValue.length > 1 && inputValue.charAt(0) === "0") {
                e.target.value = parseInt(inputValue, 10).toString();
              }
              return parseInt(inputValue);
            };

            setExpensesList((prev) => ({
              ...prev,
              [currentDate.year]: {
                [currentDate.month]: {
                  expenses: prev[currentDate.year][
                    currentDate.month
                  ].expenses.map((item) => {
                    if (item.id === expense.id) {
                      return {
                        ...item,
                        feeCost: e.target.value === "" ? 0 : expenseCost(),
                      };
                    }

                    return item;
                  }),
                  persons: [
                    ...prev[currentDate.year][currentDate.month].persons,
                  ],
                },
              },
            }));
          };

          const onClickEdited = () => {
            setExpensesList((prev) => ({
              ...prev,
              [currentDate.year]: {
                [currentDate.month]: {
                  expenses: prev[currentDate.year][
                    currentDate.month
                  ].expenses.map((item) => {
                    if (item.id === expense.id) {
                      return {
                        ...item,
                        isEdited: !expense.isEdited,
                        name:
                          expense.name === "" ? "Name the item" : expense.name,
                      };
                    }

                    return item;
                  }),
                  persons: [
                    ...prev[currentDate.year][currentDate.month].persons,
                  ],
                },
              },
            }));
          };

          const onSubmitEdited = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            setExpensesList((prev) => ({
              ...prev,
              [currentDate.year]: {
                [currentDate.month]: {
                  expenses: prev[currentDate.year][
                    currentDate.month
                  ].expenses.map((item) => {
                    if (item.id === expense.id) {
                      return {
                        ...item,
                        isEdited: !expense.isEdited,
                        name:
                          expense.name === "" ? "Name the item" : expense.name,
                      };
                    }

                    return item;
                  }),
                  persons: [
                    ...prev[currentDate.year][currentDate.month].persons,
                  ],
                },
              },
            }));
          };

          const onClickDelete = () => {
            setExpensesList((prev) => ({
              ...prev,
              [currentDate.year]: {
                [currentDate.month]: {
                  expenses: prev[currentDate.year][
                    currentDate.month
                  ].expenses.filter((item) => {
                    return item.id !== expense.id;
                  }),
                  persons: [
                    ...prev[currentDate.year][currentDate.month].persons,
                  ],
                },
              },
            }));
          };

          return expense.isEdited ? (
            <CalculationExpenseUnitEdited
              key={expense.name}
              feeName={expense.name}
              onChangeName={onChangeName}
              onSubmitName={onSubmitEdited}
              onClickDelete={onClickDelete}
              onClickEdited={onClickEdited}
            />
          ) : (
            <CalculationExpenseUnitDefault
              key={expense.name}
              feeName={expense.name}
              onClickDelete={onClickDelete}
              onClickEdited={onClickEdited}
              feeCost={expense.feeCost}
              onChangeFeeCost={onChangeExpenseCost}
            />
          );
        },
      )}
    </section>
  );
};

export default CalculationExpenseUnit;
