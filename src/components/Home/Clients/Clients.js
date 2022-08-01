import React from 'react';
import redbull from '../../../images/redbull.png';
import kaspersky from '../../../images/kaspersky.png'
import world from '../../../images/world.png'
import endeavor from '../../../images/endeavor.png'

const clientsData = [redbull, kaspersky, world, endeavor];

const Clients = () => {
    return (
        <div>
            <h2 className="text-center mt-5 mb-5">Our Happy <span className='text-info'>Clients</span> </h2>

            <div className="row d-flex justify-content-center">
                {
                    clientsData.map(client => <img src={client} alt="" />)
                }
            </div>

        </div>
    );
};

export default Clients;