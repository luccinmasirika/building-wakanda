import * as React from 'react';

interface IProjectTableProps {}

export const ProjectTable: React.FC<IProjectTableProps> = (props) => {
  return (
    <table className='w-full table-auto border-collapse border border-gray-800'>
      <tbody>
        <tr>
          <td rowSpan={6} className='md:w-72'>
            <ul className='p-4'>
              <li className='list-outside md:list-inside my-4 list-disc'>
                <span className='list-outside md:list-inside my-4 list-disc'>
                  Give OVG{' '}
                </span>
                <strong>operational control </strong>
                <span className='list-outside md:list-inside my-4 list-disc'>
                  on its network (getting an{' '}
                </span>
                <strong>M2M gateway</strong>
                <span className='list-outside md:list-inside my-4 list-disc'>
                  ).
                </span>
              </li>
              <li className='list-outside md:list-inside my-4 list-disc'>
                <span className='list-outside md:list-inside my-4 list-disc'>
                  Add{' '}
                </span>
                <strong>four seismic stations</strong>
                <span className='list-outside md:list-inside my-4 list-disc'>
                  {' '}
                  and
                </span>
                <strong> 10 geodetic stations</strong>
                <span className='list-outside md:list-inside my-4 list-disc'>
                  {' '}
                  to the existing park of stations fully owned by the DRC (10
                  seismic stations and zero geodetic stations) to ensure its
                  independence and remove the main obstacle to an open data
                  policy.&nbsp;
                </span>
              </li>
              <li className='list-outside md:list-inside my-4 list-disc'>
                <span className='list-outside md:list-inside my-4 list-disc'>
                  Implement a{' '}
                </span>
                <strong>citizen safety net</strong>
                <span className='list-outside md:list-inside my-4 list-disc'>
                  {' '}
                  to ensure that maintenance, training, and functional costs are
                  taken care of even when the government is not paying the
                  bills.&nbsp;
                </span>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td className='border border-gray-800 '>Initiator</td>
          <td className='border border-gray-800 '>
            Professor Jonathan Esole/BuildingWakanda
          </td>
        </tr>
        <tr>
          <td className='border border-gray-800 '>End-user</td>
          <td className='border border-gray-800 '>
            Goma Volcanological Observatory Virunga Supersite
          </td>
        </tr>
        <tr>
          <td className='border border-gray-800 md:w-44'>
            Scientific advisors
          </td>
          <td className='border border-gray-800 md:w-80'>
            <ul>
              <li className='list-outside md:list-inside my-4 list-disc'>
                Professor Georges Mavonga (Head of the Seismology Department at
                OVG)
              </li>
              <li className='list-outside md:list-inside my-4 list-disc'>
                Professor Charles Bagalizi (Coordinator of the Virunga
                SuperSite)
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td className='border border-gray-800 md:w-44'>Supporters</td>
          <td className='border border-gray-800 md:w-80'>
            (to be added after individual permissions)
          </td>
        </tr>
        <tr>
          <td className='border border-gray-800 md:w-44'>Estimated cost</td>
          <td className='border border-gray-800 md:w-80'>$200,000</td>
        </tr>
      </tbody>
    </table>
  );
};
