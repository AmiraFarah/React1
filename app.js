class Topcomponent extends React.Component{
    render(){
        return(
<div className="top"> 
top
</div>      
  )
    }
}
class SideBar extends React.Component{
    render(){
        return(
<div className="side"> side</div>
        )
    }
}
class Body extends React.Component{
    render(){
        return(
            <div className='mbody'>
                body
                <div className="inner">
                inner body
                </div>
            </div>
        )
    }
}

class App extends React.Component{
    render(){
        return(
           < div className="main">
               <SideBar/>
            <div className="two">
            <div className="sss">
                <Topcomponent/> 
                <Topcomponent/>
                <Topcomponent/>
            </div>
            <div> <Body/></div>
            </div>  
               
            </div>
        )
    }
}
ReactDOM.render(
    // <h1>{message}</h1>,
    <App />,
    document.querySelector('.container')
);