import React from "react";
import WorkCard from './WorkCard';
import Loader from './../UI/Loader';
import { useSelector } from "react-redux";

const Works = ({ repos }) => {

    const loading = useSelector(state => state.app.fetching)

    return (
        <div className="works__wrapper">
            <div className="works__container">
                <div className="works__info"> Проекты </div>
                <div className="works__main">
                    {loading ? <div className="works__loader"><Loader /> </div> : repos.map(repo => <WorkCard
                        key={repo.id}
                        bgUrl={repo.cardBgUrl}
                        cardName={repo.cardName}
                        description={repo.description}
                        deployLink={repo.deployLink}
                        repoLink={repo.repoLink}
                    />)}
                </div>
                <a className="works__psq" href="https://github.com/Lecklark?tab=repositories">Больше на GitHub</a>
            </div>
        </div>
    )
}

export default Works