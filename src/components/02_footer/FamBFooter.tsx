const FamBFooter = () => {
  const date = new Date();

  return (
    <footer className=" bg-emerald-500 py-3 h-fit flex justify-center animate-footer">
      <p>©{date.getFullYear()}, Rusłan Karaniewski</p>
    </footer>
  );
};

export default FamBFooter;
