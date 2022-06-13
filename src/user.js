import { useState, useEffect } from 'react';
import axios from 'axios';

export default function User() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await axios('https://swapi.dev/api/people');
            
            setData(response.data);
            setLoading(false);
        }
        fetchData();
    }, []);

    // const removeName = (id) => {
    //     const newlist = data.filter((item) => item.id !== id);
    //     setData(newlist);
    // }

    return (<div>
        {
            loading && <div>Loading</div>
        }
        {!loading && (
            <div>
                <h2>Users</h2>
                <ul>
                    {
                        data.forEach(item => (<li key = {item.count}>{item.results.name}
                        </li>)) 
                    }
               
                    </ul>
            </div>
        )}
    </div>)
}