import React,{Component} from 'react';
import NewsCard from './NewsCard';

class News extends React.Component{
    constructor(props){
        super(props);
       const state = {
            isLoading:false,
            NewsData : []
        }
     }
        
        
         componentDidMount(){
             
         fetch(this.props.data)
         .then(response=>response.json())
         .then(articles=>{this.setState({NewsData:articles,isLoading:true});})
         .catch(e => {
             console.log(e);
             });
          
        }
         
     
        render ()
        {
             if (this.state && !this.state.isLoading)
             {
                 return (<React.Fragment>Loading...</React.Fragment>);
             }
            else
            {
                  
          return (
                    <React.Fragment>
                    
                     {(!this.state) ? 'Loading' :  
                     Object.keys(this.state.NewsData.articles).map(item=>(
                        <NewsCard key={item} {...this.state.NewsData.articles[item]} />
                         )
                      
                     )};
                     
                    
                  </React.Fragment>
                );
             }
        }  
    }
export default News;