import { CLOUD_IMG } from "../constants";

const RestaurantCard = ({name,cuisines,locality,cloudinaryImageId}) => (
    <div className="card">
        <img src={ CLOUD_IMG + cloudinaryImageId} alt="Food Item" />
        <h2>{name}</h2>
        <p>{cuisines && cuisines.join(",")}</p>
        <h3>{locality}</h3>
    </div>
);
export default RestaurantCard;