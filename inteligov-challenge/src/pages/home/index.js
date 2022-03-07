import React from "react";

import Header from '../../components/Header';
import DropZone from '../../components/DropZone';
import Table from '../../components/Table';

import './style.css';

export default function Home() {
  return (
    <div className="app">
      <Header />
      <DropZone />
      <Table />
    </div>
  );
}