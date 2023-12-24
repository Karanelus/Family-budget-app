import { useFamBContextContainer } from "../../../context/FamBContext";

const FamBCurrensyChange = () => {
  const {
    currensyList,
    currensyState,
    setCurrensyState,
    setFeeList,
    setPartnersInfo,
  } = useFamBContextContainer();

  const currencyAvailableList = currensyState.currensyName.filter(
    (el) => el !== currensyState.currensyCurrent,
  );

  return (
    <ul className="group w-7 cursor-default dark:text-black">
      <li>{currensyState.currensyCurrent}</li>
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
            setPartnersInfo((prev) => ({
              ...prev,
              salary_1: countMoney(prev.salary_1),
              salary_2: countMoney(prev.salary_2),
            }));
          };

          return (
            <li
              key={el}
              onClick={onClickCurrensyChange}
              style={{ transform: `translateY(calc(100%*${index}))` }}
              className="absolute z-20 cursor-pointer opacity-0 group-hover:opacity-100"
            >
              {el}
            </li>
          );
        } else return null;
      })}
    </ul>
  );
};

export default FamBCurrensyChange;
