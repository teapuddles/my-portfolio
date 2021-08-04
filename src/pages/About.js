import React from 'react'
import Layout from '../components/Layout.js'

import cloudFlipBig from '../images/kevinPics/cloudFlipBig.png'
import kevinShanghai from '../images/kevinPics/kevinShanghai.jpg'
// import kevinArt from '../images/kevinPics/kevinArt.jpeg'


export default function About () {
    return (
        <Layout pageTitle="About Kevin">
            <div className="about-section">
            <div className="about-cloud-wrapper">
             <img key={cloudFlipBig}
                src={cloudFlipBig}
                alt={"flipped cloud"}
                className="about-cloud"
                >
                </img>
                </div>
            <div className="about-info-container">
            {/* <div className="about-section-info-1">
             <div className="about-text-1">
                About Me lololololololalsdjfkajsd;lfja;lsdjlfjlkasdjflajsdl;kfj;lkajsdlkfj
                lasjdfjlkasjd;lfjakl;sdjfl;kjal;ksdjflk;jal;sjdfl;jalksdjf;lja;sdjf;jasl;
                laskdjf;lkaj;dsjf;lkajksdkl;fjlk;aksjd;fjal;jdsfjasdkf;ljas;dljf;kjlasjd;fjla;jdsfjasdkf;alsdjf;lkja;lsdjf;ljasldfjl;ajsd;lfjl;jalksdjf
                lakdsfj;;lajsd;lkjfl;ajdljka;jf;ldskjf;aklsjdfl;ajsdl;fjl;asdjfjlk;lkasjdflkajsdf;lajdlkjfa;lsdfja;lksjd;flajsdlkfja;lskdjfa;ldjf

                </div>
            </div> */}
            <div className="about-pic-1-wrapper">
                <img key={kevinShanghai}
                src={kevinShanghai}
                alt={"kevin at bus station"}
                className="about-pic-1"
                />
                </div>
                {/* <div className="about-pic-2-wrapper">
              <img key={kevinArt}
                src={kevinArt}
                alt={"kevin at art show"}
                className="about-pic-2"
                />
                </div> */}
            <div className='about-section-info-2'>
            <div className="about-text-2">
                Hi this is Kevin's About Page   
                <br></br>About Me lololololololalsdjfkajsd;lfja;lsdjlfjlkasd<br></br>jflajsdl;kfj;lkajsdlkfj
                lasjdfjlkasjd;lfjakl;sdjfl;kj<br></br>al;ksdjflk;jal;sjdfl;jalksdjf;lja;sdjf;jasl;
                laskdjf;lkaj;dsjf;lkajksdkl;fjlk;aksjd;fjal;jdsfjasdkf;ljas;dljf;<br></br>kjlasjd;fjla;jdsfjasdkf;alsdjf;lkja;<br></br>lsdjf;ljasldfjl;ajsd;lfjl;jalksdjf
                lakdsfj;;l<br></br>ajsd;lkjfl;ajdljka;jf<br></br>;ldskjf;aklsjdfl;ajsdl;fjl;asdjfjlk;lkasjdflkajs<br></br>df;lajdlkjfa;lsdfja;lksjd;flajsdlkfja;lskdjfa;ldjf

              </div>
            </div>
            </div>
            <div className="about-section-info-foot-wrap">
            <div className="about-section-info-footer">
                For all contacts and inquiries, please click the email icon below.
            </div>
            </div>
            </div>
        </Layout>
    )
}