import CarList from "./CarList";
import React, { useState } from "react";

const cars = [
  {
    id: "1",
    name: "Model 3",
    category: "Tesla",
    price: "48,490",
    date: "2020-09-04",
    imgUrl:
      "https://media.istockphoto.com/photos/electric-sports-car-the-tesla-model-3-picture-id1277254968?k=6&m=1277254968&s=612x612&w=0&h=4j3WhZQD95BJyqOnML2sDatX9SFQomJclLyd5bbV3FU=",
  },
  {
    id: "2",
    name: "Model X",
    category: "Tesla",
    price: "89,990",
    date: "2017-08-08",
    imgUrl:
      "https://media.istockphoto.com/photos/tesla-model-x-travelling-on-the-freeway-in-silicon-valley-picture-id1191552504?k=6&m=1191552504&s=612x612&w=0&h=NWHap01jKkYzC5BT-9gaKYr8phGeO1ZUYHnGPLQ5RUM=",
  },
  {
    id: "3",
    name: "Model S",
    category: "Tesla",
    price: "82,990",
    date: "2019-04-01",
    imgUrl:
      "https://media.istockphoto.com/photos/tesla-model-s-on-the-highway-picture-id582261244?k=6&m=582261244&s=612x612&w=0&h=LwYAD7oI6Xy9gsRM7OZ10Nsq-ehGsSmLcbPwQEmZBpg=",
  },
  {
    id: "4",
    name: "Model Y",
    category: "Tesla",
    price: "48,190",
    date: "2020-02-02",
    imgUrl:
      "https://media.istockphoto.com/photos/tesla-model-y-in-austin-texas-at-360-bridge-picture-id1272025387?k=6&m=1272025387&s=612x612&w=0&h=o_W18f-pFNdHsSpdaNejXSS7G8XnWfayhinzZVWhQU8=",
  },
  {
    id: "5",
    name: "Cayenne",
    category: "Porsche",
    price: "67,500",
    date: "2017-12-20",
    imgUrl:
      "https://media.istockphoto.com/photos/porsche-cayenne-picture-id1138819485?k=6&m=1138819485&s=612x612&w=0&h=uSPCZUofVb5ComBHUpH5qZ5QB7B1WWcKFxNzm53W2ME=",
  },
  {
    id: "6",
    name: "Macan",
    category: "Porsche",
    price: "52,100",
    date: "2019-07-12",
    imgUrl:
      "https://media.istockphoto.com/photos/porsche-macan-gts-crossover-suv-picture-id508107322?k=6&m=508107322&s=612x612&w=0&h=syLuqvZng-mEbqJblhY3q6wWxcUlaijknWO9ea90CJo=",
  },
  {
    id: "7",
    name: "Camry",
    category: "Toyota",
    price: "24,425",
    date: "2015-06-29",
    imgUrl:
      "https://media.istockphoto.com/photos/toyota-camry-in-motion-picture-id905266220?k=6&m=905266220&s=612x612&w=0&h=8iRQyhjJYVn_ppC6x3LTLGzG0P67NyCvuQqxvO40ryI=",
  },
  {
    id: "8",
    name: "Accord",
    category: "Honda",
    price: "24,800",
    date: "2018-10-02",
    imgUrl:
      "https://media.istockphoto.com/photos/honda-accord-in-the-city-picture-id649004692?k=6&m=649004692&s=612x612&w=0&h=7WnRBZcLQ6-Y2FrKKVxya3nwJ6U-CLeZUuk-D5RVlu8=",
  },
  {
    id: "9",
    name: "Civic",
    category: "Honda",
    price: "20,650",
    date: "2015-04-04",
    imgUrl:
      "https://media.istockphoto.com/photos/new-honda-civic-front-picture-id458119929?k=6&m=458119929&s=612x612&w=0&h=h8uh7Bqgw2l1Hhg2TmX05VSBnp2cxrjpTBtvPYpKiD4=",
  },
  {
    id: "10",
    name: "CX-5",
    category: "Mazda",
    price: "26,940",
    date: "2012-11-03",
    imgUrl:
      "https://media.istockphoto.com/photos/new-2018-mazda-cx5-red-cx5-suv-car-japanese-car-moving-vehicle-picture-id1069236296?k=6&m=1069236296&s=612x612&w=0&h=CO2YJA51esFD2an-sKkhusVifvwTwhBXR3ebxD6h3Fg=",
  },
  {
    id: "11",
    name: "GLE Coupe",
    category: "Mercedes-Benz",
    price: "76,500",
    date: "2020-02-05",
    imgUrl:
      "https://media.istockphoto.com/photos/mercedesbenz-gle-43-4matic-coupe-picture-id894961460?k=6&m=894961460&s=612x612&w=0&h=aKbMi31eXuJOSVEKlesIzsJlLM6QhUe0k_5V-FJvH0M=",
  },
  {
    id: "12",
    name: "CLA",
    category: "Mercedes-Benz",
    price: "37,850",
    date: "2019-06-09",
    imgUrl:
      "https://media.istockphoto.com/photos/mercedes-benz-cla-picture-id472122163?k=6&m=472122163&s=612x612&w=0&h=IIRhsoWfMXXy6b_aTMtSA2dgSTPK4pSD-_M5vh8OY6M=",
  },
  {
    id: "13",
    name: "GLA 250",
    category: "Mercedes-Benz",
    price: "37,280",
    date: "2017-05-02",
    imgUrl:
      "https://media.istockphoto.com/photos/mercedesbenz-gla-2020-test-drive-day-picture-id1297389811?k=6&m=1297389811&s=612x612&w=0&h=NOPBUppwL9aFKKoha3phbhpHUw6hYSdsW5NlFejp4RU=",
  },
  {
    id: "14",
    name: "RX 350",
    category: "Lexus",
    price: "45,175",
    date: "2015-01-01",
    imgUrl:
      "https://media.istockphoto.com/photos/hybrid-suv-lexus-nx-on-the-road-picture-id657915058?k=6&m=657915058&s=612x612&w=0&h=DGCgfv-pBE75oOUktrX_WpGSadnEmRcm5iPfa49BOQw=",
  },
  {
    id: "15",
    name: "NX 300",
    category: "Lexus",
    price: "37,510",
    date: "2018-09-12",
    imgUrl:
      "https://media.istockphoto.com/photos/lexus-nx-200t-car-picture-id480681192?k=6&m=480681192&s=612x612&w=0&h=Ne9_r4aioLH_jpiK41fHpTr-ADdKsHcFMOOPXT9DGp8=",
  },
  {
    id: "16",
    name: "Urus",
    category: "Lamborghini",
    price: "218,000",
    date: "2021-08-16",
    imgUrl:
      "https://media.istockphoto.com/photos/lamborghini-urus-picture-id1184360237?k=6&m=1184360237&s=612x612&w=0&h=cDC3bjJCG9fZC8VpJnuoK73du-hKLnij-14eKHxuLyA=",
  },
  {
    id: "17",
    name: "Aventador",
    category: "Lamborghini",
    price: "393,695",
    date: "2020-09-11",
    imgUrl:
      "https://media.istockphoto.com/photos/lamborghini-aventador-lp-7504-superveloce-picture-id1083962000?k=6&m=1083962000&s=612x612&w=0&h=VBYRfp0408ZHqDTdJ69pIJP7z_zhj2T7z8OB-28adSU=",
  },
  {
    id: "18",
    name: "A3",
    category: "Audi",
    price: "33,500",
    date: "2019-05-08",
    imgUrl:
      "https://media.istockphoto.com/photos/audi-a3-sportback-on-a-street-picture-id1255388367?k=6&m=1255388367&s=612x612&w=0&h=nh2TLu9W-68-3_PgN1-0qkXYaw4mfFZviKY1sY_fjJ8=",
  },
  {
    id: "19",
    name: "X3",
    category: "BMW",
    price: "43,000",
    date: "2018-03-11",
    imgUrl:
      "https://media.istockphoto.com/photos/-picture-id1206921084?k=6&m=1206921084&s=612x612&w=0&h=o8ETeAQHAuzOerMorNWxPnDpyhSyrxiy6vvIQ8TLd4Y=",
  },
  {
    id: "20",
    name: "2 Series",
    category: "BMW",
    price: "37,500",
    date: "2019-01-15",
    imgUrl:
      "https://media.istockphoto.com/photos/coupe-competition-picture-id1187329409?k=6&m=1187329409&s=612x612&w=0&h=qDHLX8yA8WVGmEwFU8k56z72uobZfcGkHH14zzpLPc4=",
  },
];

