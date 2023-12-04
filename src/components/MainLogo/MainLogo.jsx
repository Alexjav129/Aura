import "./MainLogo.scss";

const MainLogo = () => {
  const imgLogo =
    "https://i.pinimg.com/564x/2f/bb/90/2fbb907eb56b74e980ece2e57d513063.jpg";
  return (
    <div>
      <img className="mainLogo" src={imgLogo} alt="Logo of the store" />
    </div>
  );
};

export default MainLogo;
