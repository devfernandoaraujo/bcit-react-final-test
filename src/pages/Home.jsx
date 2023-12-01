import foods from "../db/foods"
import SearchComponent from "../components/Search";
import { useState } from "react"
const HomePage =()=>{
    
    const [worldFood, setWorldFood] = useState(foods);

    const filter = (e) => { 
        const searchTerm = e.target.value.toLowerCase(); 

        highlight(searchTerm);

        if (!searchTerm.trim()) {
            setWorldFood(foods);
            return;
        }
        
        const newValues = foods.filter((food) => { 
            return (
                food.name.toLowerCase() === searchTerm ||
                food.description.split(" ").some((v) => v.toLowerCase() === searchTerm)
            );
        });

        if(newValues && newValues.length > 0){
            setWorldFood(newValues);
        }
        else{
            setWorldFood(foods);
        }
        
        
    };

    const highlight =(searchValue)=>{
        let ob = new Mark(document.querySelector(".select"));
        ob.unmark(); 
        ob.mark( 
                searchValue, 
                { className: 'highlight' } 
            ); 
    }

    return (
        <div  className="container-fluid">
            <h1 className="row">List of foods</h1>
            <div className="row">
                <div className="row-6">
                    <SearchComponent onChange={ filter } />
                </div> 
            </div>
            <div className="row">
                {

                    worldFood.map((food) => (
                         <div key={food.id} className="row select">
                                <div className="col-6">{food.name}</div>
                                <div className="col-6">{food.description}</div>
                        </div> 
                    )) 
                }
            </div>

        </div>
    )
}

export default HomePage;