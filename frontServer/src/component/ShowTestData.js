import { useEffect, useState} from 'react';
import axios from 'axios';

function ShowTestData() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios("/test").then(response => setData(response.data));
    }, []);

    return (
        data.map((item, idx) =>
            <ul key={idx}>
                <li>{item.단지명}</li>
                <li>{item.전용면적}</li>
                <li>{item.시군구}</li>
            </ul>
        )
    );
}

export default ShowTestData;