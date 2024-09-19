import React from 'react'
import {
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaBootstrap,
  FaReact,
  FaPython,
  FaJava
} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiOracle, SiCplusplus, SiMysql, SiPytorch } from 'react-icons/si'
import { BsFiletypeScss } from 'react-icons/bs'
import { AiFillCopyrightCircle } from 'react-icons/ai'
import { MdPermDataSetting } from 'react-icons/Md'
import { GiArtificialHive } from 'react-icons/gi'

export default function Skills () {
  return (
    <div className='skillsContainer'>
      <div className='part 1'>
        <h1>Skills</h1>
        <div className='skills'>
          <div className='cont'>
            <FaHtml5 className='icon' />
            <div>HTML</div>
          </div>
          <div className='cont'>
            <FaCss3Alt className='icon' />
            <div>CSS</div>
          </div>
          <div className='cont'>
            <IoLogoJavascript className='icon' />
            <div>JavaScript</div>
          </div>

          <div className='cont'>
            <BsFiletypeScss className='icon' />
            <div>SCSS</div>
          </div>
          <div className='cont'>
            <FaBootstrap className='icon' />
            <div>Bootstrap</div>
          </div>
          <div className='cont'>
            <FaReact className='icon' />
            <div>ReactJS</div>
          </div>
          <div className='cont'>
            <GiArtificialHive className='icon' />
            <div>
              Deep Learning
            </div>
          </div>
          <div className='cont'>
            <SiPytorch className='icon' />
            <div>
              PyTorch
            </div>
          </div>

          {/* <div className='cont'>
            <FaNodeJs className='icon' />
            <div>NodeJS</div>
          </div>
          <div className='cont'>
            <SiExpress className='icon' />
            <div>ExpressJS</div>
          </div> */}
          {/* <div className='cont'>
            <SiRedux className='icon' />
            <div>Redux</div>
          </div> */}
        </div>
      </div>
      <div className='part 2'>
        <h1>Programming</h1>
        <div className='skills'>
          <div className='cont'>
            <SiCplusplus className='icon' />
            <div>C++</div>
          </div>
          <div className='cont'>
            <FaJava className='icon' />
            <div> Java</div>
          </div>
          {/* <div className='cont'>
          <AiFillCopyrightCircle className='icon' />
            <div>C language</div>
          </div> */}
          <div className='cont'>
            <IoLogoJavascript className='icon' />
            <div>JavaScript</div>
          </div>
          <div className='cont'>
            <FaPython className='icon' />
            <div>Python</div>
          </div>
          <div className='cont'>
            <MdPermDataSetting className='icon' />
            <div>DSA</div>
          </div>
        </div>
      </div>
      <div className='part 3'>
        <h1>Database Skills</h1>
        <div className='skills'>
          <div className='cont'>
            <SiMysql className='icon' />
            <div>MySQL</div>
          </div>
          <div className='cont'>
            <SiOracle className='icon' />
            <div>Oracle DB</div>
          </div>
        </div>
      </div>
    </div>
  )
}
