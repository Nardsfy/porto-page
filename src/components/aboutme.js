import { useState } from 'react';
import '../App.css'
import bg_image from '../assets/cover.jpg'
import profile_pic from '../assets/profile_picture.JPG'
import uksw from '../assets/uksw.png'
import alfamart from '../assets/alfamart.png'

function AboutMe() {
    const myCategory = [
        { id: 'language', class_value: 'btn-primary', value: 'Language', icon: 'fa-flag' },
        { id: 'dbms', class_value: 'bg-db', value: 'DBMS', icon: 'fa-database' },
        { id: 'framework', class_value: 'bg-framework', value: 'Framework', icon: 'fa-tasks' }
    ]

    const detailSkill = [
        { idCategory: 'language', value: 'Python' },
        { idCategory: 'language', value: 'Javascript' },
        { idCategory: 'language', value: 'PHP' },
        { idCategory: 'language', value: 'Ruby' },
        { idCategory: 'dbms', value: 'PostgreSQL' },
        { idCategory: 'dbms', value: 'Oracle' },
        { idCategory: 'framework', value: 'Flask' },
        { idCategory: 'framework', value: 'ReactJS' }
    ]

    // ----------------- Background and Profile Picture
    function Profile() {
        return (
            <div className='col-sm-12 col-md-12 col-lg-12 text-center'>
                <img src={bg_image} alt='Instagram Post' style={{ width: '100%', maxHeight: '200px', border: 'solid 1px', overflow: 'hidden', zIndex: '-111', objectFit: 'cover', objectPosition: '0 70%' }}></img>
                <div className='border rounded-circle mx-auto border-dark' style={{ maxWidth: '120px', maxHeight: '120px', zIndex: '111', marginTop: '-4em' }}>
                    <img src={profile_pic} alt='Profile Picture' className='rounded-circle' style={{ width: '120px', height: '120px' }}></img>
                </div>
                <hr />
            </div>
        )
    }

    // ------------------ About Description
    function AboutMe() {
        return (
            <div className='col-sm-12 col-md-12 col-lg-6 text-center mb-2'>
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dignissimos. Ipsa iusto fuga saepe minima modi expedita sunt, ea deserunt id vero veniam quaerat fugiat, sed voluptatem! Molestias, exercitationem deleniti!</p>
                <h3>Bio</h3>
                <div className='row'>
                    <div className='col-sm-6 col-md-6 col-lg-6'>
                        <i className='fa fa-map-marker'></i>
                        &nbsp;Tangerang, Banten
                    </div>
                    <div className='col-sm-6 col-md-6 col-lg-6'>
                        <i className='fa fa-birthday-cake'></i>
                        &nbsp;26 September 1999 ({new Date().getFullYear() - 1999})
                    </div>
                </div>
            </div>
        )
    }

    // ------------------ Education and Hobby
    function EducationHobby() {
        return (
            <div className='col-sm-12 col-md-12 col-lg-6 text-center'>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        <h4>Education</h4>
                        <img src={uksw} alt='UKSW Logo' style={{ width: '24px', maxHeight: '24px' }}></img>
                        &nbsp;Universitas Kristen Satya Wacana (2017 - 2021)
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        <i className='fa fa-graduation-cap'></i>
                        &nbsp;Bachelor of Computer Science (S1)
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        <hr className='w-50' />
                    </div>

                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        <h4>Hobby and Activity</h4>
                        <div className='row'>
                            <div className='col-sm-6 col-md-6 col-lg-4'>
                                <i className='fa fa-basketball-ball'></i>
                                &nbsp;Basketball
                            </div>
                            <div className='col-sm-6 col-md-6 col-lg-4'>
                                <i className='fa fa-swimmer'></i>
                                &nbsp;Swimming
                            </div>
                            <div className='col-sm-6 col-md-6 col-lg-4'>
                                <i className='fa fa-gamepad'></i>
                                &nbsp;Gaming
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // -------------------- Hard & Soft Skills
    function Skills() {
        return (
            <div className='col-sm-12 col-md-12 col-lg-12'>
                <hr />
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-6 text-center'>
                        <h5>Hard Skills</h5>
                        <button className='btn btn-primary btn-skills mb-2 mr-1'>Python</button>
                        <button className='btn btn-primary btn-skills mb-2 mr-1'>Javascript</button>
                        <button className='btn btn-primary btn-skills mb-2 mr-1'>PHP</button>
                        <button className='btn bg-framework btn-skills mb-2 mr-1'>Flask</button>
                        <button className='btn bg-framework btn-skills mb-2 mr-1'>Bootstrap</button>
                        <button className='btn bg-framework btn-skills mb-2 mr-1'>React.js</button>
                        <button className='btn bg-framework btn-skills mb-2 mr-1'>Next.js</button>
                        <button className='btn bg-db btn-skills mb-2 mr-1'>MySQL</button>
                        <button className='btn bg-db btn-skills mb-2 mr-1'>PostgreSQL</button>
                        <button className='btn bg-db btn-skills mb-2 mr-1'>Oracle</button>
                        <button className='btn btn-dark btn-skills mb-2 mr-1'>HTML</button>
                        <button className='btn btn-dark btn-skills mb-2 mr-1'>CSS</button>
                        <button className='btn btn-dark btn-skills mb-2 mr-1'>Git</button>
                        <button className='btn btn-dark btn-skills mb-2 mr-1'>Linux</button>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6 text-center'>
                        <h5 className='text-center mb-2'>Soft Skills</h5>
                        <div className='col-sm-12 col-md-12 col-lg-12'>Understand English, Native Indonesia, Javanese language</div>                        
                        <div className='col-sm-12 col-md-12 col-lg-12'>Good time management</div>
                        <div className='col-sm-12 col-md-12 col-lg-12'>Can work as team</div>
                    </div>
                </div>
            </div>
        )
    }

    // -------------------- Experience
    function Experience() {
        return (
            <div className='col-sm-12 col-md-12 col-lg-12'>
                <hr />
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-6'>
                        <h5 className='text-center'>Work Experience</h5>
                        <section className='timeline'>
                            <ul>
                                <li className='bg-primary'>
                                    <span>2021-Now</span>
                                    <div>
                                        <img src={alfamart} alt='Logo Alfamart' style={{ width: '24px', maxHeight: '24px' }}></img>
                                        &nbsp;PT. Sumber Alfaria Trijaya, Tbk.
                                    </div>
                                    <div className='font-italic'>IT Administration Dev Programmer Analyst</div>
                                </li>
                                <li className='bg-primary'>
                                    <span>2020-2021</span>
                                    <div>
                                        <img src={alfamart} alt='Logo Alfamart' style={{ width: '24px', maxHeight: '24px' }}></img>
                                        &nbsp;PT. Sumber Alfaria Trijaya, Tbk.
                                    </div>
                                    <div className='font-italic'>Internship IT Backoffice</div>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6'>
                        <h5 className='text-center'>Organization Experience</h5>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <Profile />
            <AboutMe />
            <EducationHobby />
            <Skills />
            <Experience />
        </>
    )
}

export default AboutMe;