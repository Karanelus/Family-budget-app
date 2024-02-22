import { useAppContextContainer } from "../../../context/AppContext";
import CalculationFeeUnitDefault from "./CalculationFeeUnitDefault";
import CalculationFeeUnitEdited from "./CalculationFeeUnitEdited";
import styles from "../Calculator.styles";

const CalculationFeeUnit = () => {
  const { feeList, setFeeList } = useAppContextContainer();
  const stylesShortcut = styles.feeSection;

  return (
    <section className={stylesShortcut.render}>
      {feeList.map((expense) => {
        const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
          setFeeList((prev) =>
            prev.map((item) => {
              if (item.id === expense.id) {
                return { ...item, name: e.target.value };
              }

              return item;
            }),
          );
        };

        const onChangeFeeCost = (e: React.ChangeEvent<HTMLInputElement>) => {
          setFeeList((prev) =>
            prev.map((item) => {
              if (item.id === expense.id) {
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
              if (item.id === expense.id) {
                return {
                  ...item,
                  isEdited: !expense.isEdited,
                  name: expense.name === "" ? "Name the item" : expense.name,
                };
              }

              return item;
            }),
          );
        };

        const onSubmitEdited = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          setFeeList((prev) =>
            prev.map((item) => {
              if (item.id === expense.id) {
                return {
                  ...item,
                  isEdited: !expense.isEdited,
                  name: expense.name === "" ? "Name the item" : expense.name,
                };
              }

              return item;
            }),
          );
        };

        const onClickDelete = () => {
          setFeeList((prev) =>
            prev.filter((item) => {
              return item.id !== expense.id;
            }),
          );
        };

        return expense.isEdited ? (
          <CalculationFeeUnitEdited
            feeName={expense.name}
            onChangeName={onChangeName}
            onSubmitName={onSubmitEdited}
            onClickDelete={onClickDelete}
            onClickEdited={onClickEdited}
          />
        ) : (
          <CalculationFeeUnitDefault
            feeName={expense.name}
            onClickDelete={onClickDelete}
            onClickEdited={onClickEdited}
            feeCost={expense.feeCost}
            onChangeFeeCost={onChangeFeeCost}
          />
        );
      })}
    </section>
  );
};

export default CalculationFeeUnit;