function CarEcommerce() {
  const [selectedValue, setSelectedValue] = useState("Category");
  const [selectedSort, setSelectedSort] = useState("Sort by:");

  const filteredAndSortedCars = cars
    .filter((item) => {
      if (selectedValue === "Category") return cars;
      else return item.category === selectedValue;
    })
    .sort((a, b) => {
      if (selectedSort === "1")
        return (
          parseFloat(a.price.replace(/,/g, "")) -
          parseFloat(b.price.replace(/,/g, ""))
        );
      else if (selectedSort === "2")
        return (
          parseFloat(b.price.replace(/,/g, "")) -
          parseFloat(a.price.replace(/,/g, ""))
        );
      else if (selectedSort === "3") return new Date(b.date) - new Date(a.date);
      else return a.id - a.id
    });

  // const filterChange = (e) => {
  //   setSelectedValue(e.target.value);
  // };

  // const sortChange = (e) => {
  //   setSelectedSort(e.target.value);
  // };

  return (
    <div className="container mt-5">
      <div className="d-flex">
        <div className="mx-2">
          <select
            className="form-select"
            value={selectedValue}
            aria-label="Default select example"
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            <option value="Category">Category</option>
            <option value="Tesla">Tesla</option>
            <option value="Porsche">Porsche</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Mazda">Mazda</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Lexus">Lexus</option>
            <option value="Lamborghini">Lamborghini</option>
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
          </select>
        </div>

        <div>
          <select
            className="form-select"
            value={selectedSort}
            aria-label="Default select example"
            onChange={(e) => setSelectedSort(e.target.value)}
          >
            <option defaultValue value="Sort by:">
              Sort by:
            </option>
            <option value="1">Price: Low to High</option>
            <option value="2">Price: High to Low</option>
            <option value="3">Newest Arrivals</option>
          </select>
        </div>
      </div>
      {/* Need to render from here */}
      <CarList items={filteredAndSortedCars} />
    </div>
  );
}

export default CarEcommerce;
