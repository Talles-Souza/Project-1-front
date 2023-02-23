
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { AuthenticationContext } from '../../services/context/token';
import React, { useContext, useEffect, useState } from "react";
import { apiGit } from '../../services/Api/apiConnection';
import './style.css';
function ImgRepository() {

    const [avatar, setAvatar] = useState('');
    const [bio, setBio] = useState('');
    const [name, setName] = useState('');
    const [followers, SetFollowers] = useState('');
    const [public_repos, setPublic_repos] = useState('');
    const [following, SetFollowing] = useState('');
    const gitUser = async () => {
        const response = await apiGit.get();
        setAvatar(response.data.avatar_url);
        setBio(response.data.bio)
        setName(response.data.name)
        SetFollowers(response.data.followers)
        SetFollowing(response.data.following)
        setPublic_repos(response.data.public_repos)
        console.log(response);
    }

    useEffect(() => {
        gitUser();
    }, [])



    var userLocal = JSON.parse(localStorage.getItem('user'));


    return (
        <div className='img-repository'>
            <div style={{ width: '55%%', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.7rem', alignItems: 'center' }}>
                <img style={{ width: '80%', height: '70%', borderRadius: '50%', marginLeft: '2.7rem' }} src={avatar}></img>
                <div className='text-a'>
                    <text className='text-a1'>{name}</text><br></br>
                </div>
                <div className='text-b'>
                    <text className='text-b3'>Followers : {followers}</text>
                    <text className='text-b2'>Following : {following}</text>
                    <text className='text-b1'>Public Repos : {public_repos}</text>
                </div>


            </div>
            <img height="90%" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Talles-Souza&layout=topt&langs_count=7&theme=flag-india&hide_border=true" />
        </div>
    );
}

export default ImgRepository;