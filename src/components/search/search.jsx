import { useState} from 'react'; 
import InfoCard from '../InfoCard/InfoCard';
import SearchBar from '../SearchBar/SearchBar';
import moment from 'moment';



const Search = (props) => {

    const [Info, setInfo] = useState([]);
    const [search, setSearch] = useState("");
    

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        fetch(`https://www.reddit.com/user/${search}/about.json`)
            .then(res => res.json())
            .then(data => {
                setInfo(data.data);
                // console.log(data.data)
            });
    }

    // Press Enter to Submit
    const enterPress = (e) => { 
        if (e.which === 13) { 
            handleSubmit() 
        }
    }

    
    var regDateInt = parseInt(Info.created * 1000);
    var regDate = new Date(regDateInt);
    var displayDate = regDate.toLocaleDateString();
    var today = new Date().getTime();

    const startDate = moment(regDateInt);
    const timeEnd = moment(today);
    const diff = timeEnd.diff(startDate);
    const diffDuration = moment.duration(diff);
    const daysAge = Math.floor(diffDuration.asYears()) + " years"
  
    return (   
        <div>
            <div className='container'>
                <SearchBar textChange={handleSearch} buttonClick={handleSubmit} enterPress={enterPress}></SearchBar>
                {Info.name ? (
                    <div>

                        <div className='avatar'>
                            <div className='avatar-container'>
                                <img src={Info.snoovatar_img} alt="user avatar" />
                            </div>
                            
                        </div>

                        <div className='user-info'>
                            <InfoCard statName="name" statValue={Info.name} />
                            <InfoCard statName="created" statValue={displayDate} />
                            <InfoCard statName="age" statValue={daysAge} />

                        </div>
                    
                        <div className='info-cards'>
                            <InfoCard statName="Total karma" statValue={Info.total_karma} />
                            <InfoCard statName="Comment karma" statValue={Info.comment_karma} />
                            <InfoCard statName="Link karma" statValue={Info.link_karma} />
                        </div>

                    </div>


                ) : (



                    <span>enter username above</span>
                )}            
                
            </div>
            
        </div>
    )
}

export default Search;