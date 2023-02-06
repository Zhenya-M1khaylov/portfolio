import React from 'react';
import s from "./MyProjects.module.scss"
import styleContainer from '../../Common/Styles/Container.module.scss'
import {Title} from "../../Common/Components/Title/Title";
import Project from "./Project/Project";
import todoAPP from '../../Assets/Image/todo.jpg'
import filter from '../../Assets/Image/filter.jpg'
import password from '../../Assets/Image/password.jpg'
import cards from '../../Assets/Image/cards.jpg'
import creditCard from '../../Assets/Image/creditCard.jpg'
import socialNetwork from '../../Assets/Image/social.jpg'


const MyProjects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title value={'My projects'}/>
                <div className={s.projects}>
                    <Project
                        style={todoAPP}
                        title={'Todolist'}
                        description={'To-do list app'}
                        url={'https://zhenya-m1khaylov.github.io/todolist/'}
                    />
                    <Project
                        style={socialNetwork}
                        title={'Social Network'}
                        description={'Social network'}
                        url={''}
                    />
                    <Project
                        style={cards}
                        title={'Cards'}
                        description={'Cards'}
                        url={''}
                    />
                    <Project
                        style={password}
                        title={'Password generator'}
                        description={'Password generator'}
                        url={'https://zhenya-m1khaylov.github.io/pass-generator-app/'}
                    />
                    <Project
                        style={creditCard}
                        title={'Credit card'}
                        description={'Credit card'}
                        url={''}
                    />
                    <Project
                        style={filter}
                        title={'Photo filter'}
                        description={'Filter for your photos'}
                        url={''}
                    />
                </div>
            </div>
        </div>
    )

};

export default MyProjects;