const FamBFooter = () => {
  const date = new Date();

  return (
    <footer className="bg-zinc-500 dark:bg-zinc-700  dark:text-black py-3 h-fit flex justify-center animate-footer hover:shadow-section dark:hover:shadow-sectionDark">
      <p>©{date.getFullYear()}, Rusłan Karaniewski</p>
    </footer>
  );
};

export default FamBFooter;
