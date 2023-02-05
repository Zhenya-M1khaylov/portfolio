import React from 'react';
import s from "./MyProjects.module.scss"
import styleContainer from '../../Common/Styles/Container.module.scss'
import {Title} from "../../Common/Components/Title/Title";
import Project from "./Project/Project";
import todoAPP from '../../Assets/Image/todo.jpg'
// import color from '../../Assets/Image/colors.png'
// import password from '../../Assets/Image/pass.jpg'
import cards from '../../Assets/Image/cards.jpg'
// import creditCard from '../../Assets/Image/creditCard.jpg'
import socialNetwork from '../../Assets/Image/social.jpg'


const MyProjects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title value={'My projects'}/>
                <div className={s.projects}>
                    <Project style={todoAPP} title={'Todolist'} description={'To-do list app'} url={''}/>
                    <Project style={socialNetwork} title={'Social Network'} description={'Social network'} url={''}/>
                    <Project style={cards} title={'Cards'} description={'Cards'} url={''}/>
                    <Project style={cards} title={'Cards'} description={'Cards'} url={''}/>
                    <Project style={cards} title={'Cards'} description={'Cards'} url={''}/>
                    <Project style={cards} title={'Cards'} description={'Cards'} url={''}/>
                </div>
            </div>
        </div>
    )

};

export default MyProjects;