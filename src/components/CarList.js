import CarItem from "./CarItem";

function CarList(props) {
  return (
    <div className="d-flex flex-wrap pt-4">
      {props.items.map((item) => (
        <CarItem
          key={item.id}
          name={item.name}
          category={item.category}
          price={item.price}
          date={item.date}
          imgUrl={item.imgUrl}
        />
      ))}
    </div>
  );
}

export default CarList;
