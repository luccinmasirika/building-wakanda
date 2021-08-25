import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { dataType } from '../store/types';

interface listTD {
  onToggle(event: ChangeEvent): void;
  name: string;
}

const ListToDo: React.FC<listTD> = ({ onToggle, name }) => {
  return (
    <li className='ml-4'>
      <input type='checkbox' onChange={onToggle} /> {name}
    </li>
  );
};

export const TestList: React.FC<dataType> = (props) => {
  const onToggle = (event: ChangeEvent) => {
    console.log('event', event.target.nodeValue);
  };
  console.log(props.testData);
  return (
    <ul>
      {props.testData.map((el) => (
        <ListToDo key={el.id} name={el.name} onToggle={() => onToggle} />
      ))}
    </ul>
  );
};

export const TestListStore = connect(
  (state: dataType): dataType => ({
    testData: state.testData,
  })
)(TestList);
