import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Incidents from "./components/Incidents";

const dataMock = [
  {
    "id": 127022,
    "title": "Parking Violations",
    "description": "Caller reported that a vehicle is parked in the bike lane.",
    "address": "Towers Pkwy College Station, TX, 77845, USA",
    "occurred_at": 1600108747,
    "updated_at": 1600110913,
    "url": "https://bikewise.org/api/v1/incidents/127022",
    "source": {
      "name": "SeeClickFix.com",
      "html_url": "https://seeclickfix.com/issues/8579817",
      "api_url": "https://seeclickfix.com/api/v2/issues/8579817"
    },
    "media": {
      "image_url": null,
      "image_url_thumb": null
    },
    "location_type": null,
    "location_description": null,
    "type": "Unconfirmed",
    "type_properties": null
  }
]

describe ('Incidents test', () => {
    it ('scenario 1: renders Incidents component- loading - expect loading', () => {
      const {getByText} = render (<Incidents loading={true}/>);
      const linkElement = getByText (/Loading/i);

      expect (linkElement).toBeInTheDocument ();
    });

  it ('scenario 2: renders Incidents component- no data - expect no results', () => {
    const {getByText} = render (<Incidents data={[]}/>);
    const linkElement = getByText (/No Results/i);

    expect (linkElement).toBeInTheDocument ();
  });

  it ('scenario 3: renders Incidents component- with data , expect data rendered', () => {
    const {container , getByText} = render (<Incidents data={dataMock}/>);
    const linkElement = getByText (/Parking Violations/i);
    const articles =container.querySelectorAll('article');

    expect (linkElement).toBeInTheDocument ();
    expect (articles.length).toBe(1);

  });

});