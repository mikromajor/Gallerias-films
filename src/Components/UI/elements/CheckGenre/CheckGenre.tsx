import cl from "./CheckGenre.module.css";

const CheckGenre = ({
  label,
  genreId,
  handlerGenre,
}: {
  label: string;
  genreId: string;
  handlerGenre: (a: string, b: boolean) => void;
}) => {
  return (
    <form className={cl.form}>
      <input
        className={cl.checkbox}
        type='checkbox'
        id={label}
        name={label}
        value={genreId}
        onChange={(e) => {
          const { value, checked } = e.currentTarget;
          handlerGenre(value, checked);
        }}
      />
      <label htmlFor={label} className={cl.label}>
        {label}
      </label>
    </form>
  );
};
export default CheckGenre;