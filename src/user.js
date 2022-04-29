import { useState, useEffect } from 'react';
import axios from 'axios';

export default function User() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('https://61ffea755e1c4100174f701b.mockapi.io/api/v1/users');
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    const removeName = (id) => {
        const newlist = data.filter((item) => item.id !== id);
        setData(newlist);
    }

    return (<div>
        {
            loading && <div>Loading</div>
        }
        {!loading && (
            <div>
                <h2>Users</h2>
                <ul>
                    {
                        data.map(item => (<li key = {item.id}>{item.name}
                        <button onClick={() =>removeName(item.id)}>Remove</button></li>))
                    }
               
                    </ul>
            </div>
        )}
    </div>)
}