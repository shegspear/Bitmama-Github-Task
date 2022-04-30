import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import './style.css'

function Index() {
  return (
    <div className='search-cont'>
        <input
            className='search-input' 
            placeholder='Find a repository...'
            type={'search'}
        />

        <div className='filter-btn-cont'>

            <DropdownButton
            
                variant="outline-secondary"
                title="Type"
                id="input-group-dropdown-1"
            >
                <Dropdown.Item href="#">Public</Dropdown.Item>
                <Dropdown.Item href="#">Private</Dropdown.Item>
            </DropdownButton>

            <DropdownButton
                variant="outline-secondary"
                title="Language"
                id="input-group-dropdown-1"
            >
                <Dropdown.Item href="#">Javascript</Dropdown.Item>
                <Dropdown.Item href="#">Python</Dropdown.Item>
                <Dropdown.Item href="#">Kotlin</Dropdown.Item>
                <Dropdown.Item href="#">C++</Dropdown.Item>
            </DropdownButton>

            <DropdownButton
                variant="outline-secondary"
                title="Sort"
                id="input-group-dropdown-1"
            >
                <Dropdown.Item href="#">Date</Dropdown.Item>
                <Dropdown.Item href="#">Size</Dropdown.Item>
            </DropdownButton>

        </div>
    </div>
  );
};

export default Index;