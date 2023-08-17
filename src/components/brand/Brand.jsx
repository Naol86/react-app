import React from 'react';
import './brand.css';
import { AiFillGoogleCircle, AiOutlineSlack, AiOutlineDropbox } from 'react-icons/ai'
import { DiAtlassian } from 'react-icons/di';
import { FaShopify } from 'react-icons/fa';

const Brand = () => {
    return (
        <div className='brand'>
            <div className='brand__size'>
                <div className='brand__name-google'>
                    <AiFillGoogleCircle className='google' /> 
                    <p>Google</p>
                </div>
                <div className='brand__name-slack'>
                    <AiOutlineSlack />
                    <p>Slack</p>
                </div>
                <div className='brand__name-atlassian'>
                    <DiAtlassian />
                    <p>Atlassian</p>
                </div>
                <div className='brand__name-dropbox'>
                    <AiOutlineDropbox />
                    <p>Dropbox</p>
                </div>
                <div className='brand__name-shopify'>
                    <FaShopify />
                    <p>Shopify</p>
                </div>
            </div>
        </div>
    )
}

export default Brand