import React from 'react'
import Footer from '../../components/footer';
import check from '../../assets/checkIcon.svg';
import badge from '../../assets/successBadge.svg';
import twitter from '../../assets/twitterBox.svg';
import facebook from '../../assets/facebookBox.svg';
import linkedIn from '../../assets/linkedIn.svg';
import mail from '../../assets/mailBox.svg';
import copyIcon from '../../assets/copyIcon.svg';
import LogoHeader from '../../components/logoHeader';
import Input from '../../components/uiComponents/input';
import Button from '../../components/uiComponents/button';

const Subscribed: React.FC = () => {
  const copyBtnText = (
    <p className="flex justify-center">
      <img src={copyIcon} alt='copyIcon' /> <span>Copy</span>
    </p>
  )

  return (
    <div>
      <LogoHeader />
      <div className="flex justify-center items-center flex-col">
        <img src={check} alt="check" />
        <div className="text-center mt-7">
          <p
            style={{ fontFamily: 'GibsonBold' }}
            className="text-3xl md:text-5xl mb-8 font-semibold">
            Great job signing up.
          </p>
          <p
            className="w-4/5 md:w-470 mb-10 mx-auto text-next-grey md:text-xl">Your email has been added to the access queue. Your reward
            <span className="text-next-blue"> coupon</span> will be sent when we launch
          </p>
        </div>
        <img
          className="w-10/12 md:w-auto"
          src={badge}
          alt="success badge" />
        <p
          className="mt-14 flex text-center md:text-left md:text-xl items-center flex-col w-4/5 md:w-500 text-next-grey">Interested in priority access and more referral points? <span className="opacity-80 block">Share link with your friends via the social links below.</span>
        </p>

        <div className="flex mt-10">
          <img className="mr-5 md:mr-10" src={twitter} alt="twitter" />
          <img className="mr-5 md:mr-10" src={facebook} alt="facebook" />
          <img className="mr-5 md:mr-10" src={mail} alt="mail" />
          <img src={linkedIn} alt="linkedIn" />
        </div>
      </div>

      <p className="text-next-grey md:text-xl text-center mt-7 md:mt-5">or share the unique link below:</p>

      <div className="mx-auto mt-10 flex justify-center flex-col md:flex-row w-4/5 md:w-3/5">
        <p className="w-full md:w-80">
          <Input 
            value='https://nexthandle.ng/referred/?user=6PQAY'
            onChange={() => {}}
          />
        </p>
        <p className='w-full md:w-24 md:ml-5'>
          <Button
            text={copyBtnText}
          />
        </p>
      </div>

      <p className="text-center w-4/5 md:w-full mx-auto md:text-xl text-next-blue py-10">The more friends that join, the more referral points you get and the sooner you get access.</p>
      <Footer />
    </div>
  )
}

export default Subscribed
