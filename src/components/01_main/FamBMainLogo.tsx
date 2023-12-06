const FamBMainLogo = () => {
  const onClickRandomFrom1to10 = () => {
    return console.log(Math.trunc(Math.random() * 10));
  };

  return (
    <section onClick={onClickRandomFrom1to10} className=" py-6 px-12 animate-logo absolute top-0 left-0">
      Family Budget
    </section>
  );
};

export default FamBMainLogo;
