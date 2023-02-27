import React from 'react';
import { useGetAllpostsQuery} from './store/postsApi';

const Home = () => {

    const {data,error, isLoading}=useGetAllpostsQuery();
    return (
        <div className='container'>
            {
                isLoading ? <p>Loading...</p> : error ? <p>An Error Occured...</p> : 
                <>
                <h2>Posty Posts</h2>
                <div>
                    {
                        data?.map((post) =>(
                          <div key={post.id}>
                            <p>{post.userId}</p>
                            <p>{post.id}</p>
                            <p>{post.title}</p>
                            <p>{post.body}</p>

                          </div>  
                        ))
                    }
                </div>
                </>
            }

        </div>
    );
}

export default Home;