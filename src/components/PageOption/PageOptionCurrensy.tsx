import { useAppContextContainer } from "../../context/AppContext";
import PageOptionSelector from "./PageOptionSelector";
import styles from "./PageOption.styles";

const PageOptionCurrensy = () => {
  const {
    currensyList,
    currensyState,
    setCurrensyState,
    setFeeList,
    setPartnersInfo,
  } = useAppContextContainer();

  const currencyAvailableList = currensyState.currensyName.filter(
    (el) => el !== currensyState.currensyCurrent,
  );

  return (
    <ul className={styles.containerOption}>
      <li className="cursor-default">{currensyState.currensyCurrent}</li>
      {currencyAvailableList.map((el, index) => {
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
              prev.map((fee) => {
                return {
                  ...fee,
                  feeCost: countMoney(fee.feeCost),
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
            <PageOptionSelector
              key={index}
              onClickFunction={onClickCurrensyChange}
              spaceIndex={index}
              selectorText={el}
            />
          );
        } else return null;
      })}
    </ul>
  );
};

export default PageOptionCurrensy;
