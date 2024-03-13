// import { useAppContextContainer } from "../../context/AppContext";
// import OptionSelector from "./OptionSelector";
import styles from "./Option.styles";

const OptionCurrensy = () => {
  // const {
  //   currensyList,
  //   currensyState,
  //   setCurrensyState,
  //   setFeeList,
  //   setPartnersInfo,
  // } = useAppContextContainer();

  // const currencyAvailableList = currensyState.currensyName.filter(
  //   (el) => el !== currensyState.currensyCurrent,
  // );

  return (
    <ul className={styles.containerOption}>
      <li className="cursor-default">NaN</li>
      {/* {currencyAvailableList.map((el, index) => {
        if (el !== currensyState.currensyCurrent) {
          const onClickCurrensyChange = () => {
            setCurrensyState((prev) => ({
              ...prev,
              currensyPast: prev.currensyCurrent,
              currensyCurrent: el,
              currensyCourse:
                (1 / currensyList[prev.currensyPast]) *
                currensyList[prev.currensyCurrent],
            }));

            const countMoney = (number: number): number => {
              return Number((number * currensyState.currensyCourse).toFixed(2));
            };

            setFeeList((prev) =>
              prev.map((expense) => {
                return {
                  ...expense,
                  feeCost: countMoney(expense.feeCost),
                };
              }),
            );
            setPartnersInfo((prev) =>
              prev.map((elem) => ({
                ...elem,
                salary: countMoney(elem.salary),
              })),
            );
          };

          return (
            <OptionSelector
              key={index}
              onClickFunction={onClickCurrensyChange}
              spaceIndex={index}
              selectorText={el}
            />
          );
        } else return null;
      })} */}
    </ul>
  );
};

export default OptionCurrensy;
