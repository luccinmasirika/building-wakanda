import * as React from 'react';
import Image1 from '../../assets/img/volcan.jpg';
import Image2 from '../../assets/img/lacVert.jpg';
import Image3 from '../../assets/img/volcan2.jpg';

interface IGeohazardProps {}

export const Geohazard: React.FunctionComponent<IGeohazardProps> = (props) => {
  return (
    <>
      <h1 className='text-5xl mt-12'>A unique geohazard complex</h1>
      <div className='w-full flex flex-wrap md:flex-nowrap pt-6'>
        <div className='w-full md:w-2/4 bg-gray-100 p-4'>
          <h1 className='text-3xl mx-2'>Incredibly beautiful</h1>
          <p>
            Eastern DRC is incredibly beautiful with its highlands, breathtaking
            landscapes, its cultural diversity, its resilience, and
            entrepreneurial spirit. The region has a natural vocation to be a
            hub for sustainable agriculture, tourism, mining, energy, and a
            world center for conferences. With its dynamical young population,
            it has everything to drive to success if only it could secure peace
            and good governance.
          </p>

          <h1 className='text-3xl mx-2 my-4'>
            Goma: Between an explosive lake and a suspended lava lake
          </h1>
          <p>
            The region around Goma is one of the places in the world facing the
            most challenging geohazards: a densely populated urban area with
            galloping demography located between the two most active volcanoes
            in Africa and a lake with the potential of delivering the most
            serious limnic explosion ever observed with 300 cubic kilometers of
            methane gas and 600 cubic kilometers of carbon dioxide dissolved in
            its water.
          </p>
          <p>
            The Western side of the East African Rift stands at the border of
            DRC, Rwanda, and Uganda, where for over 30 million years, the
            African continent has been slowly pulled apart by tectonic forces
            that gave birth to Lake Kivu and the eight volcanoes forming the
            Virunga Volcanic Province between the North of Lake Kivu to the
            South of Lake Edward.
          </p>
        </div>
        <div className='w-full md:w-2/4 mx-2'>
          <img src={Image1} alt='Nyiragongo' className='w-full mb-4' />
          <img src={Image2} alt='Nyiragongo mx-2' className='w-full' />
        </div>
      </div>
      <div className='w-full flex flex-wrap md:flex-nowrap pt-6'>
        <div className='w-full h-ful flex md:w-2/4 my-4 items-center bg-gray-900'>
          <img src={Image3} alt='Nyiragongo' className='w-full ' />
        </div>
        <div className='w-full md:w-2/4 mx-2 bg-gray-100 p-4'>
          <h1 className='text-3xl mx-2 mb-4'>Two dangerous young volcanoes</h1>
          <p>
            The Virunga volcanic Province contains eight volcanoes spread SW-NE
            over 80 kilometers along the border of the Democratic Republic of
            the Congo, Rwanda, and Uganda. The two youngest of these volcanoes
            are located in NW of Goma and NE of the town of Sake: Nyamuragira
            and Nyiragongo. These two exceptional volcanoes, the most active in
            Africa, are not older than 20,000 years, and they stand 13
            kilometers apart. They also have exceptionally fluid lava that makes
            their eruptions particularly dangerous. For example, Nyiragongo’s
            lava can move as fast as 100 kilometers per hour as it goes down the
            steep slopes of the volcano. The Nyiragongo and the Nyiramuragira
            are respectively 15 km and 30 km away from Goma. Nyiragongo is one
            of only three volcanoes in the world with a lava lake and has by far
            the largest. Nyamuragira is the most active volcano in Africa, with
            an eruption every three to four years.
          </p>
        </div>
      </div>
      <p>
        In recorded history, the Nyiragongo erupted three times, in 1977, 2001,
        and 2021. In 1977, Goma was a city of only 65,000 people. Following
        Rwanda’s genocide of 1994 and the successive wars that created
        insecurity in the countryside, the city grew to 400,000 by 2001. In
        2021, the population of Goma is over 1.1 million.
      </p>
      <p>
        Nyiragongo's deadliest eruption was on January 10th, 1977, when more
        than 600 people died. The Nyiragongo lava lake emptied 20-22 million
        cubic meters of lava in less than an hour. Lava flows arrived in Goma at
        a speed of up to 100 km per hour. This eruption is a reminder of the
        destructive power of the Nyiragongo.
      </p>

      <p>
        In Nyiragongo’s eruption of January 17th, 2002, between 14 and 34
        million cubic meters of lava erupted from fractures on its southern
        flanks in less than twelve hours. Melted lava continued to flow to Lake
        Kivu for a few more days creating a delta of 800 meters wide and 120
        meters long. The city of Goma was cut into two parts by one of the three
        lava flows. The lava flows destroyed a fifth of the city of Goma,
        including one-third of the runway of Goma international airport, over
        170 people died, over 350,000 people self-evacuated out of the 400,000
        inhabitants of the city of Goma, 100,000 people were left homeless.
      </p>
      <p>
        On May 22nd, 2021, the city of Goma saw the third recorded eruption of
        the Nyiragongo volcano since 1894. The eruption of 2021 caused the death
        of 32 people, and the displacement of over 400,000 people. The lava cut
        off electricity and water supplies to some areas. The flow was as wide
        as one kilometer and stopped 1.25 km from the Goma International
        Airport.
      </p>

      <p>
        As we think of preparing the city for the next eruption, we note that: -
        if nothing is changed, the city will continue to grow toward the volcano
        -Nyiragongo has many tuff cones inside the city of Goma (such as Mount
        Goma in which OVG is located) and under Lake Kivu. Therefore, the next
        eruption could very much start in the middle of Goma or under Lake Kivu.
      </p>
      <div className='w-full overflow-x-auto md:overflow-x-visible'>
        <Table />
      </div>
    </>
  );
};

