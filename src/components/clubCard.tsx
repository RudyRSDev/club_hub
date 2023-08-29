interface LinkType {
    name: string;
    url: string;
  }
  
interface CardProps {
    title: string;
    description: string;
    weblinks: LinkType[];
  }

const Card = ({title, description, weblinks}: CardProps) => {
    return (
        <div className="card card-compact w-96 bg-base-200 shadow-xl">
            <figure><img src="https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end shadow-white">
                    {/* Map Links to buttons */
                        weblinks.map(linkType => (
                          <a href={linkType.url} target="_blank" rel="noopener noreferrer" key={linkType.name}>
                            <button className="btn btn-primary rounded-2xl">{linkType.name}</button>
                          </a>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Card;