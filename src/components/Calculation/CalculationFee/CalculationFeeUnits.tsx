import { useAppContextContainer } from "../../../context/AppContext";
import CalculationFeeUnitDefault from "./CalculationFeeUnitDefault";
import CalculationFeeUnitEdited from "./CalculationFeeUnitEdited";
import styles from "../Calculator.styles";

const CalculationFeeUnit = () => {
  const { expensesList, setExpensesList, currentDate } =
    useAppContextContainer();
  const stylesShortcut = styles.expensesSection;

  return (
    <section className={stylesShortcut.render}>
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

          const onChangeFeeCost = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                        feeCost:
                          e.target.value === "" ? 0 : parseInt(e.target.value),
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
            <CalculationFeeUnitEdited
              key={expense.name}
              feeName={expense.name}
              onChangeName={onChangeName}
              onSubmitName={onSubmitEdited}
              onClickDelete={onClickDelete}
              onClickEdited={onClickEdited}
            />
          ) : (
            <CalculationFeeUnitDefault
              key={expense.name}
              feeName={expense.name}
              onClickDelete={onClickDelete}
              onClickEdited={onClickEdited}
              feeCost={expense.feeCost}
              onChangeFeeCost={onChangeFeeCost}
            />
          );
        },
      )}
    </section>
  );
};

export default CalculationFeeUnit;
