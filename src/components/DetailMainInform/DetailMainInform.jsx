import style from "./DetailMainInform.module.css";

const DetailMainInform = ({ data }) => {
  return (
    <div className={style.blockWrap}>
      <ul className={style.listImages}>
        {data.gallery.map((img, index) => (
          <li key={index}>
            <img className={style.cardImg} src={img} alt={data.name} />
          </li>
        ))}
      </ul>

      <p className={style.textDescription}>{data.description}</p>
    </div>
  );
};

export default DetailMainInform;
