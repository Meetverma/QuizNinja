import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';
import { FaCrown } from 'react-icons/fa';

const UserProfile = () => {
    const { email } = useParams();
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/user/${email}`); // Include protocol in the URL
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      };
  
      fetchUserData();
    }, [email]);
  
    if (!userData) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-4 py-4 bg-gradient-to-r from-blue-400 to-purple-500 border-b">
          <h2 className="text-3xl font-bold text-white">{userData.name}</h2>
          <p className="text-lg text-gray-200">{userData.email}</p>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-4">
            <FaCrown className="text-yellow-400 mr-2" />
            <p className="text-lg font-semibold">Rank: {userData.rank}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold">Questions Solved</p>
            <PieChart
              data={[
                { title: 'Solved', value: userData.questionsSolved, color: '#3e8aff' },
                { title: 'Remaining', value: 500 - userData.questionsSolved, color: '#e5e7eb' },
              ]}
              lineWidth={20}
              radius={40}
              label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
              labelStyle={{
                fontSize: '8px',
                fontFamily: 'sans-serif',
                fill: '#fff',
              }}
              labelPosition={65}
              animate
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Favorite Genre</p>
            <p className="text-lg">{userData.favoriteGenre}</p>
          </div>
        </div>
      </div>
    );
};

export default UserProfile;
