import { useState, useEffect } from "react";
import instance, { apiKey } from "../api/apiConfig";

const StocksData = () =>{
    const [stock, setSearchStock] = useState('');
    const [stocks, setStocks] = useState([]);
    const [debounceText, setDebounceText] = useState(stock);

    useEffect(() =>{

        let initialTime =  setTimeout(() =>{
                setDebounceText(stock);
             },500)
       

        return () =>{
            clearTimeout(initialTime)
        }
        
    },[stock]);

    useEffect(() =>{

        const fetchStockData =  async() =>{


            const stockInfo = [];
    
            console.log(stock)
            try{
                if(debounceText){
                    const {data} = await instance.get(`/query?function=OVERVIEW&symbol=${debounceText}&interval=1min&apikey=${apiKey}`);
                    stockInfo.push(data)
        
                setStocks(stockInfo);

                }
                
            }
            catch{
                console.error()
            }
          
        }

        fetchStockData()

    },[debounceText])

    

//    stocks.map((stock,index) =>{
//     return(
//         <div key={index} className="text-white row">
//             <div>
//                 {stock['Meta Data']['2. Symbol']} : {stock['Time Series (1min)']['2021-07-07 15:07:00']['1. open']}
//             </div>
//         </div>
//     )
// })

    

    return (
        <div className="container mt-4 text-white ">
            <label htmlFor="tickers " className="form-label fw-bold fs-2">Search for Tickers</label>
            <input type="text"
             className="form-control w-50 mx-auto"
              id="tickers"
              placeholder='Search for tickers...'
              value={stock}
              onChange={(e) => setSearchStock(e.target.value.toUpperCase())}
               />
        </div>
    
    )
}

export default StocksData;