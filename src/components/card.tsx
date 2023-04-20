// import { FaFacebookF, FaDiscord } from "react-icons/fa";

const Card = ({Title, Descpt, Links}:any) => {
    return (
        <div className="card card-compact w-96 bg-base-200 shadow-xl">
            <figure><img src="https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{Title}</h2>
                <p>{Descpt}</p>
                <div className="card-actions justify-end">
                    {/* Map Links to buttons */}
                    <button className="btn btn-primary">Test</button>
                </div>
            </div>
        </div>
    )
}

export default Card