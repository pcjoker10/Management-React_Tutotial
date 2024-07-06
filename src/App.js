import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
    'id': 1,
    'image': 'https://picsum.photos/id/1/64/64',
    'name': '전우치',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://picsum.photos/id/2/64/64',
    'name': '홍길동',
    'birthday': '961225',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 3,
    'image': 'https://picsum.photos/id/3/64/64',
    'name': '춘향이',
    'birthday': '961223',
    'gender': '여자',
    'job': '대학생'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;