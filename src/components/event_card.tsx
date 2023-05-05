interface LinkType {
    name: string;
    url: string;
  }
  
  interface EventCardProps {
    Title: string;
    Descpt: string;
    Date: string;
    Link: LinkType;
  }

const EventCard = ({Title, Descpt, Date, Link}: EventCardProps) => {
    return (
        <div className="card card-compact w-50 bg-base-200 shadow-xl border mt-2 mb-2">
            <div className="card-body">
                <h2 className="card-title">{Title}</h2>
                <h2>{Date}</h2>
                <p>{Descpt}</p>
                <div className="card-actions justify-end">
                    {/* Map Links to buttons */
                      <a href={Link.url} target="_blank" rel="noopener noreferrer" key={Link.name}>
                        <button className="btn btn-primary">{Link.name}</button>
                      </a>
                    }
                </div>
            </div>
        </div>
    )
}

export default EventCard;