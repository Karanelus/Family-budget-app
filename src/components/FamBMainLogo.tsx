const FamBMainLogo = () => {
  return (
    <section className=" py-6 px-12 animate-logo absolute top-0 left-0 dark:text-black flex flex-row">
      Family Budget
      <img
        src={process.env.PUBLIC_URL + "/img/logo.png"}
        alt=""
        className="aspect-square h-6 ml-2 dark:brightness-75"
      />
    </section>
  );
};

export default FamBMainLogo;
