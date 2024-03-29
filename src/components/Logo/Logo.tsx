const Logo = () => {
  return (
    <section className="absolute left-0 top-0 flex animate-logo flex-row px-12 py-7 dark:text-black">
      Family Budget
      <img
        src={process.env.PUBLIC_URL + "/img/logo.png"}
        alt=""
        className="ml-2 size-6 dark:brightness-75"
      />
    </section>
  );
};

export default Logo;
