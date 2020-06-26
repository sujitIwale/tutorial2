import React, { Component } from 'react';
import CourseList from './CourseList';
import SearchBox from './searchbox';
import Navigation from './components/Navigation/Navigation';
import {list} from './list.js';
import Background from './components/Background/Background';



class  App extends Component   {
    constructor() {
        super()
        this.state= {
            list:list,
            searchfield:''
        }
    }

    onSearchChange=(event) =>{
       
        const filteredCourses = this.state.list.filter(course => {
            return list.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log(filteredCourses);
    }

    render( ) {
        return (
            <div className='tc'>
           
            <Navigation />
            <Background />
            <h1 className='f1'>Courses</h1>
            <SearchBox searchChange={this.onSearchChange}/>
             <CourseList list={this.state.list} /> 
        </div>
        );

    }
    
       
        
    }

       


                                                                
export default App;