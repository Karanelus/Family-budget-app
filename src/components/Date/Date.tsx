import { useRef, useState } from "react";
import { useAppContextContainer } from "../../context/AppContext";
import CloseIcon from "../../svg/CloseIcon";
import DateMonth from "./DateMonth/DateMonth";
import DateYear from "./DateYear/DateYear";
import DateButton from "./DateButton";
import { useTranslation } from "react-i18next";

const Date = () => {
  const { isDateChanging, isDarkmode, setIsDateChanging } =
    useAppContextContainer();
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const containerRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  const titleMonth = t(`TITLE.DATE`);

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
        <section
          ref={containerRef}
          className="fixed grid h-full w-full animate-dateContainerOpen place-items-center bg-dataContainer backdrop-blur-sm"
        >
          <div className="relative flex h-80 w-64 flex-col items-center justify-between rounded-lg bg-zinc-500 p-6 dark:bg-zinc-700 dark:text-black">
            <h3 className="text-center">{titleMonth}</h3>
            <DateMonth />
            <DateYear />
            <DateButton
              onClickFunction={onCLickCloseDate}
              icon={<CloseIcon fill={isDarkmode ? "black" : "lightgray"} />}
              closeButton={true}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default Date;
