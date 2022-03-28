import { useState, useEffect } from 'react'; 
import InfoCard from '../InfoCard/InfoCard';
// import SearchBar from '../SearchBar/SearchBar';

const Search = (props) => {

    const [Info, setInfo] = useState([]);
    const [search, setSearch] = useState("");


    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://www.reddit.com/user/${search}/about.json`)
            .then(res => res.json())
            .then(data => {
                setInfo(data.data);
                console.log(data.data)
            });
    }
    

    var regDate = new Date(0);
    regDate.setUTCSeconds(Info.created);
  
    return (   
        <div>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="user-search"
                        placeholder="enter user name"
                        onChange={handleSearch}
                    />
                    <button type="submit">Search</button>
                </form>  
                {Info.name ? (
                    <div>
                        <div className='user-info'>
                            <InfoCard statName="created" statValue={Info.name} />
                            <InfoCard statName="name" statValue={Info.name} />
                            
                            <img src={Info.snoovatar_img} alt="user avatar" />
                        </div>
                    
                        <div className='info-cards'>
                            <InfoCard statName="Total karma" statValue={Info.total_karma} />
                            <InfoCard statName="Comment karma" statValue={Info.comment_karma} />
                            <InfoCard statName="Link karma" statValue={Info.link_karma} />
                            
                            
                        </div>
                    </div>
                ) : (
                    <span>please enter reddit user name</span>
                )}            
                
                
            </div>
            
        </div>
    )
}

export default Search;