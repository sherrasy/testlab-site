import { detailsData } from "./details-data";

function Details(): JSX.Element {

  return <div className='details'>
    {detailsData.map(({id, title, text})=>(
        <div className="details__item" key={id}>
            <h6 className="details__title">{title}</h6>
            <span className="details__text">{text}</span>
        </div>
    ))}
  </div>;
}

export default Details;
