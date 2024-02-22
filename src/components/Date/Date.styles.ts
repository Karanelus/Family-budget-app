const styles = {
  container:
    "bg-dataContainer animate-dateContainerOpen fixed grid h-full w-full place-items-center backdrop-blur-sm",
  dateSection: {
    container:
      "relative flex h-80 w-64 flex-col justify-between items-center rounded-lg bg-zinc-500 p-6 dark:bg-zinc-700 dark:text-black",
    month: {
      container: "grid grid-cols-3 grid-rows-4 gap-3 text-center w-full",
    },
    year: {
      container: "flex w-3/4 items-center justify-between",
    },
    button: {
      close:
        "absolute right-2 top-2 size-6 rounded-sm bg-gray-400 p-[0.125rem] text-xs dark:bg-gray-600 grid place-items-center",
      arrow: "size-6 rounded-sm text-xs grid place-items-center",
      leftArrow: "rotate-180",
    },
  },
};

export default styles;
