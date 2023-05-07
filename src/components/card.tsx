// import { FaFacebookF, FaDiscord } from "react-icons/fa";
interface LinkType {
    name: string;
    url: string;
  }
  
  interface CardProps {
    Title: string;
    Descpt: string;
    Links: LinkType[];
  }

const Card = ({Title, Descpt, Links}: CardProps) => {
    return (
        <div className="card card-compact w-96 bg-base-200 shadow-xl">
            <figure><img src="https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{Title}</h2>
                <p>{Descpt}</p>
                <div className="card-actions justify-end">
                    {/* Map Links to buttons */
                        Links.map(link => (
                          <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.name}>
                            <button className="btn btn-primary">{link.name}</button>
                          </a>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Card;