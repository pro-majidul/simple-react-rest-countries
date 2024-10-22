import './country.css'
const Country = ({item}) => {
    const {name ,flags}= item;
    return (
        <div className='country'>
            <h3>Country Name {name?.common}</h3>
        
            <img src={flags?.png} alt="" />
        </div>
    );
};

export default Country;
