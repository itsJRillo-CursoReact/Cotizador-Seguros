import useCotizador from "../hooks/useCotizador";

const Error = () => {
  const { error } = useCotizador();

  return (
    <div className=" p-3 w-full bg-red-700 font-bold text-white uppercase text-center">
      <p>{error}</p>
    </div>
  );
};

export default Error;
