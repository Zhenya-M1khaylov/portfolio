import React from 'react';
import s from './Skills.module.scss'
import styleContainer from './../../Common/Styles/Container.module.css'
import Skill from "./Skill/Skill";
import {Title} from "../../Common/Components/Title/Title";
import HTML from '../../Assets/Icons/css.svg'
import JS from '../../Assets/Icons/js.svg'
import REACT from '../../Assets/Icons/react.svg'
import REST from '../../Assets/Icons/api.svg'
import REDUX from '../../Assets/Icons/redux.svg'
import TYPESCRIPT from '../../Assets/Icons/ts.svg'


const Skills = () => {
    return (
        <section id="skills" className={`${s.skills}`}>
            <div className={`${styleContainer.container}`}>
                <div className={`${s.skills__wrapper}`}>
                    <Title value={'Skills'}/>
                        <div className={`${s.skills__list}`}>
                            <Skill
                                title={'HTML/CSS'}
                                skillDescription={['semantics', 'аdaptive', 'flexbox/grid', 'BEM', 'SASS']}
                                image={HTML}
                            />
                            <Skill
                                title={'JS'}
                                skillDescription={['ECMAScript 6', 'DOM', 'promise', 'event loop', 'closure']}
                                image={JS}
                            />
                            <Skill
                                title={'REST API'}
                                skillDescription={['HTTP', 'CRUD', 'AXIOS']}
                                image={REST}
                            />
                            <Skill
                                title={'TYPESCRIPT'}
                                skillDescription={['Type', 'Interface', 'Generics']}
                                image={TYPESCRIPT}
                            />
                            <Skill
                                title={'REACT'}
                                skillDescription={['Func components', 'Class components', 'HOC', 'React router dom', 'Hooks']}
                                image={REACT}
                            />


                            <Skill
                                title={'REDUX'}
                                skillDescription={['FLUX', 'Thunk', 'RTK']}
                                image={REDUX}
                            />
                        </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;