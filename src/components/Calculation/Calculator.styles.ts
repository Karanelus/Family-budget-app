const styles = {
  container:
    "mx-16 my-12 h-section w-section rounded-3xl bg-zinc-500 bg-gradient-to-br  px-8 py-6 duration-300 hover:shadow-section dark:bg-zinc-700 dark:text-black dark:hover:shadow-sectionDark",
  incomeSection: {
    container: "mb-4 grid place-items-center gap-2 xl:grid-cols-2",
    person: {
      container:
        "relative before:absolute before:z-10 before:block before:h-[45%] before:w-0 before:origin-right before:-translate-x-1 before:-skew-x-[30deg] before:bg-zinc-500 before:duration-150 before:ease-in before:dark:bg-zinc-700",
      nameInput: {
        editing: {
          container: "relative mb-1 grid place-items-center",
          text: "rounded-md bg-gray-400 px-1 dark:bg-gray-600 dark:text-darkmode",
        },
        default: "text-center",
      },
      salaryInput:
        "h-8 rounded-md bg-gray-400 bg-gradient-to-r px-2 py-1 text-black dark:bg-gray-600 dark:text-darkmode",
      editButton:
        "absolute -right-8 top-0 aspect-square h-7 rounded-md bg-gray-400 p-1 dark:bg-gray-600 md:h-6",
    },
  },
  feeSection: {
    container: "grid w-full place-items-center gap-2",
    render: "flex w-full flex-col gap-2",
    default: {
      constainer:
        "flex w-full flex-col items-center justify-center md:flex-row md:justify-between",
      functionPart: "flex w-full flex-row gap-2 md:w-auto",
      input:
        "w-full rounded-md bg-gray-400 bg-gradient-to-l px-2 py-1 text-black placeholder:text-zinc-600 dark:bg-gray-600 dark:text-darkmode md:w-auto",
      buttonContainer: "flex h-full gap-2",
    },
    edited: {
      form: "flex w-full flex-row gap-2",
      input:
        "w-full rounded-md bg-gray-400 px-2 py-1 text-black placeholder:text-zinc-500 dark:bg-gray-600 dark:text-darkmode",
    },
  },
  button: "aspect-square h-8 rounded-md bg-gray-400 px-2 py-1 dark:bg-gray-600",
};

export default styles;
