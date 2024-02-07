import { useAppContextContainer } from "../../../context/AppContext";
import CalculationFeeUnitDefault from "./CalculationFeeUnitDefault";
import CalculationFeeUnitEdited from "./CalculationFeeUnitEdited";
import styles from "../Calculator.styles";

const CalculationFeeUnit = () => {
  const { feeList, setFeeList } = useAppContextContainer();
  const stylesShortcut = styles.feeSection;

  return (
    <section className={stylesShortcut.render}>
      {feeList.map((fee) => {
        const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
          setFeeList((prev) =>
            prev.map((item) => {
              if (item.id === fee.id) {
                return { ...item, name: e.target.value };
              }

              return item;
            }),
          );
        };

        const onChangeFeeCost = (e: React.ChangeEvent<HTMLInputElement>) => {
          setFeeList((prev) =>
            prev.map((item) => {
              if (item.id === fee.id) {
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
              if (item.id === fee.id) {
                return {
                  ...item,
                  isEdited: !fee.isEdited,
                  name: fee.name === "" ? "Name the item" : fee.name,
                };
              }

              return item;
            }),
          );
        };

        const onClickDelete = () => {
          setFeeList((prev) =>
            prev.filter((item) => {
              return item.id !== fee.id;
            }),
          );
        };

        return fee.isEdited ? (
          <CalculationFeeUnitEdited
            feeName={fee.name}
            onChangeName={onChangeName}
            onClickDelete={onClickDelete}
            onClickEdited={onClickEdited}
          />
        ) : (
          <CalculationFeeUnitDefault
            feeName={fee.name}
            onClickDelete={onClickDelete}
            onClickEdited={onClickEdited}
            feeCost={fee.feeCost}
            onChangeFeeCost={onChangeFeeCost}
          />
        );
      })}
    </section>
  );
};

export default CalculationFeeUnit;
