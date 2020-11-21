import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
const infosData = [
    {
        title: 'Opening Hours',
        descreption: 'We are open 7 days',
        icon: '',
        background: 'primary'
       },
       {
        title: 'Visit Our Location',
        descreption: 'Brooklyn, NY 10089 usa',
        icon: '',
        background: 'dark'
       },
       {
        title: 'Call us now',
        descreption: '+8845552244',
        icon: '',
        background: 'primary'
       }
]

const BusinessInfo = () => {

    return (
        <section>
            <InfoCard></InfoCard>
        </section>
    );
};

export default BusinessInfo;