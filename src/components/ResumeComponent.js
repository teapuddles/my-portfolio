import React from 'react'
import ResumePDF from '../images/Resume_Tech_2021.pdf'


const ResumeComponent = () => {

    return(
        <div className="pdf-container" >
            <object className='resumePdf'
                data={ResumePDF}
                type='application/pdf'
                title='Kevin Gleeson Resume 2021'
                aria-label="Kevin Gleeson Tech Resume"
                style={{ border: '1', color: 'black' }}
                width='670'
                height='950'
            />
        </div>
    )
}

export default ResumeComponent