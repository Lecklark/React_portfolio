import SocialIcon from '../UI/SocialIcon';
import githubIcon from '../assets/social/githubIcon.png';
import LinkIcon from '../assets/social/link.png';

const WorkCard = ({ bgUrl, cardName, description, deployLink, repoLink }) => {

    return (
        <div className="card">
            <div className="card__img"><img src={bgUrl} alt="" /></div>
            <div className="card__title">{cardName}</div>
            <div className="card__description">{description}</div>
            <div className="card__links">
                <SocialIcon href={deployLink} src={LinkIcon} />
                <SocialIcon href={repoLink} src={githubIcon} />
            </div>
        </div>
    )
}

export default WorkCard