const Table = () => (
  <table className='w-full border-collapse border border-gray-800 '>
    <tbody>
      <tr></tr>
      <td className='border border-gray-800 '>
        <p>
          <span>Eruption</span>
        </p>
      </td>
      <td className='border border-gray-800 '>
        <p>
          <span>Lava&nbsp;</span>
        </p>
      </td>
      <td className='border border-gray-800 '>
        <p>
          <span>Death&nbsp;</span>
        </p>
      </td>
      <td className='border border-gray-800 '>
        <p>
          <span>Displaced&nbsp;</span>
        </p>
      </td>
      <td className='border border-gray-800 '>
        <p>
          <span>Goma’s population</span>
        </p>
      </td>
      <tr>
        <td className='border border-gray-800 '>
          <p>
            <span>10 January 1977</span>
          </p>
        </td>
        <td className='border border-gray-800 '>
          <p>
            <span> 20- 22 million m³&nbsp;</span>
          </p>
        </td>
        <td className='border border-gray-800 '>
          <p>
            <span>70-600</span>
          </p>
        </td>
        <td className='border border-gray-800 '>
          <p>
            <span>65,000?</span>
          </p>
        </td>
        <td className='border border-gray-800 '>
          <p>
            <span>65,000</span>
          </p>
        </td>
      </tr>
      <tr>
        <td className='border border-gray-800 '>
          <p>
            <span>17 January 2002</span>
          </p>
        </td>
        <td className='border border-gray-800 '>
          <p>
            <span>14-34 million m³</span>
          </p>
        </td>
        <td className='border border-gray-800 '>
          <p>
            <span>170-250</span>
          </p>
        </td>
        <td className='border border-gray-800 '>
          <p>
            <span>350,000</span>
          </p>
        </td>
        <td className='border border-gray-800 '>
          <p>
            <span>400,000</span>
          </p>
        </td>
      </tr>
      <tr>
        <td className='border border-gray-800 '>
          <p>
            <span>22 May 20021</span>
          </p>
        </td>
        <td className='border border-gray-800 '>
          <p>
            <span>(to be determined)</span>
          </p>
        </td>
        <td className='border border-gray-800 '>
          <p>
            <span>34</span>
          </p>
        </td>
        <td className='border border-gray-800 '>
          <p>
            <span>450,000</span>
          </p>
        </td>
        <td className='border border-gray-800 '>
          <p>
            <span>1.1M</span>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
);
