import '../workers-card/workers-card.css';


function WorkersCard(props) {

    return (
        <>
            <div className='worker-card'>
                <img src={props.img} alt={props.name} />
                <p className="worker-name">{props.name}</p>
                <p className="worker-specialization">{props.specialization}</p>
                <div className="worker-networks">
                    <a href={props.twitter}><img src="/img/svg/Icon-TwitterB.svg" alt="twitter" /></a>
                    <a href={props.instagram}><img src="/img/svg/Icon-instagramB.svg" alt="instagram" /></a>
                    <a href={props.linkedln}><img src="/img/svg/Icon-LinkedinB.svg" alt="Linkedin" /></a>
                </div>
            </div>
        </>
    )
}

export default WorkersCard;