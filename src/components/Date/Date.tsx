import { useRef, useState } from "react";
import { useAppContextContainer } from "../../context/AppContext";
import CloseIcon from "../../svg/CloseIcon";
import styles from "./Date.styles";
import DateMonth from "./DateMonth/DateMonth";
import DateYear from "./DateYear/DateYear";
import DateButton from "./DateButton";

const Date = () => {
  const { isDateChanging, isDarkmode, setIsDateChanging } =
    useAppContextContainer();
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const containerRef = useRef<HTMLElement>(null);

  const onCLickCloseDate = () => {
    if (!isClosing && isDateChanging) {
      setIsClosing(true);
      containerRef.current?.classList.replace(
        "animate-dateContainerOpen",
        "animate-dateContainerClose",
      );
      containerRef.current?.addEventListener(
        "animationend",
        () => {
          containerRef.current?.classList.remove("animate-dateContainerClose");
          setIsDateChanging(false);
          setIsClosing(false);
        },
        { once: true },
      );
    }
  };

  return (
    <>
      {isDateChanging && (
        <section ref={containerRef} className={styles.container}>
          <div className={styles.dateSection.container}>
            <h3 className="text-center">Choose month</h3>
            <DateMonth />
            <DateYear />
            <DateButton
              onClickFunction={onCLickCloseDate}
              icon={<CloseIcon fill={isDarkmode ? "#999999" : "black"} />}
              closeButton={true}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default Date;
